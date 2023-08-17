<template>
  <div>
    <hr>
    <h2>Edição de Usuários</h2>
    <hr>
    <div class="columns is-mobile is-centered">
      <div class="column is-half">
        <div v-if="error != undefined">
          <div class="notification is-danger">
            <p>{{ error }}</p>
          </div>
        </div>
        <p>Nome</p>
        <input type="text" class="input" placeholder="nome do usuário" v-model="name">
        <p>Email</p>
        <input type="email" class="input" placeholder="email@email" v-model="email">
        <hr>
        <button class="button is-success" @click="update">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
    var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      }
    axios.get('http://localhost:9393/user/' + this.$route.params.id, req).then(res=>{
      console.log(res);

      this.name = res.data.name;
      this.email = res.data.email;
      this.id = res.data.id

    }).catch(err=>{
      console.log(err);
      this.$router.push({name: 'Users'})
    })
  },

  data() {
    return {
      name: "",
      email: "",
      id: -1,
      error: undefined
    }
  },
  methods: {
    update() {
      var req = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      }
      axios.put('http://localhost:9393/user', {
        name: this.name,
        email: this.email,
        id: this.id
      }, req).then(res => {
        this.$router.push({name: 'Users'})
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