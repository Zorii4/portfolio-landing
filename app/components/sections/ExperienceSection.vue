<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  experience: (typeof portfolio)['experience']
}>()
</script>

<template>
  <section id="experience" class="experience" aria-labelledby="experience-title">
    <div class="container">
      <header class="experience__heading">
        <p class="experience__eyebrow">{{ experience.eyebrow }}</p>
        <h2 id="experience-title">{{ experience.title }}</h2>
        <p>{{ experience.description }}</p>
      </header>

      <ol class="experience__timeline">
        <li v-for="item in experience.items" :key="item.period">
          <p class="experience__period">{{ item.period }}</p>
          <div>
            <h3>{{ item.company }}</h3>
            <p>{{ item.contribution }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
}

.experience__heading {
  max-width: 53rem;
}

.experience__eyebrow,
.experience__period {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.045em;
  line-height: 1rem;
}

.experience__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-700);
}

h2 {
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.experience__heading > :last-child {
  max-width: 43rem;
  margin-top: var(--space-5);
  color: var(--neutral-500);
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.experience__timeline {
  padding: 0;
  margin: clamp(2rem, 5vw, 3.5rem) 0 0;
  list-style: none;
}

.experience__timeline li {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding-block: var(--space-5);
  border-top: 1px solid var(--neutral-100);
}

.experience__timeline li:last-child {
  border-bottom: 1px solid var(--neutral-100);
}

.experience__period {
  grid-column: span 3;
  color: var(--cold-700);
}

.experience__timeline li > div {
  grid-column: span 9;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
  line-height: 1.875rem;
}

.experience__timeline h3 + p {
  margin-top: var(--space-2);
  color: var(--neutral-500);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

@media (max-width: 47.99rem) {
  .experience {
    padding-block: 4rem;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.375rem;
  }

  .experience__heading > :last-child {
    max-width: none;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .experience__timeline li {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .experience__period,
  .experience__timeline li > div {
    grid-column: auto;
  }
}
</style>
