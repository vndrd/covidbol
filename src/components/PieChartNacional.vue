<template>
    <b-col md="12">
        <highcharts :options="opciones" v-if="mostrar"></highcharts>
    </b-col>    
</template>
<script>
export default {
    name: 'PieChartNacional',
    props: {
        datos: {
            default: []
        }
    },
    data() {
        return {
            mostrar: false,
            options: {
                chart: {
                    type: 'pie'
                },
            title: {
                text: 'Casos al 10/06/2020'
            },
            subtitle: {
                text: 'asdasdasd'
            },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            data: [
                {
                    name: "Chrome",
                    y: 12.74,
                },
                {
                    name: "Firefox",
                    y: 10.57,
                },
                {
                    name: "Internet Explorer",
                    y: 7.23,
                },
                {
                    name: "Safari",
                    y: 5.58,
                },
                {
                    name: "Edge",
                    y: 4.02,
                },
                {
                    name: "Opera",
                    y: 1.92,
                },
                {
                    name: "Other",
                    y: 7.62,
                }
            ]
        }
    ],
            }
        }         
    },
    mounted(){
        this.setOptions()
        console.log("from pie chart")
    },
    methods: {
        setOptions: function(){
            this.mostrar = false
            // this.options.xAxis.categories = []
            // let confirmados = [], 
            //     recuperados = [],
            //     decesos = [],
            //     activos = []
            // this.datos.map( item => {
            //     this.options.xAxis.categories.push(item.fecha)
            //     confirmados.push(item.sumaCasosConfirmados)
            //     recuperados.push(item.sumaCasosRecuperados)
            //     decesos.push(item.sumaCasosFallecidos)
            //     activos.push(item.sumaCasosActivos)
            // })
            // console.log({confirmados,recuperados,decesos})
            // this.options.series.push(
            //     {name: 'confirmados',data: confirmados,lineWidth: 1},
            //     {name: 'decesos',data: decesos,lineWidth: 1},
            //     {name: 'recuperados',data: recuperados,lineWidth: 1},
            //     {name: 'activos',data: activos,lineWidth: 1},
            // )
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