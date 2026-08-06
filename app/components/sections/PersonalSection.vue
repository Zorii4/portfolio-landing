<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  personal: (typeof portfolio)['personal']
  photoOne: string
  photoTwo: string
}>()
</script>

<template>
  <section id="personal" class="personal" aria-labelledby="personal-title">
    <div class="container">
      <header class="personal__heading">
        <p class="personal__eyebrow">{{ personal.eyebrow }}</p>
        <h2 id="personal-title">{{ personal.title }}</h2>
      </header>

      <div class="personal__content">
        <div class="personal__copy">
          <p>{{ personal.description }}</p>
          <p class="personal__note">{{ personal.note }}</p>
        </div>

        <div class="personal__photos">
          <MediaPlaceholder :label="photoOne" alt="Фотография для личного профессионального блока" aspect-ratio="4 / 5" />
          <MediaPlaceholder :label="photoTwo" alt="Фотография для личного профессионального блока" aspect-ratio="4 / 5" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.personal {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
  background: var(--neutral-25);
}

.personal__heading {
  max-width: 52rem;
}

.personal__eyebrow,
.personal__note {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.045em;
  line-height: 1rem;
}

.personal__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-700);
}

h2 {
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.personal__content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(28rem, 0.9fr);
  gap: clamp(2rem, 7vw, 7.5rem);
  align-items: start;
  margin-top: clamp(2rem, 5vw, 3.5rem);
}

.personal__copy {
  max-width: 37.5rem;
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.personal__note {
  max-width: 32.5rem;
  margin-top: var(--space-6);
  color: var(--neutral-500);
}

.personal__photos {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-4);
}

@media (max-width: 63.99rem) {
  .personal__content {
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.8fr);
    gap: var(--space-8);
  }
}

@media (max-width: 47.99rem) {
  .personal {
    padding-block: 4rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 2.625rem;
  }

  .personal__content {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }

  .personal__copy {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .personal__photos {
    grid-template-columns: 1fr;
  }

  .personal__photos :last-child {
    max-width: calc((100% - var(--space-4)) / 2);
  }
}
</style>
