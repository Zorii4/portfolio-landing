<script setup lang="ts">
import type { portfolio } from '~/data/portfolio'

const props = defineProps<{
  contacts: (typeof portfolio)['contacts']
  links: (typeof portfolio)['links']
}>()

const contactHref = (key: (typeof props.contacts.items)[number][2]) => props.links[key]
</script>

<template>
  <footer id="contacts" class="contacts" aria-labelledby="contacts-title">
    <div class="container">
      <header class="contacts__heading">
        <p class="contacts__eyebrow">{{ contacts.eyebrow }}</p>
        <h2 id="contacts-title">{{ contacts.title }}</h2>
        <p>{{ contacts.description }}</p>
      </header>

      <div class="contacts__actions">
        <a class="contacts__primary-action" :href="links.telegram" target="_blank" rel="noopener noreferrer">
          {{ contacts.actionLabel }}
        </a>
        <div class="contacts__links">
        <a
          v-for="([label, detail, key]) in contacts.items"
          :key="key"
          class="contacts__link"
          :href="contactHref(key)"
          :target="key === 'email' ? undefined : '_blank'"
          :rel="key === 'email' ? undefined : 'noopener noreferrer'"
        >
          <span class="contacts__link-label">
            {{ label }}
            <i aria-hidden="true">↗</i>
          </span>
          <small>{{ detail }}</small>
        </a>
        </div>
        <button class="contacts__resume" type="button" disabled aria-disabled="true">
          {{ contacts.resumeLabel }}
        </button>
      </div>

      <p class="contacts__footer">{{ contacts.footer }}</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.contacts {
  padding-block: clamp(5rem, 10vw, 8rem) var(--space-8);
  background: var(--graphite-950);
  color: var(--neutral-0);
}

.contacts__heading {
  max-width: 62.5rem;
}

.contacts__eyebrow,
.contacts__footer {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.045em;
  line-height: 1rem;
}

.contacts__eyebrow {
  margin-bottom: var(--space-6);
  color: var(--cold-300);
}

h2 {
  max-width: 58rem;
  font-size: clamp(2.75rem, 5vw, 4.25rem);
  font-weight: 700;
  letter-spacing: -0.075rem;
  line-height: 1;
}

.contacts__heading > :last-child {
  max-width: 50rem;
  margin-top: var(--space-5);
  color: var(--neutral-300);
  font-size: 1.25rem;
  line-height: 1.875rem;
}

.contacts__actions {
  margin-top: var(--space-6);
}

.contacts__primary-action,
.contacts__link,
.contacts__resume {
  min-height: 4.25rem;
  border-radius: var(--radius-md);
  font: inherit;
}

.contacts__primary-action {
  display: inline-flex;
  min-height: 3.25rem;
  align-items: center;
  justify-content: center;
  padding: var(--space-3) var(--space-5);
  border-radius: var(--radius-pill);
  background: var(--signal-500);
  color: var(--graphite-950);
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  transition: background-color 200ms ease-out, transform 200ms ease-out;
}

.contacts__links {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-8);
}

.contacts__link,
.contacts__resume {
  display: flex;
  min-width: 0;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-4);
  border: 1px solid color-mix(in srgb, var(--neutral-0) 17%, transparent);
  background: transparent;
  color: var(--neutral-0);
  text-align: left;
  transition: border-color 200ms ease-out, background-color 200ms ease-out;
}

@media (hover: hover) and (pointer: fine) {
  .contacts__primary-action:hover {
    background: var(--signal-300);
    transform: translateY(-2px);
  }

  .contacts__link:hover {
    border-color: var(--cold-300);
    background: color-mix(in srgb, var(--cold-500) 16%, transparent);
  }
}

.contacts__link-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
}

.contacts__link-label i {
  flex: 0 0 auto;
  color: var(--cold-500);
  font-size: 0.875rem;
  font-style: normal;
}

.contacts__link small {
  overflow: hidden;
  margin-top: var(--space-1);
  color: var(--neutral-300);
  font-family: var(--font-mono);
  font-size: 0.5625rem;
  line-height: 0.875rem;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contacts__resume {
  min-height: auto;
  padding: var(--space-4) 0 0;
  border-width: 1px 0 0;
  border-radius: 0;
  color: var(--neutral-500);
  cursor: not-allowed;
  font-size: 0.75rem;
}

.contacts__footer {
  padding-top: var(--space-8);
  margin-top: clamp(4rem, 10vw, 8rem);
  border-top: 1px solid color-mix(in srgb, var(--neutral-0) 16%, transparent);
  color: var(--neutral-500);
}

@media (max-width: 63.99rem) {
  .contacts__links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 47.99rem) {
  .contacts {
    padding-block: 5rem var(--space-6);
  }

  h2 {
    font-size: 2.75rem;
    line-height: 2.875rem;
  }

  .contacts__heading > :last-child {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .contacts__links {
    grid-template-columns: 1fr;
  }

  .contacts__primary-action {
    min-height: 3.25rem;
    width: 100%;
  }

  .contacts__link {
    min-height: 3.25rem;
  }
}
</style>
