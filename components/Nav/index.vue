<template>
  <nav
    class="bg-background flex justify-between items-center gap-x-3 py-2 px-2 w-full"
  >
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
      <NavTheme />

      <NavProfile />
    </section>
  </nav>
</template>
