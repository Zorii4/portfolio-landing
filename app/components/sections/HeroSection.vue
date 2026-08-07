<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  hero: (typeof portfolio)['hero']
  links: (typeof portfolio)['links']
  photoLabel: string
  photoSrc: string
  photoAlt: string
}>()
</script>

<template>
  <section id="profile" class="hero" aria-labelledby="hero-title">
    <div class="container hero__layout">
      <div class="hero__copy">
        <p class="hero__eyebrow">{{ hero.label }}</p>
        <h1 id="hero-title">Сложные интерфейсы.<br>Понятные решения.</h1>
        <p class="hero__description">{{ hero.description }}</p>
        <p class="hero__status"><span aria-hidden="true" />{{ hero.availability }}</p>

        <ul class="hero__facts" aria-label="Кратко об опыте">
          <li v-for="fact in hero.facts" :key="fact">{{ fact }}</li>
        </ul>

        <div class="hero__actions">
          <a class="hero__action hero__action--primary" href="#work">Посмотреть работу <ArrowUpRightIcon /></a>
          <a class="hero__action hero__action--secondary" :href="links.resume" target="_blank" rel="noopener noreferrer">Открыть резюме <ArrowUpRightIcon /></a>
          <a class="hero__github" :href="links.github" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRightIcon /></a>
        </div>
      </div>

      <div class="hero__media">
        <MediaPlaceholder :label="photoLabel" :src="photoSrc" :alt="photoAlt" aspect-ratio="4 / 5" />
        <p v-if="!photoSrc">PHOTO PLACEHOLDER · NATURAL PORTRAIT · 4:5</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding-block: clamp(3.5rem, 9vw, 6.5rem) clamp(5rem, 10vw, 8rem);
}

.hero__layout {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: end;
  gap: var(--grid-gap);
}

.hero__copy {
  grid-column: span 7;
  max-width: 50rem;
}

.hero__eyebrow,
.hero__facts,
.hero__media p {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  line-height: 1.45;
}

.hero__eyebrow {
  margin-bottom: var(--space-5);
  color: var(--cold-700);
}

h1 {
  max-width: 50rem;
  font-size: clamp(3.5rem, 7.3vw, 6.5rem);
  font-weight: 600;
  letter-spacing: -0.055em;
  line-height: 0.93;
}

.hero__description {
  max-width: 42rem;
  margin-top: 1.75rem;
  color: var(--neutral-500);
  font-size: clamp(1rem, 1.4vw, 1.125rem);
  line-height: 1.55;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  margin-top: var(--space-6);
  padding: 0.4375rem 0.625rem;
  border-radius: var(--radius-pill);
  background: var(--signal-300);
  color: var(--graphite-950);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  line-height: 1.2;
}

.hero__status span {
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
  background: var(--signal-500);
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem 1.375rem;
  padding: 0;
  margin: var(--space-6) 0 0;
  color: var(--neutral-500);
  list-style: none;
}

.hero__facts li::before {
  margin-right: 0.375rem;
  color: var(--cold-700);
  content: '•';
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 0.75rem;
  row-gap: 0.5rem;
  margin-top: var(--space-8);
}

.hero__action,
.hero__github {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  border-radius: var(--radius-pill);
  font-size: 0.75rem;
  font-weight: 600;
  transition: background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out;
}

.hero__action {
  gap: 0.5rem;
  padding-inline: 1rem;
  border: 1px solid transparent;
}

.hero__action--primary {
  background: var(--signal-300);
  color: var(--graphite-950);
}

.hero__action--secondary {
  border-color: var(--neutral-100);
  background: var(--neutral-0);
  color: var(--cold-700);
}

.hero__action--secondary:hover {
  border-color: var(--cold-500);
  color: var(--cold-500);
}

.hero__github {
  gap: 0.375rem;
  margin-left: 0;
  padding-inline: 1rem;
  border: 1px solid color-mix(in srgb, var(--cold-500) 42%, var(--neutral-100));
  background: color-mix(in srgb, var(--cold-300) 9%, var(--neutral-0));
  color: var(--cold-700);
}

@media (hover: hover) and (pointer: fine) {
  .hero__action--primary:hover {
    background: var(--signal-500);
  }

  .hero__github:hover {
    border-color: var(--cold-500);
    background: color-mix(in srgb, var(--cold-300) 18%, var(--neutral-0));
    color: var(--cold-500);
  }
}

.hero__media {
  grid-column: 9 / span 3;
  min-width: 0;
}

.hero__media p {
  margin-top: 0.75rem;
  color: var(--neutral-500);
}

.hero__media :deep(.media-placeholder--image) {
  object-position: 60% center;
}

@media (max-width: 47.99rem) {
  .hero {
    padding-block: 3.5rem 5rem;
  }

  .hero__layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.75rem;
  }

  .hero__copy,
  .hero__media {
    grid-column: auto;
  }

  h1 {
    font-size: 3.25rem;
    letter-spacing: -0.065em;
    line-height: 1;
  }

  .hero__description {
    margin-top: 1.25rem;
    font-size: 1rem;
  }

  .hero__status {
    margin-top: var(--space-5);
  }

  .hero__media {
    width: 100%;
    order: 1;
  }

  .hero__actions {
    display: grid;
    grid-template-columns: 1fr;
  }

  .hero__github {
    margin-left: 0;
  }

  .hero__action,
  .hero__github {
    width: 100%;
  }
}
</style>
