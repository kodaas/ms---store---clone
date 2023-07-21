<template>
  <Html data-color-mode="teal" :class="useThemeMode().value" lang="en">
    <Head>
      <Title>{{ useTitle().value }}</Title>
    </Head>

    <Body class="bg-background text-foreground-body">
      <section class="max-w-screen max-h-screen flex flex-col">
        <div class="border border-orange-300">
          <Nav />
        </div>

        <section class="border-2 border-red-300 overflow-hidden h-full flex">
          <section class="w-20 border-2 border-green-300">
            <Sidebar />
          </section>

          <main
            class="overflow-y-auto overflow-x-hidden w-full border-2 border-blue-200 scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary-light scrollbar-track-background scrollbar-thumb-rounded-lg"
          >
            <slot />

            <div class="w-full h-screen bg-black"></div>
            <div class="w-full h-screen bg-green-300"></div>
            <div class="w-full h-screen bg-blue-400"></div>
          </main>
        </section>
      </section>
    </Body>
  </Html>
</template>
