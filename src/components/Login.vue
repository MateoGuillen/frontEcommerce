<template>
  
    <div id="ex" class="container mx-auto">
      <div class="grid grid-cols-1 grid-rows-4 text-center h-72 w-screen">
        <div class="bg-blue-300">Login </div>
        <div class="bg-blue-400">Email: <input v-model="user.email" type="email" required></div>
        <div class="bg-blue-500">Password: <input v-model="user.password" type="password" required> </div>
        <div > <button class="bg-blue-600" v-on:click="login(user)">Inciar Sesión </button> </div>
      </div>
      

    </div>
    
    
  
</template>


<script>
import LoginService from '../services/LoginService' 

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
