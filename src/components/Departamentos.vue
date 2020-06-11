<template>
    <b-container>
        <b-row>
            <b-col md="6">       
                <b-card
                        border-variant="secondary"
                        header="Evolución de Casos por día"
                        header-bg-variant="secondary"
                        header-text-variant="white"
                        align="center"
                    >
                    <Daily  :datos="sumarDepartamentos"/>
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
                console.log("this is the siasdas")
                console.log(
                    this.sumarDepartamentos
                )
        },2000)
    },
    computed: {
        ...mapGetters(['getDepartamentos','getTimeseries']),
        departamentos: function(){
            console.log({computeddeps: this.getDepartamentos})
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
            let sumarPorFecha = ( fechas ) => {
                return fechas.reduce( (arr,{fecha,datos}) => {
                    let sumaCasosConfirmados = datos.reduce( (s, item) => {
                        s = s + item.confirmados
                        return s
                    }, 0)
                    arr.push(
                        {sumaCasosConfirmados,
                        fecha}
                    )
                    return arr
                }, [])  
            }
            let res = convertirToArray( [], agruparPorFecha() )
            return sumarPorFecha(res)
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