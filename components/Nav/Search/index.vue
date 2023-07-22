<script setup lang="ts">
const form = ref<HTMLInputElement>();
const showDropdown = ref(false);
const searchInput = useSearchInput();
const router = useRouter()
const inputElement: unknown = useSearchInputElement();

function onFocus(e: Event) {
  e.stopPropagation();
  showDropdown.value = true;
  onClickOutside(form, () => (showDropdown.value = false));
}

function handleSearch() {
  router.push(`/search-result?q=${searchInput.value}`)
  clearSearchInput({});
  showDropdown.value = false;
}

onMounted(() => {
  //@ts-ignore
  inputElement.value = form;
});
</script>
<template>
  <form
    class="w-full relative flex"
    @submit.prevent="handleSearch"
    @click="onFocus"
  >
    <input
      ref="form"
      class="w-full px-2 pr-16 h-9 outline-none peer focus:border-primary-dark dark:focus:border-primary-light bg-background-200 text-foreground-body rounded-t-md rounded-b-sm border-b border-background-50"
      type="text"
      v-model="searchInput"
      name="search"
      id="search"
      autocomplete="off"
    />

    <Button
      intent="ghost"
      size="sm"
      v-show="searchInput"
      type="button"
      customClass="absolute right-9 top-[.4rem] py-1 px-1 cursor-pointer"
      @click="clearSearchInput({ focusSearch: true })"
    >
      <Icon name="ion:close" />
    </Button>

    <label
      class="absolute right-3 top-1 peer-focus:text-primary-dark dark:peer-focus:text-primary-light pointer-events-none"
      for="search"
    >
      <Icon name="ph:magnifying-glass" />
    </label>

    <div
      v-show="showDropdown"
      class="absolute mt-10 w-full rounded-md border border-background-50 bg-background-100 z-50 p-2"
    >
      <LazyNavSearchHistory v-if="!searchInput" />

      <LazyNavSearchRecommendation v-else />
    </div>
  </form>
</template>
