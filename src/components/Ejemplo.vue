<template>
    <b-col md="12">
        <highcharts :options="opciones" ></highcharts>
    </b-col>    
</template>
<script>
export default {
    name: 'Daily',
    props: {
        datos: {
            default: {}
        }
    },
    data() {
        return {
            options: {
                chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            xAxis: {
                categories: []
            },
            yAxis: {
                title: {
                    text: 'Casos por día'
                }
            },
            series: [{
                data: []
            }, ]
            }
        }         
    },
    computed: {
        opciones: function(){
            return this.options
        }
    }
}
</script>