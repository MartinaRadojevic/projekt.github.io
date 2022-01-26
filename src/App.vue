<template>
  <div id="app">
    <div class="nav-icons-wrapper">
      <div class="square"></div>
      <div class="circle"></div>
      <div class="triangle-down"></div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        
      </button>
      <router-link to="/"><a class="navbar-brand" style="color: white">GettingArround Pula</a></router-link>
      <span style="font-size:30px;cursor:pointer;" @click="openNav()">&#9776; </span>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
  
        </ul>
      </div>
      <div id="pr">
        <router-link style="color:white;" to="/pretraga"><i style="font-size:25px;" class="fa fa-search" ></i></router-link>
      </div>
    </nav>
    <router-view></router-view>
    <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <router-link to="/pregledkupnji"><a id="sidetext">Pregled kupnji</a></router-link>
  <router-link to="/termini"><a id="sidetext">Termini</a></router-link>
  <a style="cursor: pointer;" id="sidetext" @click="logout()">Odjava</a>

</div>
  </div>
  
</template>

<script>
import store from '@/store.js'
export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut()
    },
    openNav() {
  document.getElementById("mySidenav").style.width = "250px";
},
closeNav() {
  document.getElementById("mySidenav").style.width = "0";
},


  },
   mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userEmail = user.email
        this.authenticated = true
        console.log("User is logged in with email " + user.email)
        
        
        if (this.$route.name === 'Login')
          this.$router.push({name: 'Home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'Login')
          this.$router.push({name: 'Login'}).catch(err => console.log(err))
      }
    });
    },
    
  
}
</script>

<style lang="scss">
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
#sidetext{
font-size:20px;
color: white;
}
#pr{
  padding-right:20px;

}
a {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
}

.navbar-light .navbar-nav .nav-link {
  color: white!important;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.square {
  height: 10px;
  width: 10px;
  background-color: white;
  margin-right: 4px;
}

.circle {
  height: 10px;
  width: 10px;
  background-color: white;
  border-radius: 50%;
  margin-right: 4px;
}

.triangle-down {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid white;
  margin-right: 4px;
}

.functions-wrapper {
  margin-top: 5%;
  text-align: right;
  text-align: -webkit-right;
}

.function {
  width: 80%;
  padding: 4px 30px;
  margin: 15px 0 30px;
  color: white;
  background-color: #00370A;
  display: flex;
  justify-content: space-between;
}

.home-logo {
  width: 100%;
}

.nav-icons-wrapper {
  background-color: #427F5D;
  min-height: 15px;
  padding: 4px 0 4px 90%;
  display: flex;
}

.icon {
  align-items: flex-end;
}

.navbar-brand {
  color: white;
}

.navbar {
  overflow-y: hidden;
  position: relative;
  scrollbar-width: none;
  white-space: nowrap;
  background-color: #00370A!important;
  min-height: 50px;
  align-content: center;
  padding: 5px;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #014e0f;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
