<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col md="2" >
          <!-- style="background:red;" -->
          <TotalCasos />
        </b-col>
        <b-col md="10" >
            <Departamentos />
        </b-col>
      </b-row>      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import TotalCasos from '@/components/TotalCasos'
import Departamentos from '@/components/Departamentos'

export default {
  name: 'Home',
  components: {
    TotalCasos,
    Departamentos,
  },
  mounted(){
    //usage:
    this.loadData()
  },
  methods: {
    ...mapActions(['loadData'])    
  },
  
}



</script>
