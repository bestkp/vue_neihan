export default {
  state: {
    isLoading: false
  },
  actions: {

  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
}
