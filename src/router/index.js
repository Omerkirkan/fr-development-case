import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import comicService from '../services/comicService';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/comic-detail/:id',
    name: 'comicdetail',
    props: (route) => ({ comic: route.params.comic }),
    beforeEnter: async (to, from, next) => {
      const response = await comicService.getComicById(to.params.id);

      if (response.status === 200) {
          const comic = response.data.data.results[0];
          to.params.comic = comic;
          next();
      } else {
          next({ name: 'home' });
      }
    },
    component: () => import('../pages/ComicDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
