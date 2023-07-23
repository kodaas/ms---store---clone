<script setup lang="ts">
function isRouteActive(route: string) {
  return useRoute().path === route
}
</script>

<template>
  <aside class="flex flex-col justify-between h-full">

    <!-- Top -->
    <section class="flex flex-col items-center gap-y-3">

      <SidebarItem :is-selected="isRouteActive('/')" route="/">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected" name="ph:house-fill" />
            <Icon v-else name="ph:house-light" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">Home</span>
        </template>
      </SidebarItem>



      <SidebarItem :is-selected="isRouteActive('/applications')" route="/applications">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected" name="uis:apps" />
            <Icon v-else name="fluent:apps-16-regular" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">Apps</span>
        </template>
      </SidebarItem>



      <SidebarItem :is-selected="isRouteActive('/gaming')" route="/gaming">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected"
              name="fluent:xbox-controller-20-filled" />
            <Icon v-else name="fluent:xbox-controller-16-regular" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">Gaming</span>
        </template>
      </SidebarItem>



      <SidebarItem :is-selected="isRouteActive('/movies-tv')" route="/movies-tv">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected" name="fluent:movies-and-tv-20-filled" />
            <Icon v-else name="fluent:movies-and-tv-16-regular" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">Movies</span>
        </template>
      </SidebarItem>

    </section>



    <!-- Bottom -->
    <section class="flex flex-col items-center gap-y-2 py-3">
      <SidebarItem :is-selected="isRouteActive('/library')" route="/library">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected" name="fluent:library-16-filled" />
            <Icon v-else name="fluent:library-16-regular" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">Library</span>
          <span class="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-primary dark:bg-primary-light"></span>
        </template>
      </SidebarItem>



      <SidebarItem :is-selected="isRouteActive('/about')" route="/about">
        <template #icon="{ isSelected }">
          <div class="text-2xl">
            <Icon class="text-primary dark:text-primary-light" v-if="isSelected" name="ph:question-fill" />
            <Icon v-else name="ph:question" />
          </div>
        </template>

        <template #default="{ isSelected }">
          <span v-if="!isSelected" class="text-xs">About</span>
        </template>
      </SidebarItem>
    </section>
  </aside>
</template>
