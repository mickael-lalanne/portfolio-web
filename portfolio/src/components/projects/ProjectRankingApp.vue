<template>
    <v-dialog
        v-model="showDialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
    >
        <v-card class="project-container">
            <!-- CLOSE BUTTON -->
            <CloseButton @click="$emit('close')" />

            <div class="iframe-container">
                <iframe
                    frameborder="0"
                    width="100%"
                    height="100%"
                    src="https://docs.google.com/document/d/e/2PACX-1vT7OavdXNe7HlgRQf1s0FwLqcM2IvmMrUPO8hcZ8mjUVATypJMwll-l39z8sJWkKaT9fMlbl0GWxlTD/pub?embedded=true"
                ></iframe>

            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { ProjectMixin } from '@/mixins/projectMixin.ts';

export default defineComponent({
    mixins: [ProjectMixin],
    name: "ProjectRankingApp"
});
</script>

<style lang="scss" scoped>
.project-container {
    height: 100%;
    padding: 1vw !important;
}
</style>
