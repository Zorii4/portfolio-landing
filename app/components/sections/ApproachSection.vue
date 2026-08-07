<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  approach: (typeof portfolio)['approach']
}>()
</script>

<template>
  <section id="approach" class="approach" aria-labelledby="approach-title">
    <div class="container">
      <header class="approach__heading">
        <p class="approach__eyebrow">{{ approach.eyebrow }}</p>
        <h2 id="approach-title">{{ approach.title }}</h2>
        <p>{{ approach.description }}</p>
      </header>

      <ol class="approach__steps">
        <li v-for="([index, title, description]) in approach.steps" :key="index">
          <p>{{ index }}</p>
          <h3>{{ title }}</h3>
          <span>{{ description }}</span>
        </li>
      </ol>

      <aside class="approach__ai-note" aria-label="Подход к использованию AI-инструментов">
        <p>{{ approach.aiNote.label }}</p>
        <span>{{ approach.aiNote.text }}</span>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
.approach {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
  background: var(--neutral-50);
}

.approach__heading {
  max-width: 52rem;
}

.approach__eyebrow,
.approach__steps p,
.approach__ai-note p {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.045em;
  line-height: 1rem;
}

.approach__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-700);
}

h2 {
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.approach__heading > :last-child {
  max-width: 42rem;
  margin-top: var(--space-5);
  color: var(--neutral-500);
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.approach__steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding: 0;
  margin: clamp(2rem, 5vw, 3.5rem) 0 0;
  list-style: none;
}

.approach__steps li {
  min-height: 13.5rem;
  padding: var(--space-6);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-md);
  background: var(--neutral-0);
}

.approach__steps p {
  color: var(--cold-700);
}

h3 {
  min-height: 3.75rem;
  margin-top: var(--space-5);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
  line-height: 1.875rem;
}

.approach__steps span {
  display: block;
  margin-top: var(--space-3);
  color: var(--neutral-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.approach__ai-note {
  display: grid;
  grid-template-columns: 11rem minmax(0, 1fr);
  gap: var(--space-12);
  margin-top: var(--grid-gap);
  padding: 1.75rem;
  border-radius: var(--radius-md);
  background: var(--graphite-950);
  color: var(--neutral-0);
}

.approach__ai-note p {
  max-width: 11rem;
  color: var(--cold-300);
}

.approach__ai-note span {
  max-width: 52rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
}

@media (max-width: 63.99rem) {
  .approach__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 47.99rem) {
  .approach {
    padding-block: 4rem;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.375rem;
  }

  .approach__heading > :last-child,
  .approach__ai-note span {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .approach__heading > :last-child {
    max-width: none;
  }

  .approach__steps,
  .approach__ai-note {
    grid-template-columns: 1fr;
  }

  .approach__steps li {
    display: grid;
    min-height: 0;
    grid-template-columns: 2rem minmax(0, 1fr);
    column-gap: var(--space-3);
  }

  .approach__steps h3 {
    min-height: 0;
    margin-top: 0;
  }

  .approach__steps span {
    grid-column: 2;
  }
}
</style>
