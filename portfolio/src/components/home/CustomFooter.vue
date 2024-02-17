<template>
    <div class="footer-container d-flex align-center justify-center">
        {{ $vuetify.locale.t('$vuetify.shared.by') }} Mickaël Lalanne © <b>Wayne Enterprises</b>
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
        <div class="cheep-cheep-container">
            <div class="cheep-cheep-content">
                <img
                    alt="Cheep cheep"
                    :src="require('@/assets/images/mario/cheepCheep.webp')"
                />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "CustomFooter",
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
    background-color: rgb(var(--v-theme-light));
}
b {
    font-weight: 500;
    padding-left: 5px;
}
.github-icon {
    color: rgb(var(--v-theme-dark));
    &:hover {
        color: rgb(var(--v-theme-primary));
    }
}
a {
    text-decoration: none;
    &:hover {
        .github-icon {
            color: rgb(var(--v-theme-primary));
        }
    }
}
.cheep-cheep-container {
    position: absolute;
    bottom: -40px;
    left: 0;
    width: 100%;
    user-select: none;
    pointer-events: none;
    img {
        position: absolute;
        bottom: 0;
        transform: scaleX(-1);
        animation: cheepCheepAnimation linear 10s infinite;
    }
}
$jumpHeight: -100px;
@keyframes cheepCheepAnimation {
    0% {
        transform: scaleX(-1) translateY($jumpHeight);
        left: 0;
    }
    3% { transform: scaleX(-1) translateY(calc(#{$jumpHeight} + 20px)); }
    10% { transform: scaleX(-1) translateY(0px); }
    40% { transform: scaleX(-1) translateY(0px); }
    47% { transform: scaleX(-1) translateY(calc(#{$jumpHeight} + 20px)); }
    50% { transform: scaleX(-1) translateY($jumpHeight); }
    53% { transform: scaleX(-1) translateY(calc(#{$jumpHeight} + 20px)); }
    60% { transform: scaleX(-1) translateY(0px); }
    90% { transform: scaleX(-1) translateY(0px); }
    97% { transform: scaleX(-1) translateY(calc(#{$jumpHeight} + 20px)); }
    100% {
        transform: scaleX(-1) translateY($jumpHeight);
        left: 100%;
    }
}
</style>
