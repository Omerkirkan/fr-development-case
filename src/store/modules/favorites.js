export default {
  namespaced: true,
  state: {
    favorites: [],
  },
  getters: {
    favorites: (state) => state.favorites,
  },
  mutations: {
    ADD_FAVORITE(state, id) {
      state.favorites.push(id);
    },
    REMOVE_FAVORITE(state, id) {
      state.favorites = state.favorites.filter((favorite) => favorite !== id);
    },
  },
  actions: {
    addFavorite({ commit }, id) {
      if (this.state.favorites.favorites.includes(id)) {
        commit("REMOVE_FAVORITE", id);
      } else {
        commit("ADD_FAVORITE", id);
      }
    },
  },
};
