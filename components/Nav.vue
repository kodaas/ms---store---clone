<script setup lang="ts">
const updateThemeMode = (mode: string) => {
  const themeMode = useThemeMode();

  switch (mode) {
    case "light":
      themeMode.value = "light";
      break;
    case "dark":
      themeMode.value = "dark";
      break;
    default:
      themeMode.value = "light";
  }
};
</script>

<template>
  <nav
    class="sticky top-0 bg-background flex justify-between items-center py-5 px-5"
  >
    <section>
      <div class="flex items-center gap-x-3">
        <Button class="hidden" intent="ghost" size="sm"
          ><Icon class="w-5 h-5" name="ic:round-keyboard-arrow-left"
        /></Button>

        <Logo size="w-5 h-5" />

        <p class="text-foreground-display text-sm hidden md:block">
          {{ useTitle().value }}
        </p>
      </div>
    </section>

    <section class="shrink-0 p-0">
      <input type="text" class="h-full" />
    </section>

    <section class="flex gap-x-5">
      <div>
        <Button intent="ghost" size="sm">
          <Icon
            @click="updateThemeMode('dark')"
            v-if="useThemeMode().value === 'light'"
            class="w-4 h-4"
            name="ph:sun-duotone"
          />
          <Icon
            @click="updateThemeMode('light')"
            v-if="useThemeMode().value === 'dark'"
            class="w-4 h-4"
            name="ri:moon-clear-line"
          />
        </Button>
      </div>
      <span class="bg-yellow-500 w-8 h-8 rounded-full block"></span>
    </section>
  </nav>
</template>
