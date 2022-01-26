<template>
  <div class="login">
    <form @submit.prevent="rezerviraj">
    <div class="back-wrapper">
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Pregled linija</h1>
    </div>
    <div class="container">
      <div class="row">
        <div><img id="linije" src="@/assets/25.jpg"></div>
       
      </div>
      <div class="row">
     
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <div class="form-group">
              <label for="kolicina">Količina: </label>
              <input type="kolicina" 
                     v-model="kolicinar"
                     id="kolicina" placeholder="Unesite količinu"/>
            </div>
      <button class="function">
          
            <a>Rezerviraj ✔</a>
          
        </button>

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
rezerviraj(){
firebase.firestore().collection("Karte").doc(this.userEmail).collection(this.userEmail).doc("25").get().then(doc =>{
this.cijena=doc.data().Cijena;
this.kolicina=doc.data().Kolicina;
})

firebase.firestore().collection("Karte").doc(this.userEmail).collection(this.userEmail).doc("25").set({
Cijena: this.cijena+6,
Kolicina: this.kolicina+1, 
})

},

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
