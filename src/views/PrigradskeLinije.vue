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
            <router-link to="/linija21"><button class="function">
          
            <span>+</span><span class="btn-text">21</span>
          
        </button>
        </router-link>
        <div class="col-sm">
             <router-link to="/linija22"><button class="function">
         
            <span>+</span><span class="btn-text">22</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija23"><button class="function">
         
            <span>+</span><span class="btn-text">23</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija25"><button class="function">
         
            <span>+</span><span class="btn-text">25</span>
          
        </button>
        </router-link>
  
        </div>
        <div class="col-sm">
             <router-link to="/linija26"><button class="function">
         
            <span>+</span><span class="btn-text">26,27,28</span>
          
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
