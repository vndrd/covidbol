<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col md="3" >
          <!-- style="background:red;" -->
          <TotalCasos />
        </b-col>
        </b-row>      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions} from 'vuex'
import TotalCasos from '@/components/TotalCasos'

export default {
  name: 'Home',
  components: {
    TotalCasos
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
