<template>
  <div class="container">
    <hr>
    <h2>Login de Usuários</h2>
    <hr>
    <div class="card form-control">
      <form>
        <div v-if="error != undefined">
          <div>
            <p>{{ error }}</p>
          </div>
        </div>
        <label class="col-sm-2 col-form-label">Email</label>
        <input type="email" class="form-control" placeholder="email@email" v-model="email">
        <label>Senha</label>
        <input type="password" class="form-control" placeholder="********" v-model="password">
        <hr>
        <button class="btn btn-success mb-3" @click="login">Logar</button><br>
        <small>Ainda não tem uma conta? Faça seu Registro <router-link style="text-decoration: none;" :to="{name: 'Register'}">Aqui</router-link></small>
      </form>
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

<style scoped>
.container{
  align-items: center;
  
}
</style>