<template>
  <div class="home">
    <b-container fluid>
      <b-row>
        <b-col md="2">
          <b-card bg-variant="info">
            <b-card-title>
              <b-button>asd</b-button>
            </b-card-title>
          </b-card>
        </b-col>
        </b-row>      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'Home',
  components: {
    
  },
  mounted(){
    //usage:
    this.loadData()
    console.log({naciona: this.getNacional})
  },
  methods: {
    ...mapActions(['loadData'])    
  },
  computed: {
    ...mapGetters(['getNacional'])
  }
}



</script>
