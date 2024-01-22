import CloseButton from "@/components/shared/CloseButton.vue";
import ImageExtend from "@/components/shared/ImageExtend.vue";

export const ProjectMixin = {
    components: { CloseButton, ImageExtend },
    props: {
        showDialog: { type: Boolean },
    },
    data: () => ({
        imageToExtend: null
    }),
    watch: {
        showDialog: function (value: boolean) {
            // Fix Vuetify bug where two scrollbars are displaying at the same for v-dialog in full screen
            // See https://github.com/vuetifyjs/vuetify/issues/5356
            const html = document.querySelector('html');
            html!.style.overflowY = value
                ? 'hidden'
                : 'unset';
        }
    }
};
