<template>
  <div>
    <a-layout>
      <a-header style="background-color: #41b883; color: #fff; padding: 20px;">
        <h1 style="margin: 0; text-align: center;">Panel de Administración</h1>
        <a-menu mode="horizontal" theme="dark">
          <a-menu-item><a href="#">Inicio</a></a-menu-item>
          <a-menu-item><a href="#">Usuarios</a></a-menu-item>
          <a-menu-item><a href="#">Configuración</a></a-menu-item>
          <a-menu-item><a href="#">Cerrar sesión</a></a-menu-item>
        </a-menu>
      </a-header>
      <br>
      <br><br>

      <a-content style="padding: 20px;">
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
import { Layout, Menu, Image } from 'ant-design-vue';

export default {
  components: {
    'a-layout': Layout,
    'a-header': Layout.Header,
    'a-content': Layout.Content,
    'a-footer': Layout.Footer,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
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
</style>

