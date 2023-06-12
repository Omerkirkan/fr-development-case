import { createStore } from 'vuex'
import comics from './modules/comics'

export default createStore({
  modules: {
    comics
  }
})
