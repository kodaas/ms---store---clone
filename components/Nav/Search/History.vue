<script setup lang="ts">
let router = useRouter();
const removeHistoryItem = (e: Event, id: string) => {
  // e.stopImmediatePropagation()
  // console.log(id);
};

function handleClick(e: Event, text: string) {
  e.stopPropagation();
  router.push(`/search-result?q=${text}`);
}

const { pending, data: history } = await useFetch("/api/search/history", {
  lazy: true,
  server: false,
});
</script>

<template>
  <div v-if="pending" class="w-full text-center py-10">
    <Icon
      name="svg-spinners:ring-resize"
      class="text-primary-dark dark:text-primary-light"
    />
  </div>

  <div v-else>
    <NavSearchDropdownItem
      v-for="item in history"
      :key="item.id"
      @click="handleClick($event, item.text)"
      @remove-item="removeHistoryItem($event, item.id)"
    >
      <template #icon>
        <div class="bg-background-200 px-2 py-1 md:px-4 md:py-3 rounded-lg">
          <Icon
            name="fluent:history-24-filled"
            class="w-5 h-5 text-foreground-body"
          />
        </div>
      </template>

      <template #default> {{ item.text }} </template>
    </NavSearchDropdownItem>
  </div>
</template>
