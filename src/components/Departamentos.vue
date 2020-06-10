<template>
    <div>
        <h1>From departamentos</h1>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Departamentos',
    mounted(){
        console.log({dep: this.getDepartamentos})
    },
    computed: {
        ...mapGetters(['getDepartamentos'])
    }

}
</script>
<style lang="scss" scoped>

</style>