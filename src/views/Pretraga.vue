<template>
  <div class="login">
    <form @submit.prevent="trazi(broj)">
    <div class="back-wrapper">
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Pretraga linija</h1>
    </div>
    <div class="container">
        <div class="row">
        </div>
      <div class="input-group rounded">
  <input v-model="broj" type="search" class="form-control rounded" placeholder="Broj linije" aria-label="Search"
    aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <button><i class="fa fa-search"></i></button>
  </span>
</div>
    </div>
     
    </form>
  </div>
</template>

<script>
import store from '@/store.js'
export default {
  data () {
    return store

  },

  

  methods: {
    mobileVersion() {
      return window.innerWidth < 762;
    },
    trazi(){
    this.$router.push({ name: this.broj })
    }
  }
  
}
</script>

<style scoped lang="scss">
#linije{
padding-bottom: 2%;
}
#wrapper2{
    position: absolute;
    
    background-color:white;
    padding: 4px;
    padding-left: 10%;
   
    .title {
      
      flex: auto;
    }
}

.login {
  background-color: #7DAA96;
  height: 100vh;
  .back-wrapper {
    display: flex;
    background-color: #41764b;
    padding: 4px 0;
    i {
      padding-left: 8px;
    }
    .title {
      flex: auto;
    }
  }
  .container {
    padding-top: 36px;
  }
  #grlinije{
   width:40%;
   height:30%;
  }
}
</style>
