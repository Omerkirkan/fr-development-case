<template>
    <div class="comic-card">
        <img :src="getThumbnail" @click="goDetail" />
        <span class="comic-title" v-text="getTitle" @click="goDetail"></span>
        <heart-icon :size="iconSize" class="icon comic-add-fav" :class="{ 'fav-active': isFav() }" @click="addFavorite"  />
    </div>
</template>
<script>
import HeartIcon from "vue-material-design-icons/Heart.vue";
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'ComicCard',
    props: {
        comic: {
            type: Object,
            default: () => {}
        }
    },

    components: { HeartIcon },

    data: () => ({
        iconSize: 26
    }),

    computed: {
        ...mapGetters({
            getFavorites: 'favorites/favorites'
        }),

        getThumbnail() {
            return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
        },
        getTitle() {
            const title = this.comic.title.length > 20 ? `${this.comic.title.substring(0, 20)}...` : this.comic.title;
            return title;
        }
    },

    methods: {
        ...mapActions({
            _addFavorite: 'favorites/addFavorite'
        }),

        goDetail() {
            this.$router.push({ name: 'comicdetail', params: { id: this.comic.id } });
        },

        addFavorite() {
            this._addFavorite(this.comic.id);
        },

        isFav() {
            return this.getFavorites.includes(this.comic.id) ? true : false;
        }
    }
}
</script>