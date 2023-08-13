<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "main-container",
    }
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    padding: 0 25px;
    margin: auto;

    @media screen and (min-width: 480px) {
        width: 480px;
    }
    @media screen and (min-width: 768px) {
        width: 768px;
    }
    @media screen and (min-width: 1200px) {
        width: 1200px;
    }
}
</style>