<template>
<b-card-group deck>
    <b-col md="12">
        <b-card bg-variant="primary" text-variant="white">
            <blockquote class="card-blockquote">
                <p>Confirmados</p>
                <footer>
                    <small>{{getNacional.Confirmados}}</small>
                </footer>
            </blockquote>
        </b-card>
    </b-col>
    <b-col md="12">
        <b-card bg-variant="success" text-variant="white">
            <blockquote class="card-blockquote">
                <p>Recuperados</p>
                <footer>
                    <small>{{getNacional.Recuperados}}</small>
                </footer>
            </blockquote>
        </b-card>
    </b-col>
    <b-col md="12">
        <b-card bg-variant="danger" text-variant="white">
            <blockquote class="card-blockquote">
                <p>Fallecidos</p>
                <footer>
                    <small>{{ getNacional.Confirmados - getNacional.Recuperados - getNacional.Fallecidos}}</small>
                </footer>
            </blockquote>
        </b-card>
    </b-col>
    <b-col md="12">
        <b-card bg-variant="dark" text-variant="white">
            <blockquote class="card-blockquote">
                <p>Fallecidos</p>
                <footer>
                    <small>{{getNacional.Fallecidos}}</small>
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
        ...mapGetters(['getNacional'])
    },
}
</script>
<style lang="scss" scoped>

</style>