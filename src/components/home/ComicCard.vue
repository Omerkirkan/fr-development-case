<template>
    <div class="comic-card" @click="goDetail">
        <img :src="getThumbnail" alt="" />
        <span class="comic-title" v-text="getTitle"></span>
    </div>
</template>
<script>
export default {
    name: 'ComicCard',
    props: {
        comic: {
            type: Object,
            default: () => {}
        }
    },

    computed: {
        getThumbnail() {
            return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
        },
        getTitle() {
            const title = this.comic.title.length > 20 ? `${this.comic.title.substring(0, 20)}...` : this.comic.title;
            return title;
        }
    },

    methods: {
        goDetail() {
            this.$router.push({ name: 'comicdetail', params: { id: this.comic.id } });
        }
    }
}
</script>