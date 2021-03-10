<template>
    <div ref="mainMenuContainer" class="main-menu-container">
        <div
            class="menu-item text-center"
            @click="$emit('itemClick', 'presentation')"
        >
            Présentation
            <div
                v-if="selectedCategory === 'presentation'"
                class="menu-item-highlight"
            ></div>
        </div>
        <div
            class="menu-item text-center"
            @click="$emit('itemClick', 'projects')"
        >
            Projets
            <div
                v-if="selectedCategory === 'projects'"
                class="menu-item-highlight"
            ></div>
        </div>
        <div
            class="menu-item text-center"
            @click="$emit('itemClick', 'contact')"
        >
            Contact
            <div
                v-if="selectedCategory === 'contact'"
                class="menu-item-highlight"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainMenu",
    components: {},
    props: {
        selectedCategory: { type: String, default: () => "presentation" },
    },
    data: () => ({}),
    created: function() {
        window.onscroll = this.onScroll;
    },
    methods: {
        onScroll: function() {
            // Get the header
            const header = this.$refs.mainMenuContainer;

            // Get the offset position of the navbar
            const sticky = header.offsetTop;

            if (
                window.pageYOffset > sticky &&
                window.innerHeight < window.pageYOffset
            ) {
                header.classList.add("main-menu-container-sticky");
            } else {
                header.classList.remove("main-menu-container-sticky");
            }
        },
    },
};
</script>

<style scoped>
.main-menu-container {
    /* position: fixed; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 30px;
    background-color: #1a1c20;
    z-index: 1;
}
.main-menu-container-sticky {
    position: fixed;
    top: 0;
}
.menu-item {
    position: relative;
    font-size: 14px;
    cursor: pointer;
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fcf1f1;
}
.menu-item:hover {
    background-color: #404347;
}
.menu-item-highlight {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 4px;
    background-color: #f9813a;
}
</style>
