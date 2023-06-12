<template>
    <div>
        <Banner></Banner>

        <comic-list></comic-list>
    </div>
</template>
<script>
import Banner from '@/components/home/Banner.vue'
import ComicList from '@/components/home/ComicList.vue'
export default {
    name: 'HomePage',
    components: {
        Banner,
        ComicList
    }
}
</script>