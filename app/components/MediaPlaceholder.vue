<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    alt?: string
    src?: string
    aspectRatio?: string
  }>(),
  {
    alt: '',
    src: '',
    aspectRatio: '4 / 3',
  },
)
</script>

<template>
  <img
    v-if="src"
    class="media-placeholder media-placeholder--image"
    :style="{ aspectRatio }"
    :src="src"
    :alt="alt || ''"
  >
  <div
    v-else
    class="media-placeholder"
    :style="{ aspectRatio }"
    :role="alt ? 'img' : undefined"
    :aria-label="alt || undefined"
  >
    <span class="media-placeholder__label">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.media-placeholder {
  display: grid;
  min-width: 0;
  place-items: center;
  overflow: hidden;
  border: 1px dashed var(--neutral-300);
  border-radius: var(--radius-md);
  background: var(--neutral-50);
  color: var(--neutral-500);
}

.media-placeholder--image {
  width: 100%;
  border: 0;
  object-fit: cover;
}

.media-placeholder__label {
  padding: var(--space-3);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  letter-spacing: 0.04em;
  text-align: center;
}
</style>
