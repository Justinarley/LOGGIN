import { Middleware } from '@nuxt/types';

const authMiddleware: Middleware = ({ redirect, store }) => {
  // Obtener el estado de autenticación desde el store
  const usuarioAutenticado = store.state.usuarioAutenticado;

  // Si el usuario no está autenticado, redirigir a una página de inicio de sesión
  if (!usuarioAutenticado) {
    return redirect('/login');
  }
};

export default authMiddleware;