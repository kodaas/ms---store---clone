<script setup lang="ts">
defineProps<{ intent?: "result" | undefined }>();

const emit = defineEmits(["removeItem", "click"]);

const removeItem = (e: Event) => {
  e.stopPropagation()
  emit("removeItem", e);
};

function handleClick(e: Event) {
  emit("click", e);
}
</script>

<template>
  <div
    class="relative w-full flex justify-between items-center p-2 hover:bg-background-50 group rounded-lg cursor-default"
  >
    <div class="flex gap-x-3 items-center w-full border-2 border-red-200" @click="handleClick">
      <div class="shrink-0">
        <slot name="icon" />
      </div>

      <div class="text-foreground-display flex-1">
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
      customClass="md:bg-background-50 p-0 md:p-2 visible md:invisible group-hover:visible md:hover:bg-background-100 cursor-pointer shrink-0"
    >
      <Icon name="ion:close" />
    </Button>
  </div>
</template>
