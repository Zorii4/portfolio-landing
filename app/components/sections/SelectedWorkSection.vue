<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

import type { portfolio } from '~/data/portfolio'

type PreviewMedia = {
  label: string
  src: string
  alt: string
}

defineProps<{
  work: (typeof portfolio)['selectedWork']
}>()

const activeMedia = ref<PreviewMedia | null>(null)
const closeButton = ref<HTMLButtonElement | null>(null)

let previouslyFocusedElement: HTMLElement | null = null
let previousBodyOverflow = ''
let previousBodyPaddingRight = ''
let isBodyScrollLocked = false

function openMedia(item: PreviewMedia, trigger: EventTarget | null) {
  previouslyFocusedElement = trigger instanceof HTMLElement ? trigger : null
  activeMedia.value = item
}

function closeMedia() {
  activeMedia.value = null
}

function lockBodyScroll() {
  if (isBodyScrollLocked) return

  previousBodyOverflow = document.body.style.overflow
  previousBodyPaddingRight = document.body.style.paddingRight

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
  document.body.style.overflow = 'hidden'

  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }

  isBodyScrollLocked = true
}

function unlockBodyScroll() {
  if (!isBodyScrollLocked || typeof document === 'undefined') return

  document.body.style.overflow = previousBodyOverflow
  document.body.style.paddingRight = previousBodyPaddingRight
  isBodyScrollLocked = false
}

function handleModalKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeMedia()
    return
  }

  if (event.key === 'Tab') {
    event.preventDefault()
    closeButton.value?.focus()
  }
}

watch(activeMedia, async (media) => {
  if (typeof document === 'undefined') return

  if (media) {
    lockBodyScroll()
    await nextTick()
    closeButton.value?.focus()
    return
  }

  unlockBodyScroll()
  previouslyFocusedElement?.focus()
  previouslyFocusedElement = null
})

onBeforeUnmount(unlockBodyScroll)
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

        <div
          class="project-case__media"
          :class="`project-case__media--${project.media.layout}`"
          :aria-label="`Материалы проекта ${project.title}`"
        >
          <figure
            v-for="item in project.media.items"
            :key="item.label"
            class="project-case__media-item"
            :class="`project-case__media-item--${item.slot}`"
          >
            <button
              type="button"
              class="project-case__media-button"
              :aria-label="`Открыть изображение: ${item.label}`"
              @click="openMedia(item, $event.currentTarget)"
            >
              <MediaPlaceholder
                :label="item.label"
                :src="item.src"
                :alt="item.alt"
                :aspect-ratio="item.ratio"
                :object-position="item.objectPosition"
              />
            </button>
            <figcaption>{{ item.label }}</figcaption>
          </figure>
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

  <Teleport to="body">
    <div
      v-if="activeMedia"
      class="media-modal"
      role="dialog"
      aria-modal="true"
      :aria-label="activeMedia.label"
      tabindex="-1"
      @click.self="closeMedia"
      @keydown="handleModalKeydown"
    >
      <div class="media-modal__content">
        <img class="media-modal__image" :src="activeMedia.src" :alt="activeMedia.alt">
        <button ref="closeButton" type="button" class="media-modal__close" aria-label="Закрыть просмотр" @click="closeMedia">
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  </Teleport>
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
  grid-template-areas:
    'main main main main main main main main secondary secondary secondary secondary'
    'main main main main main main main main detail detail detail detail';
  gap: var(--grid-gap);
  align-items: start;
  margin-top: var(--space-8);
}

.project-case__media-item {
  min-width: 0;
  margin: 0;
}

.project-case__media-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  border-radius: var(--radius-md);
  background: transparent;
  cursor: zoom-in;
}

.project-case__media-button:focus-visible {
  outline: 2px solid var(--signal-300);
  outline-offset: 0.25rem;
}

.project-case__media-item--main {
  grid-area: main;
}

.project-case__media-item--secondary {
  grid-area: secondary;
}

.project-case__media-item--detail {
  grid-area: detail;
}

.project-case__media--screenshots {
  grid-template-areas: 'main main main main secondary secondary secondary secondary detail detail detail detail';
  align-items: end;
}

.project-case__media :deep(.media-placeholder) {
  background: var(--neutral-25);
}

.project-case__media--screenshots :deep(.media-placeholder--image) {
  border: 1px solid color-mix(in srgb, var(--neutral-0) 14%, transparent);
  border-radius: var(--radius-md);
}

.project-case__media--default :deep(.media-placeholder--image) {
  border: 1px solid color-mix(in srgb, var(--neutral-0) 14%, transparent);
  border-radius: var(--radius-md);
}

.project-case__media figcaption {
  margin-top: var(--space-3);
  color: var(--neutral-300);
  font-family: var(--font-mono);
  font-size: 0.625rem;
  letter-spacing: 0.035em;
  line-height: 1.4;
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

.media-modal {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background: color-mix(in srgb, var(--graphite-950) 84%, transparent);
}

.media-modal__content {
  position: relative;
  display: flex;
  max-width: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
}

.media-modal__image {
  display: block;
  width: auto;
  height: auto;
  max-width: calc(100vw - 3rem);
  max-height: calc(100vh - 3rem);
  border-radius: var(--radius-sm);
  box-shadow: 0 1.5rem 4rem color-mix(in srgb, var(--graphite-950) 55%, transparent);
}

.media-modal__close {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: grid;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 1px solid var(--neutral-100);
  border-radius: 50%;
  background: var(--neutral-0);
  color: var(--graphite-950);
  cursor: pointer;
  font-size: 1.75rem;
  line-height: 1;
  place-items: center;
}

.media-modal__close:focus-visible {
  outline: 2px solid var(--signal-300);
  outline-offset: 0.25rem;
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

  .project-case__media {
    grid-template-areas:
      'main'
      'detail';
  }

  .project-case__media-item--secondary {
    display: none;
  }

  .project-case__media--screenshots {
    grid-template-areas:
      'main'
      'secondary'
      'detail';
  }

  .project-case__media--screenshots .project-case__media-item--secondary {
    display: block;
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

  .media-modal {
    padding: 0.75rem;
  }

  .media-modal__image {
    max-width: calc(100vw - 1.5rem);
    max-height: calc(100vh - 1.5rem);
  }

  .media-modal__close {
    top: 0.5rem;
    right: 0.5rem;
  }

}
</style>
