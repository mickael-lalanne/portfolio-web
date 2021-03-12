<template>
    <div class="close-container" @click="$emit('click')">
        <div class="leftright"></div>
        <div class="rightleft"></div>
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
// COLORS
$softorange: white;
$tomatored: var(--v-primary-base);
$mediumblu: #1e272d;

.close-container {
    position: relative;
    margin: auto;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: var(--v-dark-base);
    border-radius: 50%;
    border-top-left-radius: 50% !important;
    border-top-right-radius: 50% !important;
    position: fixed;
    top: 20px;
    right: 30px;
}

.leftright {
    height: 4px;
    width: 34px;
    margin-left: 8px;
    position: absolute;
    margin-top: 24px;
    background-color: $softorange;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all 0.3s ease-in;
}

.rightleft {
    height: 4px;
    width: 34px;
    margin-left: 8px;
    position: absolute;
    margin-top: 24px;
    background-color: $softorange;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all 0.3s ease-in;
}

label {
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease-in;
    opacity: 0;
}
.close-container:hover .leftright {
    transform: rotate(-45deg);
    background-color: $tomatored;
}
.close-container:hover .rightleft {
    transform: rotate(45deg);
    background-color: $tomatored;
}
.close-container:hover label {
    opacity: 1;
}
</style>
