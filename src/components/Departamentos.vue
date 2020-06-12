<template>
    <b-container fluid>
        <b-row>
            <b-col md="6">       
                <b-card
                    border-variant="secondary"
                    header="Casos Acumulados por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                    <LineNacional v-if="mostrarDepartamentos" :datos="sumarDepartamentos" />
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
                    <PieChartNacional v-if="mostrarDepartamentos" :datos="sumarDepartamentos" />
                </b-card>
            </b-col>
        </b-row>
        <b-row>
            <b-col md="6">
                <b-card
                    border-variant="secondary"
                    header="Evolución de Casos por día"
                    header-bg-variant="secondary"
                    header-text-variant="white"
                    align="center"
                    >
                    <LineDepartamental v-if="mostrarDepartamentos" :datos="soloDepartamentos" />
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
import LineNacional from '@/components/LineNacional'
import LineDepartamental from '@/components/LineDepartamental'
import PieChartNacional from '@/components/PieChartNacional'
export default {
    name: 'Departamentos',
    mounted(){
        setTimeout(()=> {
            console.log(
                this.getNacional
            )
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
        ...mapGetters(['getDepartamentos','timeseries','getNacional']),
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
        soloDepartamentos: function(){
            return this.timeseries.reduce( (acc,dia) => {
                let d = dia.datos.filter( item => item.departamento===2 )
                if(d.length === 0)
                    d = [{
                        recuperados: 0,
                        confirmados: 0,
                        fallecidos: 0,
                        fecha: dia.fecha,
                    }]
                acc.push(d[0])
                return acc
            },[])  
        },
        mostrarDepartamentos: function(){
            if(this.sumarDepartamentos.length ==0)
                return false
            return true
        }
    },
    components: {
        LineNacional,
        LineDepartamental,
        PieChartNacional,
    }
}
</script>
<style lang="scss" scoped>
.card {
    margin-bottom: 1rem;
}
</style>