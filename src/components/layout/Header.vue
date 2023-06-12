<template>
    <div class="header-container" :class="{ 'header-fixed': checkIsFixed }">

        <router-link class="header-logo" to="/">
            <img src="@/assets/images/header-logo.png" alt="logo" />
        </router-link>

        <div class="header-menus">

        </div>

        <div class="header-avatar">
            <img src="@/assets/images/header-avatar.png" alt="icon">
        </div>

    </div>
</template>
<script>
export default {
    name: 'header-layout',

    computed: {
        checkIsFixed() {
            return this.$route.name === 'home';
        }
    }
}
</script>