<template>
    <div class="parallelogram" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <video v-if="isHover" autoplay loop muted id="video" :src="videoSrc" class="background-video"></video>
        <span class="menu-category" :class="{'menu-category-hover': isHover}">
            {{ itemName }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'MainMenuItem',
    props: {
        videoSrc: {type: String, required: true},
        itemName: {type: String, required: true},
    },
    data: () => ({
        isHover: false,
    }),
};
</script>

<style lang="scss" scoped>
.parallelogram {
    width: 80%;
    height: 50vh;
    transform: skew(-12deg);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    border: 2px solid var(--v-primary-base);
    cursor: pointer;
}
.menu-category {
    transform: rotate(-90deg);
    font-size: 5em;
    color: var(--v-darker-base);
    font-family: 'Nunito Sans', sans-serif;
}
.menu-category-hover {
    color: var(--v-tertiary-base);
}
.background-video {
    position: absolute;
    height: 100%;
}
</style>
