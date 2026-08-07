<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  capabilities: (typeof portfolio)['capabilities']
}>()
</script>

<template>
  <section class="capabilities" aria-labelledby="capabilities-title">
    <div class="container">
      <header class="capabilities__heading">
        <p class="capabilities__eyebrow">{{ capabilities.eyebrow }}</p>
        <h2 id="capabilities-title">{{ capabilities.title }}</h2>
        <p>{{ capabilities.description }}</p>
      </header>

      <ul class="capabilities__grid">
        <li v-for="item in capabilities.items" :key="item.title" class="capability-card" tabindex="0">
          <span class="capability-card__line" aria-hidden="true" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <span class="capability-card__example">{{ item.example }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.capabilities {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
  background: var(--neutral-50);
}

.capabilities__heading {
  max-width: 44rem;
}

.capabilities__eyebrow,
.capability-card__example {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  line-height: 1.45;
}

.capabilities__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-700);
  font-weight: 500;
  letter-spacing: 0.045em;
}

h2 {
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.capabilities__heading > :last-child {
  max-width: 46rem;
  margin-top: var(--space-5);
  color: var(--neutral-500);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
}

.capabilities__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding: 0;
  margin: clamp(2rem, 5vw, 3.5rem) 0 0;
  list-style: none;
}

.capability-card {
  display: flex;
  min-height: 17.5rem;
  flex-direction: column;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-md);
  background: var(--neutral-0);
  transition: background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;
}

.capability-card__line {
  width: 100%;
  height: 2px;
  background: var(--cold-500);
  transition: background-color 200ms ease-out;
}

h3 {
  max-width: 26rem;
  margin-top: var(--space-5);
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: 600;
  letter-spacing: -0.035em;
  line-height: 1.15;
}

.capability-card p {
  max-width: 30rem;
  margin-top: var(--space-3);
  color: var(--neutral-500);
  font-size: 0.9375rem;
  line-height: 1.5;
}

.capability-card__example {
  margin-top: var(--space-6);
  color: var(--cold-700);
}

@media (hover: hover) and (pointer: fine) {
  .capability-card:hover,
  .capability-card:focus-visible {
    border-color: var(--graphite-950);
    background: var(--graphite-950);
    color: var(--neutral-0);
  }

  .capability-card:hover .capability-card__line,
  .capability-card:focus-visible .capability-card__line {
    background: var(--signal-500);
  }

  .capability-card:hover p,
  .capability-card:focus-visible p {
    color: var(--neutral-300);
  }

  .capability-card:hover .capability-card__example,
  .capability-card:focus-visible .capability-card__example {
    color: var(--cold-300);
  }
}

@media (max-width: 47.99rem) {
  .capabilities {
    padding-block: 4rem;
  }

  .capabilities__grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.375rem;
  }

  .capabilities__heading > :last-child {
    max-width: none;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .capability-card {
    min-height: 16rem;
  }
}
</style>
