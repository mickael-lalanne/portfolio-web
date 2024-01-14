<template>
    <div class="projects-filtering">
        <v-text-field
            v-model="searchFilter"
            :label="$vuetify.locale.t('$vuetify.projects.filtering.searchLabel')"
            :placeholder="$vuetify.locale.t('$vuetify.projects.filtering.searchPlaceholder')"
            persistent-placeholder
            color="primary"
            variant="underlined"
            class="text-white search-field"
            @update:model-value="$emit('searchChange', searchFilter)"
            clearable
        ></v-text-field>
        <v-select
            chips
            :label="$vuetify.locale.t('$vuetify.projects.filtering.typeLabel')"
            :items="projectTypes"
            v-model="projectTypesValues"
            class="text-white project-types-select"
            multiple
            @update:model-value="$emit('typeChange', projectTypesValues)"
        >
            <template v-slot:chip="{ item }">
                <v-chip>{{ $vuetify.locale.t(item.value) }}</v-chip>
            </template>

            <template v-slot:item="{ item, props }">
                <v-list-item v-bind="props" title="">
                    {{ $vuetify.locale.t(item.value) }}

                    <template v-slot:prepend="{ isSelected }">
                        <v-checkbox :model-value="isSelected" hide-details></v-checkbox>
                    </template>
                </v-list-item>
            </template>
        </v-select>
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


export default defineComponent({
    name: 'ProjectFiltering',
    props: {
        viewMode: { type: String as PropType<EViewMode> }
    },
    data: () => ({
        EViewMode: EViewMode,
        searchFilter: '' as string,
        projectTypes: DEFAULT_TYPES as EProjectType[],
        projectTypesValues: DEFAULT_TYPES as EProjectType[],
    })
});
</script>

<style lang="scss" scoped>

.projects-filtering {
    display: flex;
    align-items: flex-end;
    margin-bottom: 65px;
    .search-field {
        margin-right: 20px;
        max-width: 300px;
    }
    .project-types-select {
        max-width: 315px;
        width: 315px;
        min-height: 82px;
    }
    .view-mode {
        align-self: baseline;
        margin-top: 8px;
    }
}

// Medium devices (tablets, max 768px and less)
@media (max-width: 768px) {
    .projects-filtering {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 30px;
        .search-field {
            margin-right: 0;
            max-width: unset;
            width: 100%;
            margin-bottom: 8px;
        }
        .project-types-select {
            max-width: unset;
            width: 100%;
            min-height: 82px;
        }
        .view-mode {
            margin-top: 0;
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
