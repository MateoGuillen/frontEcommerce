<template>
  <div >
    <h1>Login</h1>
    <div class="login">
      <label>Email:
        <input v-model="user.email" type="email" required>
      </label>
      <label>Password:
      <input v-model="user.password" type="password" required>
      </label>

      <input  v-on:click="login(user)" type="submit">

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
