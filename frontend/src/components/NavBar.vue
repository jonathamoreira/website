<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
       <router-link class="navbar-brand" :to="{name: 'home'}">Home</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'protocolo'}">Registrar Ocorrência</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Números Úteis
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Guarda Municipal</a></li>
                <li><a class="dropdown-item" href="#">Policia Militar</a></li>
                <li><a class="dropdown-item" href="#">Perícia Forense</a></li>
                <li><a class="dropdown-item" href="#">Bombeiros</a></li>
              </ul>
            </li>
          </ul>
          <ul>
            
          </ul>
          <form>
            <router-link class="btn btn-outline-success mx-2" hidden type="submit" :to="{name:'Register'}">Registre-se</router-link>
            <router-link class="btn btn-outline-success" type="submit" :to="{name: 'Login'}">Login</router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn{
  text-decoration: none;
  font-weight:200;
  color:#eee;
}

</style>
