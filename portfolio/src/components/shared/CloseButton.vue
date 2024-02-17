<template>
    <div class="close-container" @click="$emit('click')">
        {{ $vuetify.locale.t('$vuetify.shared.close') }}
    </div>
</template>

<script>
export default {
    name: "CloseButton",
    components: {},
    props: {},
    data: () => ({}),
};
</script>

<style lang="scss" scoped>
.close-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
    background-color: rgb(var(--v-theme-dark));
    color: white;
    padding: 7.55px 35px;
    position: fixed;
    top: 25px;
    right: 25px;
    cursor: pointer;
    &:hover {
        background-color: rgb(var(--v-theme-primary));
    }
    &:active {
        background-color: rgb(var(--v-theme-secondary));
    }
}
</style>
