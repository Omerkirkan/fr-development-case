<template>
  <div class="header-container" :class="{ 'header-fixed': checkIsFixed }">
    <router-link class="header-logo" to="/">
      <img src="@/assets/images/header-logo.png" alt="logo" />
    </router-link>

    <div class="right-icon-area">
      <div class="header-fav">
        <span> {{ getFavoritesCount }} </span>
        <heart-icon :size="26" class="icon" />
      </div>
      <div class="header-avatar">
        <img src="@/assets/images/header-avatar.png" alt="icon" />
      </div>
    </div>
  </div>
</template>
<script>
import HeartIcon from "vue-material-design-icons/Heart.vue";
import { mapGetters } from "vuex";

export default {
  name: "header-layout",

  components: { HeartIcon },

  computed: {
    ...mapGetters({
      getFavorites: "favorites/favorites",
    }),

    checkIsFixed() {
      return this.$route.name === "home";
    },

    getFavoritesCount() {
      return this.getFavorites.length;
    },
  },
};
</script>
