// import { Middleware } from '@nuxt/types';

// const authMiddleware: Middleware = ({ redirect, store }) => {
//   // Obtener el estado de autenticación desde el store
//   const usuarioAutenticado = store.state.usuarioAutenticado;

//   // Si el usuario no está autenticado, redirigir a una página de inicio de sesión
//   if (!usuarioAutenticado) {
//     return redirect('/login');
//   }
// };

export default function (context: { app: { $cookies: { get: (arg0: string) => any; }; }; redirect: (arg0: string) => void; }) {
  // Verificar si el token de autenticación está presente en la cookie
  const authToken = context.app.$cookies.get('authToken');

  // Si el token no está presente o ha expirado, redirigir al usuario a una página de inicio de sesión
  if (!authToken) {
    context.redirect('/login');
  }
  // Si el token está presente, el usuario está autenticado y puede continuar navegando
}