<template>
<div class="contact-container">  
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

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
            Validate
        </v-btn>
    </v-form>
</div>
</template>

<script>
export default {
    name: 'Contact',
    components: {
    },
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        checkbox: false
    }),
    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        }
    }
};
</script>

<style scoped>
.contact-container {
    height: 100vh;
    background-color: #fcf1f1;
    padding: 175px 0;
    display: flex;
    justify-content: center;
}
.contact-form {
    width: 20vw;
}
</style>
