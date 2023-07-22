<script setup lang="ts">
import { usePreferredColorScheme, useThemeMode, useToggleTheme  } from '#imports'

watchEffect(() => {
  if (useThemeMode().value.includes('system')) {
    useThemeMode().value = `system ${usePreferredColorScheme().value}`
  }
})
</script>

<template>
  <Button @click="useToggleTheme()" intent="ghost" size="sm">
    <Icon
      v-if="useThemeMode().value === 'light'"
      class="w-4 h-4"
      name="ph:sun-duotone"
    />

    <Icon
      v-if="useThemeMode().value === 'dark'"
      class="w-4 h-4"
      name="ri:moon-clear-line"
    />

    <Icon
      v-if="useThemeMode().value.includes('system')"
      class="w-4 h-4"
      name="ci:monitor"
    />
  </Button>
</template>
