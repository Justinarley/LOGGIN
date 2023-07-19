<template>

  <div class="fondi">
    <div>
      <a-header class="header">
        <h1 class="title">Panel de Administración</h1>
      </a-header>
      <a-menu mode="horizontal" theme="dark" style="font-size: 20px;">
          <a-menu-item @click="ini">Inicio</a-menu-item>
          <a-menu-item @click="user">Usuarios</a-menu-item>
          <a-menu-item @click="config">Configuración</a-menu-item>
          <a-menu-item @click="log">Cerrar sesión</a-menu-item>
        </a-menu>
    </div>
    <div class="welcome-container">
        <h1>Bienvenido!</h1>
          <p>
            "Como administrador, tu dedicación y liderazgo son la clave para el éxito de la organización.
            ¡Sigue adelante y haz que cada día cuente!"
          </p>
        <ul>
          <li>User: {{ username }}</li>
          <li>Contraseña: {{ password }}</li>
        </ul>
        <a-button type="primary" @click="logout" class="button-container">Cerrar sesión</a-button>
        <a-button @click="vista" class="button-container">Vista</a-button>
    </div>
    <img src="/images/reunion.png" alt="">
</div>

</template>

<script>
import { Button } from 'ant-design-vue';
import { Menu,Layout } from 'ant-design-vue';

export default {
  components: {
    'a-button': Button,
    'a-header': Layout.Header,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
  },
  data() {
    return {
      username: 'admin',
      password: '123',
    };
  },
  methods: {
    logout() {
      // redireccionar al formulario de inicio de sesión
      this.$router.push('/login');
    },
    vista() {
      this.$router.push('/Vista');
    },
    reg() {
      this.$router.push('/vista');
    },
    ini() {
      this.$router.push('/Principal');
    },
    user() {
      this.$router.push('/Usuario');
    },
    config() {
      this.$router.push('/');
    },
    log() {
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.header {
  background-color: #41b883;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 40px;
  color: beige;
}
.fondi {
  background-color: #41b89c;
}
.welcome-container {
  text-align: center;
  margin-top: 50px;
  
  color: azure;
  font-size: 20px;
  padding: 20px;
}

img{
  width: 80%;
  height: 20%;
  margin-left: 175px;
}
p {
  font-size: 16px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
}

.button-container {
  margin-top: 20px;
}
</style>