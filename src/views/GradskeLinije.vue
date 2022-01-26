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
            <router-link to="/linija1"><button class="function">
          
            <span>+</span><span class="btn-text">1</span>
          
        </button>
        </router-link>
        <div class="col-sm">
             <router-link to="/linija2"><button class="function">
         
            <span>+</span><span class="btn-text">2</span>
          
        </button>
        </router-link>
  
        </div>
         <div class="col-sm">
             <router-link to="/linija3"><button class="function">
         
            <span>+</span><span class="btn-text">3</span>
          
        </button>
        </router-link>
  
        </div>
         <div class="col-sm">
             <router-link to="/linija4"><button class="function">
         
            <span>+</span><span class="btn-text">4</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija5"><button class="function">
         
            <span>+</span><span class="btn-text">5</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija6"><button class="function">
         
            <span>+</span><span class="btn-text">6</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija8"><button class="function">
         
            <span>+</span><span class="btn-text">8</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija9"><button class="function">
         
            <span>+</span><span class="btn-text">9</span>
          
        </button>
        </router-link>
  
        </div>
        </div>
      </div>
    </div>
    </div>


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

}
</style>
