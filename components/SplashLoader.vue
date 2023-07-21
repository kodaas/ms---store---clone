<template>
  <Title> Loading... | {{ useTitle().value }}</Title>

  <main class="h-screen flex items-end justify-center">
    <section class="h-[calc(50%+3rem)] space-y-48 text-center">
      <div>
        <Logo />
      </div>

      <div>
        <Icon
          name="svg-spinners:ring-resize"
          class="text-foreground-display text-4xl"
        />
      </div>
    </section>
  </main>
</template>
