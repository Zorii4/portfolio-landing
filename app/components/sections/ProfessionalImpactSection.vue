<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

const accentPositions = [2, 3, 1, 4, 2, 3] as const

defineProps<{
  impact: (typeof portfolio)['impact']
}>()
</script>

<template>
  <section id="impact" class="professional-impact" aria-labelledby="impact-title">
    <div class="container">
      <header class="professional-impact__heading">
        <p class="professional-impact__eyebrow">{{ impact.eyebrow }}</p>
        <h2 id="impact-title">{{ impact.title }}</h2>
        <p>{{ impact.description }}</p>
      </header>

      <ul class="impact-grid">
        <li v-for="([title, meta], index) in impact.items" :key="title" class="impact-card">
          <h3>{{ title }}</h3>
          <p>{{ meta }}</p>
          <div class="impact-card__fragment" aria-hidden="true">
            <span
              v-for="bar in 4"
              :key="bar"
              :class="{ 'impact-card__bar--signal': bar === accentPositions[index] }"
              :style="{ '--bar-index': index }"
            />
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.professional-impact {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
  background: var(--graphite-950);
  color: var(--neutral-0);
}

.professional-impact__heading {
  max-width: 65rem;
}

.professional-impact__eyebrow,
.impact-card p {
  font-family: var(--font-mono);
}

.professional-impact__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-300);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.045em;
  line-height: 1rem;
}

h2 {
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.professional-impact__heading > :last-child {
  max-width: 47.5rem;
  margin-top: var(--space-5);
  color: var(--neutral-300);
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding: 0;
  margin: clamp(2rem, 5vw, 3.5rem) 0 0;
  list-style: none;
}

.impact-card {
  min-width: 0;
  padding: var(--space-6);
  border: 1px solid color-mix(in srgb, var(--neutral-0) 14%, transparent);
  border-radius: var(--radius-md);
  background: var(--graphite-900);
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
  line-height: 1.875rem;
}

.impact-card p {
  min-height: 2.5rem;
  margin-top: var(--space-3);
  color: var(--cold-300);
  font-size: 0.625rem;
  letter-spacing: 0.02em;
  line-height: 0.875rem;
}

.impact-card__fragment {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-height: 5.75rem;
  margin-top: var(--space-6);
  padding: 0.875rem;
  border: 1px solid color-mix(in srgb, var(--neutral-0) 12%, transparent);
  border-radius: var(--radius-sm);
  background: var(--graphite-950);
}

.impact-card__fragment span {
  display: block;
  width: calc(1.75rem + (var(--bar-index) * 0.2rem));
  height: 0.375rem;
  border-radius: var(--radius-pill);
  background: var(--graphite-700);
}

.impact-card__fragment span:nth-child(2) {
  width: calc(4.25rem - (var(--bar-index) * 0.15rem));
}

.impact-card__fragment span:nth-child(3) {
  flex: 1;
}

.impact-card__fragment span:nth-child(4) {
  width: calc(2.25rem + (var(--bar-index) * 0.25rem));
}

.impact-card__fragment .impact-card__bar--signal {
  background: var(--signal-500);
}

@media (max-width: 63.99rem) {
  .impact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 47.99rem) {
  .professional-impact {
    padding-block: 4rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 2.625rem;
  }

  .professional-impact__heading > :last-child {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
