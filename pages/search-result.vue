<script setup lang="ts">
const showDropdown = ref(false)
const selectedCategoryIndex = ref(0)
const categories = reactive(["All Departments", "Apps", "Game", "Movies", "Tv Shows"])
</script>

<template>
  <div class="p-5 md:p-10 space-y-10">

    <div class="flex justify-between items-center">
      <h1 class="text-2xl text-foreground-display">"{{ $route.query?.q }}"</h1>

      <Button @click="showDropdown = !showDropdown" intent="ghost" custom-class="text-foreground-display active:bg-background-50" size="sm">

        <Icon name="material-symbols:filter-list-rounded" />

        <p class="pr-5">Filters</p>

        <Icon name="akar-icons:chevron-down-small" :class="{'transform rotate-180': showDropdown}" />
      </Button>
    </div>

    <div v-if="showDropdown" class="p-8 text-foreground-display rounded-md bg-background-100">
      <FilterDropdown />
    </div>

    <div v-else class="flex gap-3 flex-wrap">
      <Button v-for="(category, index) in categories" :key="index" @click="selectedCategoryIndex = index" intent="outline" size="sm" :custom-class="selectedCategoryIndex === index ? 'rounded-full border border-primary text-primary dark:border-primary-light dark:text-primary-light text-sm hover:bg-transparent px-7' : 'rounded-full border text-sm px-7'">{{ category }}</Button>
    </div>

    <div class="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pb-20">
      <SearchCard v-for="item in 11" />

      <div class="w-full bg-background-50 rounded-md animate-pulse duration-100"></div>
      <div class="w-full bg-background-50 rounded-md animate-pulse duration-100"></div>
      <div class="w-full bg-background-50 rounded-md animate-pulse duration-100"></div>

      <div class="absolute bg-gradient-to-b from-transparent to-background-200 w-full pt-20 pb-5 bottom-5 left-0 text-center text-lg">
        <Icon name="svg-spinners:ring-resize" class="text-primary-dark dark:text-primary-light" />

      </div>
    </div>

  </div>
</template>
