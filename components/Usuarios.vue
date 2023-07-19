<template>
  <div class="full-height fond">
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
    <br>
    <div class="container">
      <div class="users-container">
        <a-card :title="'Usuario 1'" class="user-card">
          <a-row>
            <a-col :span="12">
              <p class="user-info">Nombre: {{ user1.nombre }}</p>
              <p class="user-info">Apellido: {{ user1.apellido }}</p>
              <p class="user-info">Correo: {{ user1.correo }}</p>
            </a-col>
          </a-row>
        </a-card>

        <a-card :title="'Usuario 2'" class="user-card">
          <a-row>
            <a-col :span="12">
              <p class="user-info">Nombre: {{ user2.nombre }}</p>
              <p class="user-info">Apellido: {{ user2.apellido }}</p>
              <p class="user-info">Correo: {{ user2.correo }}</p>
            </a-col>
          </a-row>
        </a-card>
      </div>

      <div class="button-container">
        <a-button type="primary" @click="reg">Regresar</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Card, Row, Col, Button } from "ant-design-vue";
import { Menu,Layout } from 'ant-design-vue';

export default defineComponent({
  components: {
    ACard: Card,
    ARow: Row,
    ACol: Col,
    AButton: Button,
    'a-header': Layout.Header,
    'a-menu': Menu,
    'a-menu-item': Menu.Item,
  },
  data() {
    return {
      user1: {
        nombre: "John",
        apellido: "Doe",
        correo: "john.doe@example.com",
      },
      user2: {
        nombre: "Jane",
        apellido: "Smith",
        correo: "jane.smith@example.com",
      },
    };
  },
  methods: {
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
});
</script>

<style scoped>
.full-height {
  height: 100vh;
}

.fond {
  background-color: #0e848d;
}

.container {
  display: flex;
  
  align-items: center;
  height: 100%;
  flex-direction: column;
}

.users-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Agregamos un espacio de 20px entre las tarjetas */
}

.user-card {
  width: 300px;
  border: 3px solid #000000;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-card .ant-card-head {
  background-color: #41b883;
  color: #fff;
  text-align: center;
  border-radius: 8px 8px 0 0;
}

.user-card .ant-card-body {
  padding: 12px;
}

.user-info {
  margin-bottom: 8px;
  font-size: 16px;
}

.button-container {
  margin-top: 20px;
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