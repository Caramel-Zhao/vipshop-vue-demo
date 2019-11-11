export default {
  state: {
    email: ''
  },
  mutations: {
    'INIT': (state, data) => {
      state.email = data
    }
  },
  actions: {
    'INIT_EMAIL': ({ commit }, args) => {
      let data = window.localStorage.getItem('email') || ''
      commit('INIT', data)
    }
  },
  getters: {
    'GET_EMAIL': ({ email }) => {
      return email
    }
  }
}