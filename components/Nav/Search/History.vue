<script setup lang="ts">
const removeHistoryItem = (e: Event) => {};
</script>

<template>
  <div>
    <NavSearchDropdownItem @remove-item="removeHistoryItem">
      <template #icon>
        <div class="bg-background-200 px-4 py-3 rounded-lg">
          <Icon
            name="fluent:history-24-filled"
            class="w-5 h-5 text-foreground-body"
          />
        </div>
      </template>

      <template #default> Whatsapp </template>
    </NavSearchDropdownItem>
  </div>
</template>
