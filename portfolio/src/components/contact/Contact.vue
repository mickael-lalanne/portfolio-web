<template>
    <div class="contact-container">
        <div class="section-title">Contact</div>
        <div class="title-separator"></div>
        <div class="section-subtitle">
            Tu as une question ? N'hésite pas à m'envoyer un message !
        </div>
        <div class="form-container">
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                class="contact-form"
            >
                <!-- Subject field -->
                <v-text-field
                    v-model="subject"
                    label="Sujet"
                ></v-text-field>

                <!-- Message field -->
                <v-textarea
                    v-model="message"
                    label="Message"
                    rows="8"
                ></v-textarea>

                <!-- Send message button -->
                <div class="d-flex justify-end">
                    <div class="send-message-btn" @click="sendMessage">Envoyer</div>
                </div>
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
        message: "",
        subject: "",
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
        sendMessage() {
            window.open(
                `mailto:mickael.lalanne03@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`
            );
        }
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
    background-color: white;
    padding: 30px;
    box-shadow: 0 30px 60px -12px rgb(50 50 93 / 25%),
        0 18px 36px -18px rgb(0 0 0 / 30%), 0 -12px 36px -8px rgb(0 0 0 / 3%);
}
.title-separator {
    width: 100px;
    height: 4px;
    background-color: var(--v-primary-base);
    text-align: center;
    margin: auto;
    margin-bottom: 65px;
}
.section-title {
    color: var(--v-primary-base);
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
.section-subtitle {
    color: var(--v-dark-base);
    font-size: 20px;
    margin-bottom: 65px;
    text-align: center;
}

// SEND MESSAGE BUTTON
.send-message-btn {
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    cursor: pointer;

    color: var(--v-secondary-base);
    transition: 0.25s;

    &:hover,
    &:focus {
        border-color: var(--v-secondary-base);
        color: #fff;
    }
}

.send-message-btn:hover,
.send-message-btn:focus {
    box-shadow: inset 7.5em 0 0 0 var(--v-secondary-base);
}

// RESPONSIVE

// Small devices (landscape phones, max 576px and less)
@media (max-width: 576px) {
    .contact-form {
        width: 90vw;
    }
}

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .contact-form {
        width: 70vw;
    }
}

// Large devices (desktops, min 769px and up)
@media (min-width: 769px) {
    .contact-form {
        width: 600px;
    }
}
</style>
