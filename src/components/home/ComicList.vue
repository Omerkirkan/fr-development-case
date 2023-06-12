<template>
  <div class="comics-wrapper">
    <h1 class="comic-list-title"> NETFLIX ORIGINALS </h1>
    <div class="comics-container">
      <comic-card
        v-for="(comic, i) in comics"
        :comic="comic"
        :key="'comic-' + i"
      ></comic-card>
    </div>
  </div>
</template>

<script>
import ComicCard from "@/components/home/ComicCard.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ComicsPage",

  components: {
    ComicCard,
  },

  async mounted() {
    this.getComics(); // TODO: call this method from the router
  },

  computed: {
    ...mapGetters({
      comics: "comics/comics",
    }),
  },

  methods: {
    ...mapActions({
      getComics: "comics/fetchComics",
    }),
  },
};
</script>
