<template>
    <div class="contact-container">
        <div class="section-title">Contact</div>
        <div class="title-separator"></div>
        <div class="form-container">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="contact-form"
            >
                <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>

                <v-textarea
                    name="input-7-1"
                    label="Default style"
                    value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                    hint="Hint text"
                ></v-textarea>

                <a class="contact-button">
                    <span class="text">Horizontal</span>
                </a>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    components: {},
    data: () => ({
        valid: true,
        name: "",
        nameRules: [
            (v) => !!v || "Name is required",
            (v) =>
                (v && v.length <= 10) || "Name must be less than 10 characters",
        ],
        email: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        select: null,
        checkbox: false,
    }),
    methods: {
        validate() {
            this.$refs.form.validate();
        },
        reset() {
            this.$refs.form.reset();
        },
        resetValidation() {
            this.$refs.form.resetValidation();
        },
    },
};
</script>

<style lang="scss" scoped>
.contact-container {
    background-color: var(--v-light-base);
    padding: 175px 0;
}
.form-container {
    display: flex;
    justify-content: center;
}
.contact-form {
    width: 20vw;
}
.title-separator {
    width: 100px;
    height: 4px;
    background-color: var(--v-primary-base);
    text-align: center;
    margin: auto;
    margin-bottom: 100px;
}
.section-title {
    color: var(--v-primary-base);
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
.contact-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 150px;
    height: 45px;
    margin: 20px;
    border: 2px solid var(--v-primary-base);
    font-size: 24px;
    cursor: pointer;

    > .text {
        position: relative;
        color: transparent;
        background-image: linear-gradient(
            90deg,
            var(--v-dark-base) 0%,
            var(--v-dark-base) 50%,
            var(--v-primary-base) 50%,
            var(--v-primary-base) 100%
        );
        background-repeat: repeat;
        background-size: 200%;
        background-position: 100% 0;
        -webkit-background-clip: text;
        background-clip: text;
        transition: background-position 600ms;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--v-primary-base);
        transform-origin: 100% 0;
        transform: scale3d(0, 1, 1);
        transition: transform 600ms;
    }

    &:hover {
        .text {
            background-position: 0 0;
        }

        &::before {
            transform-origin: 0 0;
            transform: scale3d(1, 1, 1);
        }
    }
}
</style>
