<template>
    <div class="container">
        <div class="glitch" :data-text="text">{{ text }}</div>
        <div class="glow">{{ text }}</div>
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
    position: relative;
    white-space: nowrap;
    font-family: "Oswald", sans-serif;
    font-family: 'Black Ops One', system-ui;
    font-style: italic;
    text-align: center;
    // transform: translate(-50%, -50%);
    // top: 40%;
    // left: 50%;
}

.glitch {
    color: rgb(223, 191, 191);
    color: rgb(var(--v-theme-primary));
    position: relative;
    font-size: 42px;
    // margin: 70px 200px;
    animation: glitch 5s 5s infinite;
}

.glitch::before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    // text-shadow: -5px 0 magenta;
    text-shadow: -5px 0 magenta;
    // background: black;
    overflow: hidden;
    top: 0;
    width: 100%;
    animation: noise-1 3s linear infinite alternate-reverse,
        glitch 5s 5.05s infinite;
}

.glitch::after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 lightgreen;
    // background: black;
    overflow: hidden;
    top: 0;
    width: 100%;
    animation: noise-2 3s linear infinite alternate-reverse,
        glitch 5s 5s infinite;
}

@keyframes glitch {
    // 1% {
    //     transform: rotateX(10deg) skewX(90deg);
    // }
    // 2% {
    //     transform: rotateX(0deg) skewX(0deg);
    // }
}

@keyframes noise-1 {
    $steps: 30;
    @for $i from 1 through $steps {
        #{percentage($i*(1/$steps))} {
            $top: random(100);
            $bottom: random(101 - $top);
            clip-path: inset(#{$top}px 0 #{$bottom}px 0);
        }
    }
}

@keyframes noise-2 {
    $steps: 30;
    @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
            $top: random(100);
            $bottom: random(101 - $top);
            clip-path: inset(#{$top}px 0 #{$bottom}px 0);
        }
    }
}

.glow {
    @extend .glitch;
    text-shadow: 0 0 1000px rgb(223, 191, 191);
    color: transparent;
    position: absolute;
    top: 0;
}
</style>
