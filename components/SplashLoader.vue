<template>
  <Html data-color-mode="orange" :class="useThemeMode().value" lang="en">
  <Title> Loading... | {{ useTitle().value }}</Title>

  <Body>

  <div class="hidden">
    <NavTheme />
  </div>
    <main class="h-screen flex items-end justify-center bg-background">
      <section class="h-[calc(50%+3rem)] space-y-48 text-center">
        <div>
          <Logo />
        </div>

        <div>
          <Icon name="svg-spinners:ring-resize" class="text-foreground-display text-4xl" />
        </div>
      </section>
    </main>
  </Body>

  </Html>
</template>
<script setup lang="ts">
</script>