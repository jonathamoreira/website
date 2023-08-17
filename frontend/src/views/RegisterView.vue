<template>
  <div>
    <hr>
    <h2>Registro de Usuários</h2>
    <hr>
    <div>
      <div>
        <div v-if="error != undefined">
          <div>
            <p>{{ error }}</p>
          </div>
        </div>
        <p>Nome</p>
        <input type="text" class="input" placeholder="nome do usuário" v-model="name">
        <p>Email</p>
        <input type="email" class="input" placeholder="email@email" v-model="email">
        <p>Senha</p>
        <input type="password" class="input" placeholder="********" v-model="password">
        <hr>
        <button @click="register">Cadastrar</button><br>
        <small>Já tem uma conta? Faça seu Login <router-link :to="{name: 'Login'}">Aqui</router-link></small>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: undefined
    }
  },
  methods: {
    register() {
      axios.post('http://localhost:9393/user', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(res => {
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