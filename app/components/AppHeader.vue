<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  person: (typeof portfolio)['person']
  structureMode: boolean
}>()

const emit = defineEmits<{
  updateMode: [value: boolean]
}>()

const navigation = [
  { label: 'Профиль', href: '#profile' },
  { label: 'Работа', href: '#work' },
  { label: 'Опыт', href: '#experience' },
  { label: 'Подход', href: '#approach' },
  { label: 'Контакты', href: '#contacts' },
]
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <a class="app-header__brand" href="#profile" aria-label="К началу портфолио">
        <span class="app-header__monogram" aria-hidden="true">AZ</span>
        <span class="app-header__name">{{ person.name }} · {{ person.role }}</span>
      </a>

      <nav class="app-header__nav" aria-label="Основная навигация">
        <a v-for="item in navigation" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <SurfaceStructureToggle
        :structure-mode="structureMode"
        @update="emit('updateMode', $event)"
      />
      <button class="app-header__resume" type="button" disabled aria-disabled="true">
        Резюме ↗
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  position: sticky;
  z-index: 10;
  top: 0;
  border-bottom: 1px solid color-mix(in srgb, var(--neutral-100) 76%, transparent);
  background: color-mix(in srgb, var(--neutral-25) 92%, transparent);
  backdrop-filter: blur(12px);
}

.app-header__brand {
  display: flex;
  align-items: center;
}

.app-header__inner {
  display: flex;
  min-height: 4.5rem;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-inline: 2.5rem;
}

.app-header__brand {
  flex: 0 0 auto;
  gap: 0.75rem;
}

.app-header__monogram {
  display: grid;
  width: 2.25rem;
  height: 2.25rem;
  place-items: center;
  border-radius: var(--radius-sm);
  background: var(--graphite-950);
  color: var(--neutral-0);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.0125em;
}

.app-header__name,
.app-header__nav a,
.app-header__resume {
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  line-height: 1.333;
}

.app-header__nav {
  display: flex;
  color: var(--graphite-950);
}

.app-header__nav a {
  display: inline-flex;
  min-height: 2.125rem;
  align-items: center;
  padding-inline: 0.625rem;
  border-radius: var(--radius-pill);
  transition: color 200ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .app-header__nav a:hover {
    color: var(--graphite-950);
  }
}

.app-header__resume {
  padding: 0;
  border: 0;
  background: transparent;
  color: var(--neutral-300);
}

@media (max-width: 63.99rem) {
  .app-header__nav,
  .app-header__resume,
  .app-header__name {
    display: none;
  }

  .app-header__inner {
    min-height: 4rem;
    padding-inline: 1.25rem;
  }
}
</style>
