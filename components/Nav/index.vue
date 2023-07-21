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
  <nav class="bg-background flex justify-between items-center py-2 px-2 w-full">
    <section>
      <div class="flex items-center gap-x-3">
        <Button class="hidden" intent="ghost" size="sm"
          ><Icon class="w-5 h-5" name="ic:round-keyboard-arrow-left"
        /></Button>

        <Button href="/home" intent="ghost" class="flex items-center gap-x-3">
          <Logo size="w-5 h-5" />

          <p class="text-foreground-display text-sm hidden md:block">
            {{ useTitle().value }}
          </p>
        </Button>
      </div>
    </section>

    <section class="shrink-0 flex-1 max-w-[30rem]">
      <NavSearch />
    </section>

    <section class="flex gap-x-5">
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

      <span class="bg-yellow-500 w-8 h-8 rounded-full block"></span>
    </section>
  </nav>
</template>
