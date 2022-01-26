<template>
  <div class="login">
    <div class="back-wrapper">
      
      <i v-if="mobileVersion()" @click="$router.go(-1)" class="fa fa-angle-left" style="font-size:36px"></i>
      <h1 class="title">Pregled kupnji</h1>
    </div>
    <div class="functions-wrapper col-6">
 
   <Kupnje :key="Kupnje.id" :Kupnje="Kupnje" v-for="Kupnje in karte" />
  
    </div>
    <div>
      <button @click="zavrsi()" type="button" >Završi kupnju</button>
    </div>


  </div>
</template>

<script>
import store from '@/store.js'
import Kupnje from '@/components/Kupnje.vue'
export default {
  data () {
    return store

  },
  components: {
      Kupnje
  },
mounted(){
 if(this.karte.some(Kupnje => Kupnje.id === doc.data().id)==false){
    firebase.firestore().collection("Karte").doc(this.userEmail).collection(this.userEmail).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let Kupnje=doc.data()
         Kupnje.id = doc.id
        this.karte.push(Kupnje);
}
 else if( change.type === 'removed'){
                           this.karte = this.karte.filter(karte =>{
                            return karte.id != change.doc.id
                          })
                        }
    });
});
 }
 
  },
  

  methods: {
    mobileVersion() {
      return window.innerWidth < 762;
    },
    zavrsi(){
        db.collection('Karte').doc(this.userEmail).collection(this.userEmail).get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
  doc.ref.delete()
  });
}).catch(function(error) {
        console.log(error)
      }).then(alert("Kupnja završena"));
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
