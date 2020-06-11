<template>
    <b-container>
        <b-row>
            <b-col md="6">
                <h4>Casos por día</h4>
                <Daily  :datos="sumarDepartamentos"/>
            </b-col>
            <b-col md="6">
                <h4>Recuperados por día</h4>
            </b-col>
            <b-col md="6">
                <h4>Fallecidos por día</h4>
            </b-col>
            <b-col md="6">
                <h4>Distribición de los casos</h4>
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

</style>