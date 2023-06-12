import comicService from '../../services/comicService'

export default {
    namespaced: true,
    state: {
        comics: []
    },
    getters: {
        comics: state => state.comics
    },
    mutations: {
        SET_COMICS(state, comics) {
            state.comics = comics
        }
    },
    actions: {
        async fetchComics({ commit }) {

            const response = await comicService.getAllComic();

            if (response.status === 200) {
                const comics = response.data.data.results;
                commit('SET_COMICS', comics);
            }
        },

    }
}