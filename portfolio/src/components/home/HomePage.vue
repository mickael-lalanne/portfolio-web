<template>
    <v-app>
        <div ref="homeContainer" class="home-container" data-app>
            <div class="home-content-container">
                <div>
                    <div
                        class="short-presentation"
                        v-html="$vuetify.locale.t('$vuetify.homepage.shortPresentation')"
                    ></div>
                    <div v-if="$vuetify.locale.current === 'en'" class="english-warning mx-12 mt-5">
                        FYI, I am not a native english speaker, so it may have some spelling errors.
                        <br>I hope you'll be indulgent 😇
                    </div>
                    <CustomButton
                        class="see-work-button"
                        :text="$vuetify.locale.t('$vuetify.homepage.workButton')"
                        @click="onSeeWorkButtonClick"
                    />
                </div>
            </div>
            <LanguageSelector />
            <vue-particles
                class="particles-container"
                color="#dedede"
                :particleOpacity="0.2"
                :particlesNumber="40"
                shapeType="circle"
                :particleSize="4"
                linesColor="#dedede"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.2"
                :linesDistance="150"
                :moveSpeed="0.8"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
            >
            </vue-particles>
            <MainMenu
                :selectedCategory="selectedCategory"
                @itemClick="scrollToCategory"
            />
            <PresentationSection ref="presentationCategory" />
            <ProjectsSection ref="projectsCategory" />
            <CategorySeparator />
            <ContactSection ref="contactCategory" />
            <CustomFooter />
        </div>
    </v-app>
</template>

<script>
import MainMenu from "@/components/home/MainMenu.vue";
import PresentationSection from "@/components/presentation/PresentationSection.vue";
import ProjectsSection from "@/components/projects/ProjectsSection.vue";
import ContactSection from "@/components/contact/ContactSection.vue";
import CategorySeparator from "@/components/home/CategorySeparator.vue";
import CustomButton from "@/components/shared/CustomButton.vue";
import CustomFooter from "@/components/home/CustomFooter.vue";
import LanguageSelector from "@/components/home/LanguageSelector.vue";

export default {
    name: "HomePage",
    components: {
        MainMenu,
        PresentationSection,
        ContactSection,
        ProjectsSection,
        CategorySeparator,
        CustomButton,
        CustomFooter,
        LanguageSelector
    },
    data: () => ({
        selectedCategory: "presentation",
        scrollTimeout: null,
    }),
    mounted: function() {
        this.$refs.homeContainer.addEventListener(
            "scroll",
            this.onHomeContainerScroll
        );
        window.addEventListener("scroll", this.onHomeContainerScroll);

        console.log(`
      ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
      ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
      ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
      ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
      ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
      ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
      `);
    },
    methods: {
        scrollToCategory: function(categoryName = "presentation") {
            this.selectedCategory = categoryName;
            const categoryElt = this.$refs[categoryName + "Category"].$el;
            categoryElt.scrollIntoView();
        },
        onSeeWorkButtonClick: function() {
            const categoryElt = this.$refs.presentationCategory.$el;
            var elementPosition = categoryElt.offsetTop;

            window.scrollTo({
                top: elementPosition - 30,
                behavior: "smooth",
            });
        },
        onHomeContainerScroll: function() {
            if (!this.scrollTimeout) {
                this.scrollTimeout = setTimeout(() => {
                    // Fix "Cannot read property .$el of undefined" error
                    if (
                        !this.$refs["presentationCategory"] ||
                        !this.$refs["projectsCategory"] ||
                        !this.$refs["contactCategory"]
                    ) {
                        return;
                    }

                    const presentationPercent = this.getViewPercentage(
                        this.$refs["presentationCategory"].$el
                    );
                    const projectsPercent = this.getViewPercentage(
                        this.$refs["projectsCategory"].$el
                    );
                    const contactPercent = this.getViewPercentage(
                        this.$refs["contactCategory"].$el
                    );

                    const percentageValue = 55;
                    if (presentationPercent > percentageValue) {
                        this.selectedCategory = "presentation";
                    } else if (projectsPercent > percentageValue) {
                        this.selectedCategory = "projects";
                    } else if (contactPercent > percentageValue) {
                        this.selectedCategory = "contact";
                    }

                    this.scrollTimeout = null;
                }, 1000);
            }
        },
        getViewPercentage(element) {
            const viewport = {
                top: window.pageYOffset,
                bottom: window.pageYOffset + window.innerHeight,
            };

            const elementBoundingRect = element.getBoundingClientRect();
            const elementPos = {
                top: elementBoundingRect.y + window.pageYOffset,
                bottom:
                    elementBoundingRect.y +
                    elementBoundingRect.height +
                    window.pageYOffset,
            };

            if (
                viewport.top > elementPos.bottom ||
                viewport.bottom < elementPos.top
            ) {
                return 0;
            }

            // Element is fully within viewport
            if (
                viewport.top < elementPos.top &&
                viewport.bottom > elementPos.bottom
            ) {
                return 100;
            }

            // Element is bigger than the viewport
            if (
                elementPos.top < viewport.top &&
                elementPos.bottom > viewport.bottom
            ) {
                return 100;
            }

            const elementHeight = elementBoundingRect.height;
            let elementHeightInView = elementHeight;

            if (elementPos.top < viewport.top) {
                elementHeightInView =
                    elementHeight - (window.pageYOffset - elementPos.top);
            }

            if (elementPos.bottom > viewport.bottom) {
                elementHeightInView =
                    elementHeightInView - (elementPos.bottom - viewport.bottom);
            }

            const percentageInView =
                (elementHeightInView / window.innerHeight) * 100;

            return Math.round(percentageInView);
        },
    },
};
</script>

<style lang="scss" scoped>
.home-container {
    background-color: rgb(var(--v-theme-dark));
    overflow: hidden;
    position: relative;
}
.home-content-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 42px;
    color: #fcf1f1;
    font-family: 'Raleway', sans-serif;
    font-display: swap;
}
.english-warning {
    font-size: 16px;
}
.short-presentation ::v-deep h1 {
    color: rgb(var(--v-theme-primary));
    display: inline;
    font-weight: 400;
    font-size: inherit;
}
.particles-container {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
}
.see-work-button {
    margin-top: 20px;
}

// RESPONSIVE

@media (max-width: 1600px) {
    .home-content-container {
        font-size: 42px;
    }
}

@media (max-width: 1200px) {
    .home-content-container {
        font-size: 42px;
    }
}

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .home-content-container {
        font-size: 39px;
    }
    .name-container {
        display: block;
    }
}

// Small devices (landscape phones, max 576px and less)
@media (max-width: 576px) {
    .home-content-container {
        font-size: 26px;
    }
}
</style>
