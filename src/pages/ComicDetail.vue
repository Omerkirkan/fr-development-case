<template>
 <comic-details :comic="comic"></comic-details>
</template>
<script>
import ComicDetails from "@/components/detail/ComicDetails.vue";

export default {
  name: "ComicDetail",
  props: {
    comic: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    ComicDetails,
  },
};
</script>
