<template>
  <div>
    <NavSearchDropdownItem intent="result">
      <template #icon>
        <div class="bg-background-200 px-4 py-3 rounded-lg">
          <Icon
            name="ph:magnifying-glass"
            class="w-5 h-5 text-foreground-body"
          />
        </div>
      </template>

      <template #default> Google Cloud </template>

      <template #category>app</template>
    </NavSearchDropdownItem>
  </div>
</template>
