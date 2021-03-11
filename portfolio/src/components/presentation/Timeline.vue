<template>
    <div class="timeline pb-12 pt-6">
        <div
            class="timeline__event  animated fadeInUp delay-3s timeline__event--type1"
        >
            <div class="timeline__event__icon ">
                <img src="@/assets/images/timeline/intuifaceLogo.png" />
                <div class="timeline__event__date">
                    2018
                </div>
            </div>
            <div class="timeline__event__content ">
                <div class="timeline__event__title">
                    INTUIFACE
                </div>
                <div class="timeline__event__description">
                    <p>
                        Suite à un stage de 6 mois chez Intuiface, j'ai été embauché en tant qu'Ingénieur R&D.
                        Depuis 2018, je travaille en équipe sur des nouveaux projets, m'assure de maintenir ceux existants.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="timeline__event animated fadeInUp delay-2s timeline__event--type2"
        >
            <div class="timeline__event__icon">
                <img src="@/assets/images/timeline/diplomeLogo+3.png" />
                <div class="timeline__event__date">
                    2018
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    LICENCE PROFESIONNELLE
                </div>
                <div class="timeline__event__description">
                    <p>
                        Obtention de la licence professionnelle Activités et Techniques de Communication, spécialité Multimédia- Internet - Webmaster
                        à l'IUT de Gap.
                    </p>
                </div>
            </div>
        </div>
        <div
            class="timeline__event animated fadeInUp delay-1s timeline__event--type1"
        >
            <div class="timeline__event__icon">
                <img src="@/assets/images/timeline/diplomeLogo+2.png" />
                <div class="timeline__event__date">
                    2017
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    BTS
                </div>
                <div class="timeline__event__description">
                    <p>
                        Brevet de technicien supérieur, Services informatiques aux organisations, option b: Solutions Logicielles et Applications Métiers
                    </p>
                </div>
            </div>
        </div>
        <div class="timeline__event animated fadeInUp timeline__event--type2">
            <div class="timeline__event__icon">
                <img src="@/assets/images/timeline/diplomeLogo.png" />
                <div class="timeline__event__date">
                    2014
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    Bac
                </div>
                <div class="timeline__event__description">
                    <p>
                        Obtention du baccalauréat Technologique STI2D: Sciences et technologies de l'industrie et du développement durable Spécialité: Innovation Technique et Eco-conception
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Timeline",
    components: {},
    data: () => ({}),
};
</script>

<style lang="scss" scoped>
.timeline {
    display: flex;
    flex-direction: column;

    &__event {
        background: #fff;
        margin-bottom: 20px;
        position: relative;
        display: flex;
        margin: 20px 0;
        border-radius: 8px;
        box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
            0 18px 36px -18px rgba(0, 0, 0, 0.3),
            0 -12px 36px -8px rgba(0, 0, 0, 0.025);
        z-index: 0;

        &__title {
            font-size: 1.2rem;
            line-height: 1.4;
            text-transform: uppercase;

            font-weight: 600;
            color: var(--v-primary-base);
            letter-spacing: 1.5px;
        }
        &__content {
            padding: 20px;
        }
        &__date {
            color: white;
            font-size: 1.5rem;
            font-weight: 600;
            white-space: nowrap;
        }
        &__icon {
            border-radius: 8px 0 0 8px;
            background: var(--v-primary-base);;
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 95px;
            font-size: 20px;
            color: var(--v-primary-base);
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
            background: var(--v-primary-base);;
            position: absolute;
            top: 60%;
            // transform: translateY(-50%);
            left: -3.5rem;
            z-index: -1;
        }

        &:before {
            content: "";
            width: 5rem;
            height: 5rem;
            position: absolute;
            background: var(--v-primary-base);
            border-radius: 100%;
            left: -6rem;
            // right: 90%;
            top: 50%;
            transform: translateY(-50%);
            border: 2px solid white;
        }
        &--type2 {
            &:before {
                background: var(--v-secondary-base);
                border-color: white;
            }
            &:after {
                background: var(--v-secondary-base);
            }
            .timeline__event__date {
                color: white;
            }

            .timeline__event__icon {
                background: var(--v-secondary-base);
                color: var(--v-secondary-base);
            }
            .timeline__event__title {
                color: var(--v-secondary-base);
            }
            .timeline__event__title {
            }
        }
        &:last-child {
            &:after {
                content: none;
            }
        }
    }
}

@media (max-width: 786px) {
    .timeline__event {
        flex-direction: column;
    }
    .timeline__event__icon {
        border-radius: 4px 4px 0 0;
    }
}
</style>
