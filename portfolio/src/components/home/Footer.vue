<template>
    <div class="footer-container d-flex align-center justify-center">
        Par Mickaël Lalanne © <b>Wayne Enterprises</b>
        <a
            href="https://github.com/mickael-lalanne"
            target="_blank"
            rel="noopener"
        >
            <v-icon
                size="34"
                class="pl-1 github-icon"
            >
                mdi-github
            </v-icon>
        </a>
    </div>
</template>

<script>

export default {
    name: "Footer",
    components: {
    },
    data: () => ({
    }),
};
</script>

<style lang="scss" scoped>
.footer-container {
    font-family: 'Roboto';
    font-display: swap;
    font-size: 16px;
    text-align: center;
    padding: 15px;
    background-color: var(--v-light-base);
}
b {
    font-weight: 500;
    padding-left: 5px;
}
.github-icon {
    color: var(--v-dark-base);
    &:hover {
        color: var(--v-primary-base);
    }
}
a {
    text-decoration: none;
    &:hover {
        .github-icon {
            color: var(--v-primary-base);
        }
    }
}
</style>
