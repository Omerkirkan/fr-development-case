<template>
    <div class="detail-container">
      <div class="image-area">
        <div class="image-box">
          <img :src="getThumbnail" />
        </div>
      </div>
  
      <div class="description-area">
  
        <h1 v-text="toUpper(comic.title)"> </h1>
  
        <div class="description-box">
          <p v-text="comic.description"></p>
        </div>
      </div>
    </div>
  </template>
  <script>
  // import { mapActions, mapGetters } from 'vuex';
  export default {
    name: "ComicDetailComponent",
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
  
    methods: {
      toUpper(str) {
        return str.toUpperCase();
      },
    },
  };
  </script>
  