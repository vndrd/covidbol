<template>
<b-card-group>
    <b-col md="6" sm="12" class="mb-3">
        <div class="form">
            <h2 class="text-left">COVID-19 | Bolivia</h2>
            <b-form-select v-model="region" class="mb-3">
                <b-form-select-option :value="null">Selecciona una región</b-form-select-option>
                <b-form-select-option value="0"  default>Nacional</b-form-select-option>
                <b-form-select-option value="1">Santa Cruz</b-form-select-option>
            </b-form-select>
        </div>
        <b-card class="float-right">
            <blockquote class="card-blockquote">
                <h6>Actualización</h6>
                <footer>
                    <small>6/10</small>
                </footer>
            </blockquote>
        </b-card>
    </b-col>
    <b-col md="6" sm="12" class="mb-3">
        <b-card bg-variant="primary" text-variant="white" class="float-left">
            <blockquote class="card-blockquote">
                <h6>Confirmados</h6>
                <footer>
                    <small>{{getNacional.Confirmados}}</small>
                </footer>
            </blockquote>
        </b-card>
        <b-card bg-variant="success" text-variant="white" class="float-left">
            <blockquote class="card-blockquote">
                <h6>Recuperados</h6>
                <footer>
                    <small>{{getNacional.Recuperados}}</small>
                </footer>
            </blockquote>
        </b-card>
        <b-card bg-variant="dark" text-variant="white" class="float-left">
            <blockquote class="card-blockquote">
                <h6>Fallecidos</h6>
                <footer>
                    <small>{{getNacional.Fallecidos}}</small>
                </footer>
            </blockquote>
        </b-card>
        <b-card bg-variant="danger" text-variant="white" class="float-left">
            <blockquote class="card-blockquote">
                <h6>Activos</h6>
                <footer>
                    <small>{{ getNacional.Confirmados - getNacional.Recuperados - getNacional.Fallecidos}}</small>
                </footer>
            </blockquote>
        </b-card>
    </b-col>
</b-card-group>  
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: 'TotalCasos',
    computed: {
        ...mapGetters(['getNacional']),
    },
    data(){
        return {
            region: null
        }
    }

}
</script>
<style lang="scss" scoped>
small {
    font-size: 2rem;
    font-weight: 600;
}
.card-body {
    padding: .8rem;
}
.card {
    border-radius: 0;
    width: 25%;
}
.form {
    width: 50%;
    float: left;
}
</style>