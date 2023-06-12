<template>
    <button> {{ text }} </button>
</template>
<script>
export default {
    name: 'button-layout',
    props: {
        text: {
            type: String,
            default: 'Button'
        }
    }
}
</script>