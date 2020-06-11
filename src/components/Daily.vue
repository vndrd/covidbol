<template>
    <b-col md="12">
        <highcharts :options="opciones" v-if="mostrar"></highcharts>
    </b-col>    
</template>
<script>
export default {
    name: 'Daily',
    props: {
        datos: {
            default: []
        }
    },
    data() {
        return {
            mostrar: false,
            options: {
                chart: {    scrollablePlotArea: {
            
                }  },
                credits: {  enabled: false  },
                title: {
                    text: ''
                },
                xAxis: {
                     tickInterval: 1, // one week
                     tickWidth: 0,
                     gridLineWidth: 1,
                },
                yAxis: {
                    title: null
                },
                series: []
            }
        }         
    },
    mounted(){
        this.setOptions()
    },
    methods: {
        setOptions: function(){
            this.mostrar = false
            this.options.xAxis.categories = []
            let confirmados = [], 
                recuperados = [],
                decesos = [],
                activos = []
            this.datos.map( item => {
                this.options.xAxis.categories.push(item.fecha)
                confirmados.push(item.sumaCasosConfirmados)
                recuperados.push(item.sumaCasosRecuperados)
                decesos.push(item.sumaCasosFallecidos)
                activos.push(item.sumaCasosActivos)
            })
            console.log({confirmados,recuperados,decesos})
            this.options.series.push(
                {name: 'confirmados',data: confirmados,lineWidth: 1},
                {name: 'decesos',data: decesos,lineWidth: 1},
                {name: 'recuperados',data: recuperados,lineWidth: 1},
                {name: 'activos',data: activos,lineWidth: 1},
            )
            this.mostrar = true
        }
    },
    computed: {
        opciones: function(){
            return this.options
        }
    }
}
</script>