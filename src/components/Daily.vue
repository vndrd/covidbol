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
            this.options.xAxis.categories = []
            let confirmados = []
            this.datos.map( item => {
                this.options.xAxis.categories.push(item.fecha)
                confirmados.push(item.sumaCasosConfirmados)
            })
            this.options.series.push({name: 'confirmados',data: confirmados})
            this.mostrar = true
            console.log({tes: 'NOT NOT NOT  null'})
            console.log({datos: this.datos})
        }
    },
    computed: {
        opciones: function(){
            return this.options
        }
    }
}
</script>