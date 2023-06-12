import { createStore } from 'vuex'
import comics from './modules/comics'
import favorites from './modules/favorites'

export default createStore({
  modules: {
    comics,
    favorites
  }
})
