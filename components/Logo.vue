<script setup lang="ts">
const cn = useCn();

defineProps<{ size?: string }>();
</script>

<template>
  <img
    src="@/assets/img/logo-light.svg"
    :class="cn('w-24 h-24 hidden dark:block', size ?? '')"
    alt="MS Store Logo"
  />
  <img
    src="@/assets/img/logo-dark.svg"
    :class="cn('w-24 h-24 dark:hidden', size ?? '')"
    alt="MS Store Logo"
  />
</template>
