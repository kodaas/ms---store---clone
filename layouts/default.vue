<template>
  <Html data-color-mode="orange" :class="useThemeMode().value" lang="en">

  <Head>
    <Title>{{ useTitle().value }}</Title>
  </Head>

  <Body class="bg-background text-foreground-body">
    <!-- <div class="p-32"></div> -->
    <section class="w-screen max-w-[2500px] mx-auto max-h-screen flex flex-col">
      <div class="z-50">
        <Nav />
      </div>

      <section class="overflow-hidden h-full flex">
        <section class="w-20 px-2">
          <Sidebar />
        </section>

        <main
          class="z-10 overflow-y-auto overflow-x-hidden min-h-screen mx-auto w-full  bg-background-200 rounded-tl-md scrollbar-thin scrollbar-thumb-primary dark:scrollbar-thumb-primary-light scrollbar-track-background scrollbar-thumb-rounded-lg">
          <slot />
        </main>
      </section>
    </section>
  </Body>

  </Html>
</template>
