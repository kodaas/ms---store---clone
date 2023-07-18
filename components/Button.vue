<script setup lang="ts">
import { VariantProps, cva } from "class-variance-authority";
const cn = useCn();
const nuxtLink = resolveComponent("NuxtLink");

const buttonVariants = cva(
  "rounded-md flex items-center justify-center gap-x-3",
  {
    variants: {
      intent: {
        default:
          "bg-primary text-neutral-800 hover:bg-primary-hover active:bg-primary-dark",
        outline:
          "border-2 border-background-100 bg-background-200 hover:bg-background-100 active:bg-background-200",
        ghost: "hover:bg-background-100 active:bg-background-200",
        link: "",
      },
      size: {
        default: "px-8 py-2",
        sm: "py-2 px-3",
        lg: "py-3 px-14",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

interface IProps {
  intent?: ButtonProps["intent"];
  size?: ButtonProps["size"];
  href?: string | undefined;
  customClass?: string | object;
}

withDefaults(defineProps<IProps>(), {
  intent: "default",
  size: "default",
  href: undefined,
});
</script>

<template>
  <component
    :is="href ? nuxtLink : 'button'"
    :to="href"
    :class="
      cn(
        buttonVariants({ intent, size }),
        { 'p-0 inline-block': intent === 'link' },
        customClass
      )
    "
  >
    <slot />
  </component>
</template>
