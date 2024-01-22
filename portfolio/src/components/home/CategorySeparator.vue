<template>
    <div class="arrow-container">
        <div class="arrow bg-grid-effect"></div>
    </div>
</template>

<script>
export default {
    name: "CategorySeparator",
};
</script>

<style scoped>
.arrow-container {
    pointer-events: none;
    background-color: #fcf1f1;
    height: 100px;
}

.arrow {
    height: 100%;
    background-color: rgb(var(--v-theme-dark));
    clip-path: polygon(100% 0, 0 0, 50% 100%);
}
</style>
