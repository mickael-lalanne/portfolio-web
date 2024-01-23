<template>
    <div class="flags-container d-flex align-center">
        <div
            class="flag fr"
            :class="{ 'active': isActive('fr') }"
            @click="onLanguageFlagClick('fr')"
        >
            <span>FR</span>
            <img
                v-show="isActive('fr')"
                alt="France flag"
                :src="require('@/assets/images/fr.svg')"
            />
        </div>

        <div
            class="flag ca"
            :class="{ 'active': isActive('en') }"
            @click="onLanguageFlagClick('en')"
        >
            <span>EN</span>
            <img
                v-show="isActive('en')"
                alt="Canada flag"
                :src="require('@/assets/images/ca.svg')"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';

export default {
    name: 'LanguageSelector',
    components: {},
    data: () => ({}),
    setup() {
        const router = useRouter();

        return { router };
    },
    methods: {
        /**
         * Called when the french or canadian flag has been clicked
         * Update route to set the "lang" query parameter
         * @param {string} lang 'fr' or 'en'
         */
        onLanguageFlagClick: function (lang: 'fr' | 'en'): void {
            this.router.push({ path: '/', query: { lang } });
        },
        isActive: function (lang: 'fr' | 'en'): boolean {
            // If no query parameter exists, fr is the default language
            if (!this.router?.currentRoute?.value?.query?.lang) {
                return lang === 'fr';
            }

            return this.router.currentRoute.value.query.lang === lang;
        }
    },
};
</script>

<style lang="scss" scoped>
.flags-container {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 15px;
}

.flag {
    position: relative;
    color: white;
    cursor: pointer;
    margin: 0 10px;
    &.active {
        text-shadow: 0 0 3px white;
    }
    img {
        position: absolute;
        width: 100%;
        height: 1px;
        object-fit: cover;
        bottom: 0;
        left: 0;
    }
}

</style>
