<template>
    <BaseButton :customClasses="secondaryClasses" :type="type" :disabled="disabled" @click="onClick">
        <slot />
    </BaseButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseButton from './BaseButton.vue';

export default defineComponent({
    name: 'SecondaryButton',
    components: {
        BaseButton,
    },
    props: {
        type: {
            type: String,
            default: 'button',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        secondaryClasses() {
            return [
                'bg-gray-200 text-gray-700 hover:bg-gray-300',
                this.disabled ? 'opacity-50 cursor-not-allowed' : '',
            ].join(' ');
        },
    },
    emits: ['click'],
    methods: {
        onClick(event: Event) {
            this.$emit('click', event);
        },
    },
});
</script>

<style scoped>
/* Additional styling if needed */
</style>
