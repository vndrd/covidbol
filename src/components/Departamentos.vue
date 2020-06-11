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
    computed: {
        ...mapGetters(['getDepartamentos','getTimeseries']),
        departamentos: function(){
            return this.getDepartamentos
        },
        sumarDepartamentos: function(){
            let agruparPorFecha = () => 
                 this.getTimeseries
                    .reduce((acc, curr) => {
                        if(!acc[curr.fecha]) 
                            acc[curr.fecha] = []; //If this type wasn't previously stored
                        acc[curr.fecha].push(curr);
                        return acc;
                    },[])
            let convertirToArray = (arr,agrupados) => {
                Object.keys(agrupados).forEach(function (key) {
                    arr.push({fecha: key,datos :agrupados[key]});
                });
                return arr
            }
            let sumarPorTipoCaso = (tipo,datos) => {
                let suma = datos.reduce( (acc, item) => {
                        acc = acc + item[tipo]
                        return acc
                    }, 0)
                return suma
            }
            let sumarActivos = (datos) => {
                let suma = datos.reduce( (acc, item) => {
                        acc = acc + (item.confirmados - item.recuperados - item.fallecidos)
                        return acc
                    }, 0)
                return suma
            }
            let sumarPorFecha = ( fechas ) => {
                return fechas.reduce( (arr,{fecha,datos}) => {
                    let sumaCasosConfirmados = sumarPorTipoCaso( 'confirmados' , datos)
                    let sumaCasosRecuperados = sumarPorTipoCaso( 'recuperados' , datos)
                    let sumaCasosFallecidos = sumarPorTipoCaso( 'fallecidos' , datos)
                    let sumaCasosActivos = sumarActivos( datos )
                    
                    arr.push({
                        sumaCasosConfirmados,
                        sumaCasosRecuperados,
                        sumaCasosFallecidos,
                        sumaCasosActivos,
                        fecha,
                    })
                    return arr
                }, [])  
            }
            let res = convertirToArray( [], agruparPorFecha() )
            return sumarPorFecha(res)
        },
        mostrarDepartamentos: function(){
            if(this.sumarDepartamentos.length ==0){
                console.log({text: 'no mostrar'})
                return false
            }else {
                console.log({text: 'MOSTRAR'})
            }
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