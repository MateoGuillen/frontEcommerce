<template>
  
    <div id="ex" class="container h-screen w-screen mx-auto">
      <div class="rounded p-48 h-screen w-screen grid grid-cols-1 grid-rows-4 text-center">
        <div class="py-3  bg-blue-300">Login </div>
        <div class="py-3  bg-blue-400">E <input class=" bg-blue-200" v-model="user.email" type="email" required></div>
        <div class="py-3  bg-blue-500">P <input class=" bg-blue-200" v-model="user.password" type="password" required> </div>
        <div class="py-3  bg-blue-600"> <input type="submit" class=" bg-green-600" v-on:click="login(user)"> </div>
        
        
        <input id="toggleMode" v-on:change="darkMode()" type="checkbox" class="toggle toggle-primary">
        <button @click="showAlert" class="btn btn-primary">Show SweetAlert</button>
        
      </div>
      
      

    </div>
    
    
  
</template>


<script>
import LoginService from '../services/LoginService' 
import {alert2,alert3} from '../alerts/confsweetalert'

export default {
  name: 'Login',
  props: {
    msg: String,
  },

  data() {
    return {

      data:null,
      currentMode:"light",

      user:{
        email:'mateo@test.com',
        password: 'adminlaravel'
      }

    }
  },

  methods: {

    login(user){
      if(user.email != '' && user.nombre != '')
        LoginService.authLogin(user)
      else
        window.location.reload()
    },

    showAlert() {
      // Use sweetalert2
      this.$swal.fire(alert3)
    },
    showAlert2() {
      alert2();
    },

    darkMode(){

      var element = document.getElementById("mode");
      var toggle = document.getElementById("toggleMode");
      
      if(toggle.checked){
        this.currentMode = "dark";
        localStorage.setItem("mode","dark")
        element.setAttribute("data-theme","dark");
      }else{
        this.currentMode = "light";
        localStorage.setItem("mode","light")
        element.setAttribute("data-theme","light");
      }
      
      
    },

    getCurrentMode(){

      var element = document.getElementById("mode");
      var toggle = document.getElementById("toggleMode");

      
      this.currentMode = localStorage.getItem("mode") == null 
                        ? localStorage.setItem("mode","light"): localStorage.getItem("mode") ;
      
      if(this.currentMode == "light"){
        element.setAttribute("data-theme","light");
        
      }else if(this.currentMode == "dark"){
        toggle.checked = true
        element.setAttribute("data-theme","dark");
      }
      


    }

  },

  created() {
    //this.getCurrentMode();
  },

    

  mounted() {
    this.getCurrentMode();
    
  },



  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
