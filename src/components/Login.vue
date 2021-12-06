<template>
  
    <div id="ex" class="container h-screen w-screen mx-auto">
      <div class="rounded p-48 h-screen w-screen grid grid-cols-1 grid-rows-4 text-center">
        <div class="py-3  bg-blue-300">Login </div>
        <div class="py-3  bg-blue-400">E <input class=" bg-blue-200" v-model="user.email" type="email" required></div>
        <div class="py-3  bg-blue-500">P <input class=" bg-blue-200" v-model="user.password" type="password" required> </div>
        <div class="py-3  bg-blue-600"> <input type="submit" class=" bg-green-600" v-on:click="login(user)"> </div>
        
        
        <input @change="darkMode" type="checkbox" checked="checked" class="toggle toggle-primary">
        <div class="p-6 card bordered">
          <div class="form-control">
            <label class="cursor-pointer label">
              <span class="label-text">Dark Mode</span> 
              <input @change="darkMode" type="checkbox" checked="checked" class="toggle toggle-primary">
            </label>
          </div>
        </div>

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
      //document.getElementById("mode").classList.add('dark');
      //document.getElementById("mode").classList.remove('dark');
      var element = document.getElementById("mode");
      element.setAttribute("data-theme", "dark");

      
    }

  },

  created() {
  },

    

  mounted() {
    
  },



  

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
