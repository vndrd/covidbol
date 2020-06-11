<template>
    <b-container>
        <b-row>
            <b-col md="6">       
                <b-card
                    border-variant="secondary"
                    header="Casos Acumulados por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                    <Daily v-if="mostrarDepartamentos" :datos="sumarDepartamentos" />
                </b-card>
            </b-col>
            <b-col md="6">
                <b-card
                    border-variant="secondary"
                    header="Evolución de Casos por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                    <Daily v-if="mostrarDepartamentos" :datos="sumarDepartamentos" />
                </b-card>
            </b-col>
            <b-col md="6">
                <b-card
                    border-variant="secondary"
                    header="Evolución de Casos por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                </b-card>
            </b-col>
            <b-col md="6">
                <b-card
                    border-variant="secondary"
                    header="Evolución de Casos por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import Daily from '@/components/Daily'
export default {
    name: 'Departamentos',
    mounted(){
        setTimeout(()=> {
            
        },2000)
    },
    methods: {
        sumarPorTipoCaso: (tipo,datos) => {
            let suma = datos.reduce( (acc, item) => {
                    acc = acc + item[tipo]
                    return acc
                }, 0)
            return suma
        },
        sumarActivos: (datos) => {
            let suma = datos.reduce( (acc, item) => {
                    acc = acc + (item.confirmados - item.recuperados - item.fallecidos)
                    return acc
                }, 0)
            return suma
        },
    },
    computed: {
        ...mapGetters(['getDepartamentos','timeseries']),
        departamentos: function(){
            return this.getDepartamentos
        },
        sumarDepartamentos: function(){
            return this.timeseries.reduce( (arr,{fecha,datos}) => {
                arr.push({
                    sumaCasosConfirmados: this.sumarPorTipoCaso( 'confirmados' , datos),
                    sumaCasosRecuperados: this.sumarPorTipoCaso( 'recuperados' , datos),
                    sumaCasosFallecidos:  this.sumarPorTipoCaso( 'fallecidos' , datos),
                    sumaCasosActivos:     this.sumarActivos( datos ),
                    fecha,
                })
                return arr
            }, [])  
        },
        mostrarDepartamentos: function(){
            if(this.sumarDepartamentos.length ==0)
                return false
            return true
        }
    },
    components: {
        Daily
    }
}
</script>
<style lang="scss" scoped>
.card {
    margin-bottom: 1rem;
}
</style>