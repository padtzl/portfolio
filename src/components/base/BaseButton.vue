<template>
    <button :class="computedClasses" :type="type" @click="handleClick" :disabled="disabled">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'button',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    customClasses: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['click']);

const computedClasses = computed(() =>
    [
        'px-6 py-2 rounded-full transition-all duration-300 ease-in-out',
        'focus:outline-none',
        props.customClasses,
        props.disabled ? 'opacity-50 cursor-not-allowed' : '',
    ].join(' ')
);

const handleClick = (event: Event) => {
    if (!props.disabled) {
        emit('click', event);
    }
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
