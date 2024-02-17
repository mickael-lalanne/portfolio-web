<template>
    <div class="container" :style="`--content-var: '${text.toUpperCase()}';`">
        <div class="content">
            {{ text.toUpperCase() }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'GlitchText',
    components: {},
    props: {
        text: { type: String },
    },
    data: () => ({}),
};
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
}

.content,
.content::after {
    padding: 10px 50px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    color: rgb(var(--v-theme-primary));
    background-color: transparent;
    position: relative;
    font-family: 'Black Ops One', system-ui;
    font-size: 42px;
}

.content::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    clip-path: var(--move1);
    content: var(--content-var);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
}

.content::after {
    animation: glitch_4011 5s infinite;
    text-shadow: 10 10px 10px black;
    animation-timing-function: steps(2, end);
    text-shadow: -3px -3px 0px #1df2f0, 3px 3px 0px #e94be8;
    background-color: transparent;
}

@keyframes glitch_4011 {
    0% {
        clip-path: var(--move1);
        transform: translate(0px, -10px);
    }

    2% {
        clip-path: var(--move2);
        transform: translate(-10px, 10px);
    }

    4% {
        clip-path: var(--move3);
        transform: translate(10px, 0px);
    }

    6% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
    }

    8% {
        clip-path: var(--move5);
        transform: translate(10px, -10px);
    }

    10% {
        clip-path: var(--move6);
        transform: translate(-10px, 10px);
    }

    12% {
        clip-path: var(--move1);
        transform: translate(10px, -10px);
    }

    14% {
        clip-path: var(--move3);
        transform: translate(-10px, 10px);
    }

    16% {
        clip-path: var(--move2);
        transform: translate(10px, -10px);
    }

    18% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
    }

    20% {
        clip-path: var(--move1);
        transform: translate(0);
    }
    100% {
        clip-path: var(--move1);
        transform: translate(0);
    }
}
</style>
