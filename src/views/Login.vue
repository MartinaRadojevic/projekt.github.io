<template>
  <div class="login">
    <form @submit.prevent="login">
    <div class="back-wrapper">
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Prijava korisnika</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
                      <div class="form-group">
              <label for="email">Email adresa</label>
              <input v-model="email" type="email" class="form-control"
                     id="email" placeholder="Unesite
email"/>
            </div>
            <div class="form-group">
              <label for="password">Lozinka</label>
              <input v-model="password" type="password" class="form-control"
                     id="password" placeholder="Unesite lozinku"/>
            </div>
            <button type="submit" class="function">
              <span>+</span><span class="btn-text">Potvrdi</span>
            </button>
  
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
    }
  },

  

  methods: {
    mobileVersion() {
      return window.innerWidth < 762;
    },
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        console.log(error)
        alert("Neispravna prijava")
      }).then( ()=> {
          this.$router.push('/')
      }
      )
    }
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
