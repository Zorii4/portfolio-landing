<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

defineProps<{
  work: (typeof portfolio)['selectedWork']
}>()
</script>

<template>
  <section id="work" class="selected-work" aria-labelledby="work-title">
    <div class="container">
      <header class="selected-work__heading">
        <p class="selected-work__eyebrow">{{ work.eyebrow }}</p>
        <h2 id="work-title">{{ work.title }}</h2>
        <p>{{ work.description }}</p>
      </header>

      <article
        v-for="project in [work.jobAiAssistant, work.mealMemoryBot]"
        :key="project.id"
        class="project-case"
        :aria-labelledby="`${project.id}-title`"
      >
        <header class="project-case__header">
          <p class="project-case__status">{{ project.status }}</p>
          <h3 :id="`${project.id}-title`">{{ project.title }}</h3>
          <p>{{ project.summary }}</p>
          <a :href="project.url" target="_blank" rel="noopener noreferrer">Открыть GitHub <ArrowUpRightIcon /></a>
        </header>

        <ol class="project-case__steps">
          <li v-for="([title, description], index) in project.steps" :key="title">
            <span>0{{ index + 1 }}</span>
            <h4>{{ title }}</h4>
            <p>{{ description }}</p>
          </li>
        </ol>

        <div class="project-case__media" :aria-label="`Материалы проекта ${project.title}`">
          <MediaPlaceholder :label="project.media.main" :aspect-ratio="project.media.mainRatio" />
          <div class="project-case__media-side">
            <MediaPlaceholder class="project-case__secondary" :label="project.media.secondary" :aspect-ratio="project.media.secondaryRatio" />
            <MediaPlaceholder :label="project.media.diagram" aspect-ratio="4 / 3" />
          </div>
        </div>

        <ul class="project-case__proof" aria-label="Технические составляющие проекта">
          <li v-for="item in project.proof" :key="item">{{ item }}</li>
        </ul>
      </article>

      <ul class="additional-work" aria-label="Другие работы">
        <li v-for="item in work.additional" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <a v-if="item.url" :href="item.url" target="_blank" rel="noopener noreferrer">Открыть <ArrowUpRightIcon /></a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
.selected-work {
  padding-block: clamp(4.5rem, 9vw, 7.5rem);
}

.selected-work__heading {
  max-width: 44rem;
}

.selected-work__eyebrow,
.project-case__status,
.project-case__steps span,
.project-case__proof {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  line-height: 1.45;
}

.selected-work__eyebrow {
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

.selected-work__heading > :last-child {
  max-width: 39rem;
  margin-top: var(--space-5);
  color: var(--neutral-500);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
}

.project-case {
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding: clamp(1.25rem, 4vw, 3rem);
  border-radius: var(--radius-lg);
  background: var(--graphite-950);
  color: var(--neutral-0);
}

.project-case + .project-case {
  margin-top: var(--grid-gap);
}

.additional-work {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding: 0;
  margin: var(--grid-gap) 0 0;
  list-style: none;
}

.additional-work li {
  display: flex;
  min-height: 12rem;
  flex-direction: column;
  padding: var(--space-5);
  border: 1px solid var(--neutral-100);
  border-radius: var(--radius-md);
  background: var(--neutral-0);
}

.additional-work h3 {
  margin: 0;
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  color: var(--graphite-900);
}

.additional-work p {
  margin-top: var(--space-3);
  color: var(--neutral-500);
  font-size: 0.875rem;
  line-height: 1.5;
}

.additional-work a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: auto;
  padding-top: var(--space-5);
  color: var(--cold-700);
  font-size: 0.8125rem;
  font-weight: 600;
  transition: color 200ms ease-out;
}

.additional-work a,
.project-case__header a {
  gap: 0.375rem;
}

.project-case__header {
  max-width: 58rem;
}

.project-case__status,
.project-case__steps span {
  color: var(--cold-300);
  font-weight: 500;
  letter-spacing: 0.045em;
}

h3 {
  margin-top: 0.875rem;
  font-size: 3.25rem;
  font-weight: 700;
  letter-spacing: -0.0625rem;
  line-height: 3.5rem;
}

.project-case__header > p:last-of-type {
  max-width: 58rem;
  margin-top: 0.875rem;
  color: var(--neutral-300);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.875rem;
}

.project-case__header a {
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  margin-top: var(--space-6);
  color: var(--cold-700);
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.00625rem;
  line-height: 1.125rem;
  transition: color 200ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .additional-work a:hover {
    color: var(--cold-500);
  }

  .project-case__header a:hover {
    color: var(--signal-300);
  }
}

.project-case__steps {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--grid-gap);
  padding: 0;
  margin: var(--space-8) 0 0;
  list-style: none;
}

.project-case__steps li {
  min-width: 0;
  padding: var(--space-4);
  border: 1px solid color-mix(in srgb, var(--neutral-0) 14%, transparent);
  border-radius: var(--radius-sm);
  background: var(--graphite-900);
}

h4 {
  margin-top: var(--space-2);
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.0125rem;
  line-height: 1.875rem;
}

.project-case__steps p {
  margin-top: var(--space-3);
  color: var(--neutral-500);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
}

.project-case__media {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
  align-items: start;
  margin-top: var(--space-8);
}

.project-case__media-side {
  display: grid;
  grid-column: span 4;
  gap: var(--grid-gap);
}

.project-case__media > :first-child {
  grid-column: span 8;
}

.project-case__media :deep(.media-placeholder) {
  background: var(--neutral-25);
}

.project-case__proof {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding: 0;
  margin: var(--space-6) 0 0;
  color: var(--neutral-300);
  list-style: none;
}

.project-case__proof li {
  padding: 0.375rem 0.5rem;
  border: 1px solid color-mix(in srgb, var(--neutral-0) 16%, transparent);
  border-radius: var(--radius-pill);
}

@media (max-width: 63.99rem) {
  .project-case__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .additional-work {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 47.99rem) {
  .selected-work {
    padding-block: 4rem;
  }

  .project-case {
    padding: var(--space-5);
    border-radius: var(--radius-md);
  }

  .project-case__steps,
  .project-case__media {
    grid-template-columns: 1fr;
  }

  .project-case__media > :first-child,
  .project-case__media-side {
    grid-column: auto;
  }

  h2 {
    font-size: 2.25rem;
    line-height: 2.375rem;
  }

  .selected-work__heading > :last-child {
    max-width: none;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .project-case h3 {
    font-size: 1.875rem;
    line-height: 2.125rem;
  }

  .project-case__header > p:last-of-type {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .project-case h4 {
    font-size: 1.125rem;
    line-height: 1.375rem;
  }

  .project-case__secondary {
    display: none;
  }
}
</style>
