<template>
  <Html data-color-mode="teal" :class="useThemeMode().value" lang="en">
    <Head>
      <Title>{{ useTitle().value }}</Title>
    </Head>
    <Body class="bg-background text-foreground-body">
      <Nav />

      <section class="flex">
        <section
          class="overflow-hidden shrink-0 w-20 h-[calc(100vh-4.5rem)] sticky top-[4.5rem]"
        >
          <Sidebar />
        </section>

        <main
          class="p-20 overflow-x-hidden bg-background-200 h-[calc(100vh-4.5rem)] rounded-tl-md w-full scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary-light scrollbar-track-background scrollbar-thumb-rounded-lg isolate"
        >
          <slot />
        </main>
      </section>
    </Body>
  </Html>
</template>
