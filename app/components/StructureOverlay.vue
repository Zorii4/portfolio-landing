<script setup lang="ts">
const overlay = ref<HTMLElement | null>(null)

let resizeObserver: ResizeObserver | undefined

const updateMarkers = () => {
  const header = document.querySelector<HTMLElement>('.app-header')
  const hero = document.querySelector<HTMLElement>('#profile')
  const capabilities = document.querySelector<HTMLElement>('.capabilities')
  const work = document.querySelector<HTMLElement>('#work')
  const impact = document.querySelector<HTMLElement>('#impact')
  const experience = document.querySelector<HTMLElement>('#experience')
  const approach = document.querySelector<HTMLElement>('#approach')
  const personal = document.querySelector<HTMLElement>('#personal')
  const contacts = document.querySelector<HTMLElement>('#contacts')

  if (!overlay.value || !header || !hero || !capabilities || !work || !impact || !experience || !approach || !personal || !contacts) return

  const heroRect = hero.getBoundingClientRect()
  const capabilitiesRect = capabilities.getBoundingClientRect()
  const workRect = work.getBoundingClientRect()
  const impactRect = impact.getBoundingClientRect()
  const experienceRect = experience.getBoundingClientRect()
  const approachRect = approach.getBoundingClientRect()
  const personalRect = personal.getBoundingClientRect()
  const contactsRect = contacts.getBoundingClientRect()
  overlay.value.style.setProperty('--header-boundary', `${header.offsetHeight}px`)
  overlay.value.style.setProperty('--hero-boundary', `${heroRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--hero-label-position', `${heroRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--capabilities-boundary', `${capabilitiesRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--capabilities-label-position', `${capabilitiesRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--work-boundary', `${workRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--work-label-position', `${workRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--impact-boundary', `${impactRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--impact-label-position', `${impactRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--experience-boundary', `${experienceRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--experience-label-position', `${experienceRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--approach-boundary', `${approachRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--approach-label-position', `${approachRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--personal-boundary', `${personalRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--personal-label-position', `${personalRect.top + window.scrollY + 16}px`)
  overlay.value.style.setProperty('--contacts-boundary', `${contactsRect.bottom + window.scrollY}px`)
  overlay.value.style.setProperty('--contacts-label-position', `${contactsRect.top + window.scrollY + 16}px`)
}

onMounted(() => {
  const header = document.querySelector<HTMLElement>('.app-header')
  const hero = document.querySelector<HTMLElement>('#profile')
  const capabilities = document.querySelector<HTMLElement>('.capabilities')
  const work = document.querySelector<HTMLElement>('#work')
  const impact = document.querySelector<HTMLElement>('#impact')
  const experience = document.querySelector<HTMLElement>('#experience')
  const approach = document.querySelector<HTMLElement>('#approach')
  const personal = document.querySelector<HTMLElement>('#personal')
  const contacts = document.querySelector<HTMLElement>('#contacts')

  updateMarkers()
  resizeObserver = new ResizeObserver(updateMarkers)
  if (header) resizeObserver.observe(header)
  if (hero) resizeObserver.observe(hero)
  if (capabilities) resizeObserver.observe(capabilities)
  if (work) resizeObserver.observe(work)
  if (impact) resizeObserver.observe(impact)
  if (experience) resizeObserver.observe(experience)
  if (approach) resizeObserver.observe(approach)
  if (personal) resizeObserver.observe(personal)
  if (contacts) resizeObserver.observe(contacts)
  window.addEventListener('resize', updateMarkers)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  window.removeEventListener('resize', updateMarkers)
})
</script>

<template>
  <div ref="overlay" class="structure-overlay" aria-hidden="true">
    <div class="structure-overlay__grid container">
      <span v-for="column in 12" :key="column" class="structure-overlay__column" />
    </div>

    <span class="structure-overlay__boundary structure-overlay__boundary--header" />
    <span class="structure-overlay__boundary structure-overlay__boundary--hero" />
    <span class="structure-overlay__boundary structure-overlay__boundary--capabilities" />
    <span class="structure-overlay__boundary structure-overlay__boundary--work" />
    <span class="structure-overlay__boundary structure-overlay__boundary--impact" />
    <span class="structure-overlay__boundary structure-overlay__boundary--experience" />
    <span class="structure-overlay__boundary structure-overlay__boundary--approach" />
    <span class="structure-overlay__boundary structure-overlay__boundary--personal" />
    <span class="structure-overlay__boundary structure-overlay__boundary--contacts" />

    <span class="structure-overlay__label structure-overlay__label--header">header.sticky</span>
    <span class="structure-overlay__label structure-overlay__label--hero">hero.title</span>
    <span class="structure-overlay__label structure-overlay__label--capabilities">capability.card</span>
    <span class="structure-overlay__label structure-overlay__label--work">project.preview</span>
    <span class="structure-overlay__label structure-overlay__label--impact">impact.component-map</span>
    <span class="structure-overlay__label structure-overlay__label--experience">experience.item</span>
    <span class="structure-overlay__label structure-overlay__label--approach">approach.step</span>
    <span class="structure-overlay__label structure-overlay__label--personal">personal.content</span>
    <span class="structure-overlay__label structure-overlay__label--contacts">contact.action</span>
  </div>
</template>

<style scoped lang="scss">
.structure-overlay {
  position: absolute;
  z-index: 20;
  inset: 0;
  pointer-events: none;
  --header-boundary: 4.5rem;
  --hero-boundary: 52rem;
  --hero-label-position: 6rem;
  --capabilities-boundary: 96rem;
  --capabilities-label-position: 58rem;
  --work-boundary: 160rem;
  --work-label-position: 102rem;
  --impact-boundary: 215rem;
  --impact-label-position: 166rem;
  --experience-boundary: 270rem;
  --experience-label-position: 221rem;
  --approach-boundary: 325rem;
  --approach-label-position: 276rem;
  --personal-boundary: 380rem;
  --personal-label-position: 330rem;
  --contacts-boundary: 440rem;
  --contacts-label-position: 385rem;
}

.structure-overlay__grid {
  display: grid;
  position: sticky;
  top: 0;
  height: 100dvh;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: var(--grid-gap);
}

.structure-overlay__column {
  border-inline: 1px solid color-mix(in srgb, var(--cold-500) 26%, transparent);
  background: color-mix(in srgb, var(--cold-300) 11%, transparent);
}

.structure-overlay__boundary {
  position: absolute;
  right: 0;
  left: 0;
  height: 1px;
  background: color-mix(in srgb, var(--cold-500) 52%, transparent);
}

.structure-overlay__boundary--header {
  position: fixed;
  top: var(--header-boundary);
}

.structure-overlay__boundary--hero {
  top: var(--hero-boundary);
}

.structure-overlay__boundary--capabilities {
  top: var(--capabilities-boundary);
}

.structure-overlay__boundary--work {
  top: var(--work-boundary);
}

.structure-overlay__boundary--impact {
  top: var(--impact-boundary);
}

.structure-overlay__boundary--experience {
  top: var(--experience-boundary);
}

.structure-overlay__boundary--approach {
  top: var(--approach-boundary);
}

.structure-overlay__boundary--personal {
  top: var(--personal-boundary);
}

.structure-overlay__boundary--contacts {
  top: var(--contacts-boundary);
}

.structure-overlay__label {
  position: absolute;
  z-index: 1;
  padding: 0.25rem 0.375rem;
  border: 1px solid color-mix(in srgb, var(--cold-500) 46%, transparent);
  border-radius: 0.25rem;
  background: color-mix(in srgb, var(--neutral-25) 90%, transparent);
  color: var(--cold-700);
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  line-height: 1.2;
}

.structure-overlay__label--header {
  position: fixed;
  top: 0.625rem;
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--hero {
  top: var(--hero-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--capabilities {
  top: var(--capabilities-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--work {
  top: var(--work-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--impact {
  top: var(--impact-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--experience {
  top: var(--experience-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--approach {
  top: var(--approach-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--personal {
  top: var(--personal-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

.structure-overlay__label--contacts {
  top: var(--contacts-label-position);
  left: max(var(--page-gutter), calc((100% - var(--container-max)) / 2));
}

@media (max-width: 47.99rem) {
  .structure-overlay__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .structure-overlay__grid :nth-child(n + 5) {
    display: none;
  }

}
</style>
