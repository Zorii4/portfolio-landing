<script setup lang="ts">
defineProps<{
  structureMode: boolean
}>()

const emit = defineEmits<{
  update: [value: boolean]
}>()
</script>

<template>
  <div class="mode-toggle" aria-label="Режим отображения страницы">
    <button
      class="mode-toggle__button"
      :class="{ 'mode-toggle__button--active': !structureMode }"
      type="button"
      :aria-pressed="!structureMode"
      @click="emit('update', false)"
    >
      Поверхность
    </button>
    <button
      class="mode-toggle__button"
      :class="{ 'mode-toggle__button--active': structureMode }"
      type="button"
      :aria-pressed="structureMode"
      @click="emit('update', true)"
    >
      Структура
    </button>
  </div>
</template>

<style scoped lang="scss">
.mode-toggle {
  display: inline-flex;
  min-height: 2.25rem;
  padding: 0.25rem;
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-pill);
  background: var(--neutral-0);
}

.mode-toggle__button {
  min-height: 1.75rem;
  padding: 0.1875rem 0.625rem;
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--neutral-500);
  cursor: pointer;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  line-height: 1;
  transition: background-color 200ms ease-out, color 200ms ease-out;
}

.mode-toggle__button--active {
  background: var(--graphite-950);
  color: var(--neutral-0);
}

@media (max-width: 47.99rem) {
  .mode-toggle__button {
    padding-inline: 0.375rem;
    font-size: 0.5625rem;
  }
}
</style>
