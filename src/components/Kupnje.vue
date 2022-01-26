
<template>
 <div class="prozor">

      <div class="row">
        <div class="column">
            <span id="info">Karta linija {{Kupnje.id}}, kol. {{Kupnje.Kolicina}} = {{Kupnje.Cijena}}kn </span>
       
       

      
        </div>


    </div>
    </div>
</template>

<script>
import store from "../store";
export default {
    data() {
        return store;
    },
    props: ["Kupnje"],
    
}
</script>

<style>
#info{
    color:black;
    padding-right: 40%;
}
.prozor {
width: 500px;
height: 30px;
background-color: white;
}
</style>
