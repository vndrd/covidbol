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
            default: {}
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
                
            ],
            innerSize: '30%',
        }
    ],
            }
        }         
    },
    mounted(){
        this.setOptions()
        console.log("from pie chart")
        console.log({datos:this.datos})
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
            this.options.series[0].data.push(
                {name: 'Activos',
                    y: (this.datos.Confirmados - this.datos.Fallecidos - this.datos.Recuperados)/this.datos.Confirmados*100},
                {name: 'Decesos',
                    y: (this.datos.Fallecidos)/this.datos.Confirmados*100},
                {name: 'Recuperados',
                    y: (this.datos.Recuperados)/this.datos.Confirmados*100},
                
            )
            console.log({options: this.options.series[0].data})
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