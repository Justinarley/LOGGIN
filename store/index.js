export const state = () => ({
  usuarioAutenticado: false
});

export const mutations = {
  SET_USUARIO_AUTENTICADO(state, valor) {
    state.usuarioAutenticado = valor;
  }
};

export const actions = {
  async login({ commit }, usuario) {
    // Lógica de autenticación (simulación de autenticación exitosa)
    new Promise(resolve => setTimeout(resolve));

    // Establecer el usuario como autenticado
    commit('SET_USUARIO_AUTENTICADO', true);
  }
};
