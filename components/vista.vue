<template>
  <div>
    <a-layout>
      <a-header class="header">
        <h1 class="title">Panel de Administración</h1>
      </a-header>
      <a-menu mode="horizontal" theme="dark" style="font-size: 20px;">
          <a-menu-item @click="ini">Inicio</a-menu-item>
          <a-menu-item @click="user">Usuarios</a-menu-item>
          <a-menu-item @click="config">Configuración</a-menu-item>
          <a-menu-item @click="log">Cerrar sesión</a-menu-item>
        </a-menu>
      <a-content style="padding: 30px;">
        <h2>Bienvenido al Panel de Administración</h2>
        
        <img src="/images/fond.jpg" alt="">
      </a-content>

      <a-footer style="background-color: #41b883; color: #fff; padding: 10px; text-align: center;">
        <p>© 2023 Panel de Administración. Todos los derechos reservados.</p>
      </a-footer>
    </a-layout>
  </div>
</template>

<script>
import { Layout, Menu, } from 'ant-design-vue';

export default {
  components: {
    'a-layout': Layout,
    'a-header': Layout.Header,
    'a-content': Layout.Content,
    'a-footer': Layout.Footer,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
  },
  methods: {
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
/* Estilos generales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
img{
  width: 100%;  
  height: 100%;
}

/* Estilos específicos */
h2 {
  color: #333;
  margin-bottom: 20px;
}
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
</style>

