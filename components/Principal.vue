<template>

  <div class="fondi">
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

export default {
  components: {
    'a-button': Button,
  },
  data() {
    return {
      username: 'admin',
      password: '123', // Puedes obtener la contraseña desde el inicio de sesión si lo necesitas
    };
  },
  methods: {
    logout() {
      // Aquí puedes realizar la lógica para cerrar la sesión, por ejemplo, redireccionar al formulario de inicio de sesión
      this.$router.push('/login');
    },
    vista() {
      this.$router.push('/Vista');
    },
  },
};
</script>

<style scoped>
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

h1 {
  font-size: 30px;
  margin-bottom: 10px;
  color: beige;
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