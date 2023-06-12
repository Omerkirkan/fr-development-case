<template>
  <div class="detail-container">


    <div class="image-area">

    </div>

    <div class="description-ara">

    </div>


    


  </div>
</template>
<script>
// import { mapActions, mapGetters } from 'vuex';
export default {
  name: "ComicDetail",
  props: {
    comic: {
      type: Object,
      default: () => {},
    },
  },

  mounted() {
    console.log(this.comic);
  },

  computed: {
    getThumbnail() {
      return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`;
    },
  },
};
</script>
