<template>
    <div class="full-height fond">
      <div>
        <a-header class="header">
          <h1 class="title">Configuración</h1>
        </a-header>
        <a-menu mode="horizontal" theme="dark" style="font-size: 20px;">
          <a-menu-item @click="ini">Inicio</a-menu-item>
          <a-menu-item @click="user">Usuarios</a-menu-item>
          <a-menu-item @click="config" :selected="true">Configuración</a-menu-item>
          <a-menu-item @click="log">Cerrar sesión</a-menu-item>
        </a-menu>
      </div>
      <br>
      <div class="container">
        <a-form :form="form" class="config-form">
          <h2>Configuración General</h2>
          <a-form-item label="Idioma:" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-select v-model="language" style="width: 100%;">
              <a-select-option value="en">Inglés</a-select-option>
              <a-select-option value="es">Español</a-select-option>
              <a-select-option value="fr">Francés</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Zona Horaria:" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-select v-model="timezone" style="width: 100%;">
              <a-select-option value="utc">UTC</a-select-option>
              <a-select-option value="gmt">GMT</a-select-option>
              <a-select-option value="pst">PST</a-select-option>
              <!-- Agrega más opciones según las zonas horarias necesarias -->
            </a-select>
          </a-form-item>
          <a-form-item label="Tema:" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-select v-model="theme" style="width: 100%;">
              <a-select-option value="light">Claro</a-select-option>
              <a-select-option value="dark">Oscuro</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="Notificaciones:" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }">
            <a-switch v-model="notifications" />
          </a-form-item>
          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" @click="saveConfig">Guardar Configuración</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { Layout, Menu, Select, Form, Button, Switch } from "ant-design-vue";
  
  export default defineComponent({
    components: {
      'a-header': Layout.Header,
      'a-menu': Menu,
      'a-menu-item': Menu.Item,
      'a-select': Select,
      'a-select-option': Select.Option,
      'a-form': Form,
      'a-form-item': Form.Item,
      'a-button': Button,
      'a-switch': Switch,
    },
    data() {
      return {
        form: null,
        language: "en",
        timezone: "utc",
        theme: "light",
        notifications: false,
      };
    },
    methods: {
      ini() {
        this.$router.push('/Principal');
      },
      user() {
        this.$router.push('/Usuario');
      },
      config() {
        // Si hacemos clic en "Configuración" nuevamente, permaneceremos en la página de configuración.
      },
      log() {
        this.$router.push('/login');
      },
      saveConfig() {
        // Agrega aquí la lógica para guardar la configuración en la base de datos o localmente.
      },
    },
  });
  </script>
  
  <style scoped>
  /* Estilos para la página de configuraciones */
  .full-height {
    height: 100vh;
  }
  
  .fond {
    background-color: #e4e4e4;
  }
  
  .header {
    background-color: #fdfffe;
    color: #41b883;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .title {
    margin: 0;
    font-size: 40px;
    color: #41b883;
  }
  
  .container {
    display: flex;
    align-items: center;
    height: 100%;
    flex-direction: column; 
    
  }
  
  .config-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 100px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  
  .config-form h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .config-form .ant-form-item {
    margin-bottom: 20px;
  }
  
  .config-form .ant-form-item-label {
    width: 100px;
    text-align: left;
    padding-right: 8px;
    font-weight: bold;
  }
  
  .config-form .ant-form-item-control {
    flex: 1;
  }
  
  .config-form .ant-select {
    width: 100%;
    font-size: 16px;
  }
  
  .config-form .ant-switch {
    margin-left: 4px;
  }
  
  .config-form .ant-btn-primary {
    text-align: center;
    font-size: 20px;
    margin-right: 30px;
  }
  </style>