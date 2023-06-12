<template>
  <div class="home-banner">
    <div class="banner-text">
      <h1>Money Heist</h1>

      <div class="banner-text-buttons">
        <form-button text="Play"></form-button>
        <form-button text="My List"></form-button>
      </div>

      <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe voluptates vero iusto ut necessitatibus animi aperiam eligendi, tenetur nihil deserunt dolore odio blanditiis aut velit! Quos obcaecati, ipsam quam nemo temporibus porro rem enim? Reprehenderit. </p>
    </div>
  </div>
</template>
<script>
import FormButton from "@/components/form/Button.vue";
export default {
  name: "home-banner",
  components: {
    FormButton
  }
};
</script>
