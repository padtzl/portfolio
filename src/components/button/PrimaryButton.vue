<template>
    <BaseButton :customClasses="primaryClasses" :type="type" :disabled="disabled" @click="handleClick">
        <slot />
    </BaseButton>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import BaseButton from '../base/BaseButton.vue';

const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['click']);

const primaryClasses = computed(() =>
    ['bg-blue-600 text-white hover:bg-blue-700', props.disabled ? 'opacity-50 cursor-not-allowed' : ''].join(' ')
);

const handleClick = (event: Event) => {
    emit('click', event);
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
