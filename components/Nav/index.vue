<template>
  <nav
    class="bg-background flex justify-between items-center gap-x-3 py-2 px-5 w-full z-50"
  >
    <section>
      <div class="flex items-center gap-x-3">
        <Button v-if="$route.path !== '/'" @click="$router.back()" intent="ghost" size="sm">
          <Icon class="w-5 h-5" name="ic:round-keyboard-arrow-left" />
        </Button>
        
        {{  }}
        <Button href="/" intent="ghost" customClass="flex items-center gap-x-3">
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
