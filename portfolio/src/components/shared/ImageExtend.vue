<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        content-class="img-extend-container"
    >
        <!-- Work arround to close the dialog on click -->
        <div @click="$emit('close')"></div>
        <v-progress-circular
            v-if="showLoading"
            class="loading-indicator"
            :size="100"
            width="7"
            color="primary"
            indeterminate
            @click="$emit('close')"
        ></v-progress-circular>
        <img
            :src="imgur ? 'https://i.imgur.com/' + imgId : imgId"
            @click="$emit('close')"
            @load="showLoading = false" />
    </v-dialog>
</template>

<script>
export default {
    name: "ImageExtend",
    components: {},
    props: {
        imgId: { type: String },
        imgur: { type: Boolean, default: () => true }
    },
    data: () => ({
        dialog: true,
        showLoading: true
    }),
};
</script>

<style lang="scss">
.img-extend-container {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow: hidden;
    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
        z-index: 1;
    }
    div {
        position: absolute;
        width: 100vw;
        height: 100vh;
    }
}
</style>
