<template>
    <div class="timeline pb-12 pt-6">
        <!-- STRATEJIA -->
        <div
            class="timeline__event scroll-animation-1 animated fadeInUp delay-3s timeline__event--type2"
        >
            <div class="timeline__event__icon ">
                <img
                    alt="Stratejia Logo"
                    style="padding: 10px;"
                    :src="require('@/assets/images/timeline/stratejiaLogo.png')"
                />
                <div class="timeline__event__date">
                    {{ $vuetify.locale.t('$vuetify.homepage.career.stratejia.date') }}
                </div>
            </div>
            <div class="timeline__event__content ">
                <div class="timeline__event__title">
                    <a
                        href="https://www.stratejia.ca/"
                        target="_blank"
                        rel="noopener"
                        style="text-decoration:none; color: unset;"
                    >
                        {{ $vuetify.locale.t('$vuetify.homepage.career.stratejia.title') }}
                    </a>
                </div>
                <div class="timeline__event__description">
                    <p>{{ $vuetify.locale.t('$vuetify.homepage.career.stratejia.description') }}</p>
                </div>
            </div>
        </div>
        <!-- INTUIFACE -->
        <div
            class="timeline__event scroll-animation-2 animated fadeInUp delay-3s timeline__event--type1"
        >
            <div class="timeline__event__icon ">
                <img
                    alt="Intuiface Logo"
                    :src="require('@/assets/images/timeline/intuifaceLogo.png')"
                />
                <div class="timeline__event__date">
                    {{ $vuetify.locale.t('$vuetify.homepage.career.intuiface.date') }}
                </div>
            </div>
            <div class="timeline__event__content ">
                <div class="timeline__event__title">
                    <a
                        href="https://www.intuiface.com/"
                        target="_blank"
                        rel="noopener"
                        style="text-decoration:none; color: unset;"
                    >
                        {{ $vuetify.locale.t('$vuetify.homepage.career.intuiface.title') }}
                    </a>
                </div>
                <div class="timeline__event__description">
                    <p>{{ $vuetify.locale.t('$vuetify.homepage.career.intuiface.description') }}</p>
                </div>
            </div>
        </div>
        <!-- LICENCE PRO -->
        <div
            class="timeline__event scroll-animation-3 animated fadeInUp delay-2s timeline__event--type2"
        >
            <div class="timeline__event__icon">
                <img
                    alt="Logo diplôme bac +3"
                    :src="require('@/assets/images/timeline/diplomeLogo+3.png')" />
                <div class="timeline__event__date">
                    {{ $vuetify.locale.t('$vuetify.homepage.career.licence.date') }}
                </div>
            </div>
            <div class="timeline__event__content">
                <div
                    class="timeline__event__title"
                    v-html="$vuetify.locale.t('$vuetify.homepage.career.licence.title')"
                ></div>
                <div class="timeline__event__description">
                    <p>{{ $vuetify.locale.t('$vuetify.homepage.career.licence.description') }}</p>
                </div>
            </div>
        </div>
        <!-- BTS -->
        <div
            class="timeline__event scroll-animation-4 animated fadeInUp delay-1s timeline__event--type1"
        >
            <div class="timeline__event__icon">
                <img
                    alt="Logo diplôme bac +2"
                    :src="require('@/assets/images/timeline/diplomeLogo+2.png')" />
                <div class="timeline__event__date">
                    {{ $vuetify.locale.t('$vuetify.homepage.career.bts.date') }}
                </div>
            </div>
            <div class="timeline__event__content">
                <div
                    class="timeline__event__title"
                    v-html="$vuetify.locale.t('$vuetify.homepage.career.bts.title')"
                ></div>
                <div class="timeline__event__description">
                    <p>{{ $vuetify.locale.t('$vuetify.homepage.career.bts.description') }}</p>
                </div>
            </div>
        </div>
        <!-- BAC -->
        <div class="timeline__event scroll-animation-5 animated fadeInUp timeline__event--type2">
            <div class="timeline__event__icon">
                <img
                    alt="Logo diplôme"
                    :src="require('@/assets/images/timeline/diplomeLogo.png')"
                />
                <div class="timeline__event__date">
                    {{ $vuetify.locale.t('$vuetify.homepage.career.bac.date') }}
                </div>
            </div>
            <div class="timeline__event__content">
                <div
                    class="timeline__event__title"
                    v-html="$vuetify.locale.t('$vuetify.homepage.career.bac.title')"
                ></div>
                <div class="timeline__event__description">
                    <p>{{ $vuetify.locale.t('$vuetify.homepage.career.bac.description') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomTimeline",
    components: {},
    data: () => ({}),
};
</script>

<style lang="scss" scoped>
.timeline {
    display: flex;
    flex-direction: column;

    &__event {
        animation: auto linear appear both;
        animation-timeline: --scrollAnimationTimeline;
        background: #fff;
        position: relative;
        display: flex;
        margin: 10px 0;
        border-radius: 8px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
        z-index: 0;

        &__title {
            font-size: 1.2rem;
            line-height: 1.4;
            text-transform: uppercase;

            font-weight: 600;
            color: rgb(var(--v-theme-primary));
            letter-spacing: 1.5px;
        }
        &__content {
            padding: 10px 10px 0px 20px;
            p {
                margin-bottom: 16px;
            }
        }
        &__date {
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            white-space: nowrap;
        }
        &__icon {
            border-radius: 8px 0 0 8px;
            background: rgb(var(--v-theme-primary));;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 160px;
            font-size: 20px;
            color: rgb(var(--v-theme-primary));
            padding: 20px;

            img {
                position: absolute;
                top: 50%;
                left: -84px;
                transform: translateY(-50%);
                width: 60px;
            }
        }
        &__description {
            flex-basis: 60%;
        }

        &:after {
            content: "";
            width: 2px;
            height: 100%;
            background: rgb(var(--v-theme-primary));;
            position: absolute;
            top: 60%;
            left: -3.5rem;
            z-index: -1;
        }

        &:before {
            content: "";
            width: 5rem;
            height: 5rem;
            position: absolute;
            background: rgb(var(--v-theme-primary));
            border-radius: 100%;
            left: -6rem;
            top: 50%;
            transform: translateY(-50%);
            border: 2px solid white;
        }
        .timeline__event__title ::v-deep i {
            font-size: 10px;
            display: block;
            margin-bottom: 5px;
        }
        &--type2 {
            &:before {
                background: rgb(var(--v-theme-secondary));
                border-color: white;
            }
            &:after {
                background: rgb(var(--v-theme-secondary));
            }
            .timeline__event__date {
                color: white;
            }

            .timeline__event__icon {
                background: rgb(var(--v-theme-secondary));
                color: rgb(var(--v-theme-secondary));
            }
            .timeline__event__title {
                color: rgb(var(--v-theme-secondary));
            }
        }
        &:last-child {
            &:after {
                content: none;
            }
        }
    }
}

// SCROLL ANIMATIONS
@keyframes appear {
    from {
        opacity: 0;
        transform: scaleX(0);
    }
    to {
        opacity: 1;
        transform: scaleX(1.0);
    }
}
.scroll-animation-1 {
    animation-range: cover 25% cover 35%;
}
.scroll-animation-2 {
    animation-range: cover 27.5% cover 37.5%;
}
.scroll-animation-3 {
    animation-range: cover 30% cover 40%;
}
.scroll-animation-4 {
    animation-range: cover 32.5% cover 42.5%;
}
.scroll-animation-5 {
    animation-range: cover 35% cover 45%;
}

@media (max-width: 786px) {
    .timeline__event {
        flex-direction: column;
    }
    .timeline__event__icon {
        border-radius: 4px 4px 0 0;
        padding: 5px;
    }
}
</style>
