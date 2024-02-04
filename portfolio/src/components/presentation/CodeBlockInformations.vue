<template>
    <div class="code-editor vs-code-design">
        <div class="header">
            <span class="title">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.about') }}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="icon"
            >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="#4C4F5A"
                        d="M6 6L18 18"
                    ></path>
                    <path
                        stroke-linecap="round"
                        stroke-width="2"
                        stroke="#4C4F5A"
                        d="M18 6L6 18"
                    ></path>
                </g>
            </svg>
        </div>
        <!-- PERSONAL INFORMATIONS -->
        <div class="editor-content">
            <code class="code">
                <p><span class="color-0">.{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.informations') }} </span> <span>{</span></p>

                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.name') }}</span><span>:</span>
                    <span class="color-1"> Mickaël Lalanne</span>;
                </p>
                <p class="property">
                    <span class="color-2">age</span><span>: </span>
                    <span class="color-preview-1"></span
                    ><span class="">#{{getAge()}}</span>;
                </p>
                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.location') }}</span><span>: </span>
                    <span class="color-3">Québec</span>, <span class="color-3">Canada</span>;
                </p>
                <p class="property">
                    <span class="color-2">mail</span><span>: </span>
                    
                    <a href="mailto:mickael.lalanne03@gmail.com">
                        <span class="color-3"> {{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.mail') }}</span>;
                    </a>
                </p>
                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.work') }}</span><span>: </span>
                    <span class="color-1">fullstack(<span class="color-3">Stratéjia</span>)</span>;
                </p>
                <span>}</span>
            </code>
        </div>
        <!-- HOBBIES -->
        <div class="editor-content">
            <code class="code">
                <p><span class="color-0">.{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.hobbies') }} </span> <span>{</span></p>

                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.jv') }}</span><span>: </span>
                    <span class="color-3">pc switch</span>;
                </p>
                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.writing') }}</span><span>: </span>
                    <a href="https://journalducapitaine.fr/" target="_blank">
                        <span class="color-2">$journal-du-capitaine</span>;
                    </a>
                </p>
                <p class="property">
                    <span class="color-2">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.wellBeing') }}</span><span>: </span>
                    <span>
                        <span class="color-4">calc(</span>
                        <span class="color-1">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.walk') }}</span>
                        +
                        <span class="color-1">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.gym') }}</span>
                        +
                        <span class="color-1">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.dietetic') }}</span>
                        +
                        <span class="color-1">{{ $vuetify.locale.t('$vuetify.homepage.cobeBlock.sleep') }}</span>
                        <span class="color-4">)</span>
                    </span>;
                </p>
                <span>}</span>
            </code>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CodeBlockInformations',
    components: {},
    data: () => ({}),
    methods: {
        getAge() {
            return Math.floor((new Date() - new Date('1996-09-03').getTime()) / 3.15576e+10);
        },
    }
};
</script>

<style lang="scss" scoped>
.code-editor {
    min-width: 380px;
    max-width: 380px;
    padding: 2px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
}

.title {
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 14px;
    letter-spacing: 1.57px;
    color: rgb(212 212 212);
}

.icon {
    width: 20px;
    transition: 0.2s ease;
}

.icon:hover {
    cursor: pointer;
    border-radius: 50px;
    background-color: #6e7281;
}

.editor-content {
    margin: 0 10px 10px;
    color: white;
}

.property {
    margin-left: 30px;
}

.property:hover {
    cursor: text;
}

.editor-content .color-0 {
    color: rgb(86 156 214);
}

.editor-content .color-1 {
    color: rgb(182 206 168);
}

.editor-content .color-2 {
    color: rgb(156 220 254);
}

.editor-content .color-3 {
    color: rgb(207 146 120);
}
.editor-content .color-4 {
    color: #DCDCAA;
}

.color-preview-1,
.color-preview-2 {
    height: 8px;
    width: 8px;
    border: 1px solid #fff;
    display: inline-block;
    margin-right: 3px;
}

.color-preview-1 {
    background-color: #1d1e22;
}

.color-preview-1 {
    background-color: rgb(var(--v-theme-secondary));
}

a {
    text-decoration: none;
    color: white;
}

@media (max-width: 850px) {
    .code-editor {
        margin-top: 20px;
    }
}
@media (max-width: 400px) {
    .code-editor {
        margin: 20px 20px 0 20px;
        min-width: unset;
    }
}
</style>
