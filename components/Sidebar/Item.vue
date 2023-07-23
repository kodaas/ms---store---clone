<script setup lang="ts">
const props = defineProps<{
  route?: string
  isSelected: boolean
}>()

defineSlots<{
  default: (props: { isSelected: boolean }) => boolean,
  icon: (props: { isSelected: boolean }) => boolean,
}>()


</script>

<template>
  <Button :href="props.route" intent="ghost" size="sm"
    :custom-class="props.isSelected ? 'bg-background-100 w-full pb-4 relative flex-col' : 'relative flex-col w-full p-1'">
    <slot :isSelected="props.isSelected" name="icon" />
    <slot :isSelected="props.isSelected" />

    <span v-if="props.isSelected"
      class="absolute left-0 top-[1rem] w-[0.2rem] h-[40%] bg-primary dark:bg-primary-light rounded-lg"></span>
  </Button>
</template>
