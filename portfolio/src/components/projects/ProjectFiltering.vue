<template>
    <div class="projects-filtering">
        <!-- Project Types -->
        <SelectMultipleCyberpunk
            :values="projectTypes"
            :selectedValues="projectTypesValues"
            @valueChange="onProjectTypeChange"
        ></SelectMultipleCyberpunk>

        <!-- Search field -->
        <!-- <v-text-field
            v-model="searchFilter"
            :label="$vuetify.locale.t('$vuetify.projects.filtering.searchLabel')"
            :placeholder="$vuetify.locale.t('$vuetify.projects.filtering.searchPlaceholder')"
            persistent-placeholder
            color="primary"
            variant="underlined"
            class="text-white search-field"
            @update:model-value="$emit('searchChange', searchFilter)"
            clearable
        ></v-text-field> -->

        <v-spacer></v-spacer>
        <div class="view-mode">
            <!-- Grid -->
            <v-btn
                variant="text"
                icon="mdi-view-grid"
                :color="viewMode === EViewMode.grid ? 'primary' : 'white'"
                @click="$emit('viewModeChange', EViewMode.grid)"
            ></v-btn>
            <!-- Line -->
            <v-btn
                variant="text"
                icon="mdi-view-headline"
                :color="viewMode === EViewMode.line ? 'primary' : 'white'"
                @click="$emit('viewModeChange', EViewMode.line)"
            ></v-btn>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { EViewMode, EProjectType, DEFAULT_TYPES } from '@/models/Project';
import SelectMultipleCyberpunk from '@/components/shared/SelectMultipleCyberpunk.vue';

export default defineComponent({
    name: 'ProjectFiltering',
    components: { SelectMultipleCyberpunk },
    props: {
        viewMode: { type: String as PropType<EViewMode> }
    },
    data: () => ({
        EViewMode: EViewMode,
        searchFilter: '' as string,
        projectTypes: DEFAULT_TYPES as EProjectType[],
        projectTypesValues: DEFAULT_TYPES as EProjectType[],
    }),
    methods: {
        onProjectTypeChange(projectType: EProjectType): void {
            this.projectTypesValues = this.projectTypesValues.includes(projectType)
                ? this.projectTypesValues.filter((p: EProjectType) => p !== projectType)
                : this.projectTypesValues.concat(projectType);

            this.$emit('typeChange', this.projectTypesValues);
        },
    }
});
</script>

<style lang="scss" scoped>

.projects-filtering {
    display: flex;
    align-items: flex-end;
    .search-field {
        margin-right: 20px;
        max-width: 300px;
    }
    .view-mode {
        align-self: baseline;
        margin-top: 8px;
    }
}

@media (max-width: 550px) {
    .projects-filtering {
        position: relative;
        .view-mode {
            position: absolute;
            z-index: 1;
            top: -55px;
            right: -10px;
        }
    }
    
}
</style>

<style lang="scss">
.projects-filtering {
    .project-types-select .v-input__control {
        height: 60px;
    }
}
</style>
