<template>
    <div>
        <svg
            id="bigTriangleColor"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100"
            viewBox="0 0 100 102"
            preserveAspectRatio="none"
        >
            <path d="M0 0 L50 100 L100 0 Z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: "CategorySeparator",
};
</script>

<style scoped>
svg#bigTriangleColor {
    pointer-events: none;
    background-color: #fcf1f1;
    position: absolute;
}

#bigTriangleColor path {
    fill: var(--v-dark-base);
    stroke: var(--v-dark-base);
    stroke-width: 2;
}
</style>
