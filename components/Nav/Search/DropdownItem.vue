<script setup lang="ts">
defineProps<{ intent?: "result" | undefined }>();

const emit = defineEmits(["removeItem"]);

const removeItem = (e: Event) => {
  emit("removeItem", e);
};
</script>

<template>
  <div
    class="relative w-full flex justify-between items-center p-2 hover:bg-background-50 group rounded-lg cursor-default"
  >
    <div class="flex gap-x-3 items-center">
      <div>
        <slot name="icon" />
      </div>

      <div class="text-foreground-display">
        <h5 class="clamp-text"><slot /></h5>
        <p class="text-foreground-body text-sm">
          <slot name="category"></slot>
        </p>
      </div>
    </div>

    <Button
      v-if="!intent"
      intent="ghost"
      @click="removeItem"
      size="sm"
      customClass="bg-background-50 invisible group-hover:visible hover:bg-background-100 cursor-pointer"
    >
      <Icon name="ion:close" />
    </Button>
  </div>
</template>
