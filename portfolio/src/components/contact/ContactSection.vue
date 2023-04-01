<template>
    <div id="contact" class="contact-container">
        <h2 class="section-title">Contact</h2>
        <div class="title-separator"></div>
        <div class="section-subtitle">
            {{ $vuetify.locale.t('$vuetify.contact.text') }}
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
                    :label="$vuetify.locale.t('$vuetify.contact.subject')"
                    color="secondary"
                    variant="underlined"
                ></v-text-field>

                <!-- Message field -->
                <v-textarea
                    v-model="message"
                    :label="$vuetify.locale.t('$vuetify.contact.message')"
                    rows="8"
                    color="secondary"
                    variant="underlined"
                ></v-textarea>

                <!-- Send message button -->
                <div class="d-flex justify-end">
                    <div class="send-message-btn" @click="sendMessage">  
                        {{ $vuetify.locale.t('$vuetify.contact.send') }}
                    </div>
                </div>
            </v-form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactSection",
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
    }
};
</script>

<style lang="scss" scoped>
.contact-container {
    background-color: rgb(var(--v-theme-light));
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
    background-color: rgb(var(--v-theme-primary));
    text-align: center;
    margin: auto;
    margin-bottom: 65px;
}
.section-title {
    color: rgb(var(--v-theme-primary));
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
}
.section-subtitle {
    color: rgb(var(--v-theme-dark));
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

    color: rgb(var(--v-theme-secondary));
    transition: 0.25s;

    &:hover,
    &:focus {
        border-color: rgb(var(--v-theme-secondary));
        color: #fff;
    }
}

.send-message-btn:hover,
.send-message-btn:focus {
    box-shadow: inset 130px 0 0 0 rgb(var(--v-theme-secondary));
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
        width: 90vw;
    }
}

// Large devices (desktops, min 769px and up)
@media (min-width: 769px) {
    .contact-form {
        width: 600px;
    }
}
</style>
