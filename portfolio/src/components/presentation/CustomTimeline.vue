<template>
    <div class="timeline pb-12 pt-6">
        <div
            class="timeline__event  animated fadeInUp delay-3s timeline__event--type1"
        >
            <div class="timeline__event__icon ">
                <img
                    alt="Intuiface Logo"
                    :src="require('@/assets/images/timeline/intuifaceLogo.png')"
                />
                <div class="timeline__event__date">
                    Depuis 2018
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
                        INTUIFACE
                    </a>
                </div>
                <div class="timeline__event__description">
                    <p>
                        Suite à un stage de 6 mois chez Intuiface, j'ai été embauché en tant qu'Ingénieur R&D.
                        Je travail principalement en équipe sur des projets d'application web (plus de détails dans la partie projets).  
                    </p>
                </div>
            </div>
        </div>
        <div
            class="timeline__event animated fadeInUp delay-2s timeline__event--type2"
        >
            <div class="timeline__event__icon">
                <img
                    alt="Logo diplôme bac +3"
                    :src="require('@/assets/images/timeline/diplomeLogo+3.png')" />
                <div class="timeline__event__date">
                    2018
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    LICENCE PROFESIONNELLE MIW
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
                <img
                    alt="Logo diplôme bac +2"
                    :src="require('@/assets/images/timeline/diplomeLogo+2.png')" />
                <div class="timeline__event__date">
                    2017
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    BTS SIO
                </div>
                <div class="timeline__event__description">
                    <p>
                        Obtention du Brevet de technicien supérieur, Services informatiques aux organisations. Option b: Solutions Logicielles et Applications Métiers.
                    </p>
                </div>
            </div>
        </div>
        <div class="timeline__event animated fadeInUp timeline__event--type2">
            <div class="timeline__event__icon">
                <img
                    alt="Logo diplôme"
                    :src="require('@/assets/images/timeline/diplomeLogo.png')"
                />
                <div class="timeline__event__date">
                    2014
                </div>
            </div>
            <div class="timeline__event__content">
                <div class="timeline__event__title">
                    Bac STI2D
                </div>
                <div class="timeline__event__description">
                    <p>
                        Obtention du Baccalauréat Technologique STI2D: Sciences et technologies de l'industrie et du développement durable Spécialité: Innovation Technique et Eco-conception
                    </p>
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
        padding: 5px;
    }
}
</style>
