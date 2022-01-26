<template>
  <div class="login">
    <div class="back-wrapper">
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Pregled linija</h1>
    </div>
    <div class="functions-wrapper col-6">
    <div class="container">
      <div class="row">
        <div class="col-sm">
            <router-link to="/gradske"><button class="function">
          
            <span>+</span><span class="btn-text">GRADSKE</span>
          
        </button>
        </router-link>
        <div class="col-sm">
             <router-link to="/prigradske"><button class="function">
         
            <span>+</span><span class="btn-text">PRIGRADSKE</span>
          
        </button>
        </router-link>
  
        </div>
        </div>
      </div>
    </div>
    </div>
     <div ><img id="grlinije" src="@/assets/grlinije.jpg"></div>

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

  }
  
}
</script>

<style scoped lang="scss">
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
