<template>
  <div>
    <hr>
    <h2>Login de Usuários</h2>
    <hr>
    <div>
      <div>
        <div v-if="error != undefined">
          <div>
            <p>{{ error }}</p>
          </div>
        </div>
        <p>Email</p>
        <input type="email" class="input" placeholder="email@email" v-model="email">
        <p>Senha</p>
        <input type="password" class="input" placeholder="********" v-model="password">
        <hr>
        <button class="button is-success" @click="login">Logar</button><br>
        <small>Ainda não tem uma conta? Faça seu Registro <router-link :to="{name: 'Register'}">Aqui</router-link></small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email: "",
      password: "",
      error: undefined
    }
  },
  methods: {
     login(){
      axios.post('http://localhost:9393/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('token', res.data.token);
        this.$router.push({name: 'home'})
        console.log(res);
      }).catch(err => {
        var msgerr = err.response.data.err;
        this.error = msgerr
      })
     }
  }
}
</script>

<style></style>