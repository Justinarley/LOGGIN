<template>
  <div class="fon">
    <div class="login-container">
      <h1>Login</h1>
      <a-form @submit.prevent="login" class="login-form">
        <a-form-item label="Username">
          <a-input v-model="username" required />
        </a-form-item>
        <a-form-item label="Password">
          <a-input type="password" v-model="password" required />
        </a-form-item>
        <a-button type="primary" html-type="submit" class="login-button">Login</a-button>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  
  methods: {
    login() {
      // Validación básica con datos quemados
      if (this.username === 'admin' && this.password === '123') {
        // Las credenciales son correctas, realizar la acción deseada (redirección, mostrar contenido, etc.)

        // En lugar de redirigir directamente aquí, llamaremos a la acción del store para establecer el usuario autenticado
        this.$store.dispatch('login', this.username);

        // Redirigir a una página protegida después del inicio de sesión exitoso
        this.$router.push('/Principal');
      } else {
        // Las credenciales son incorrectas, mostrar un mensaje de error
        alert('Credenciales incorrectas');
      }
    }
  }
};
</script>

<style scoped>
.fon {
  background-image: url(/images/fondo.jpeg);
  background-size: cover;
  background-position: center center;
  height: 100vh; /* Ajustamos la altura para que ocupe toda la pantalla */
  display: flex;
  justify-content: center;
  align-items: center; /* Centramos el contenido verticalmente */
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 70px;
}

.login-form {
  max-width: 400px;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #41b89c;
}

.form-group {
  margin-bottom: 20px;
}

a-input {
  width: 100%;
}

.login-button {
  margin-top: 10px;
  font-size: 20px;
}

h1 {
  text-align: center;
  color: #f5f5f5;
  font-size: 50px;
}
</style>