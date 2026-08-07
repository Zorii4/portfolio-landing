<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue'
import CapabilitiesSection from '~/components/sections/CapabilitiesSection.vue'
import SelectedWorkSection from '~/components/sections/SelectedWorkSection.vue'
import ProfessionalImpactSection from '~/components/sections/ProfessionalImpactSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import ApproachSection from '~/components/sections/ApproachSection.vue'
import PersonalSection from '~/components/sections/PersonalSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'
import { portfolio } from '~/data/portfolio'

const structureMode = ref(false)

useHead({
  htmlAttrs: {
    lang: 'ru',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})

useSeoMeta({
  title: 'Антон Зорин — Frontend Engineer',
  description: 'Frontend Engineer: Vue, Nuxt, TypeScript и сложные продуктовые интерфейсы.',
})
</script>

<template>
  <div class="app-shell" :data-mode="structureMode ? 'structure' : 'surface'">
    <a class="skip-link" href="#main-content">Перейти к основному содержимому</a>
    <AppHeader
      :person="portfolio.person"
      :resume-href="portfolio.links.resume"
      :structure-mode="structureMode"
      @update-mode="structureMode = $event"
    />
    <main id="main-content">
      <HeroSection
        :hero="portfolio.hero"
        :links="portfolio.links"
        :photo-label="portfolio.placeholders.heroPhoto"
        :photo-src="portfolio.placeholders.heroPhotoSrc"
        :photo-alt="portfolio.placeholders.heroPhotoAlt"
      />
      <CapabilitiesSection :capabilities="portfolio.capabilities" />
      <SelectedWorkSection :work="portfolio.selectedWork" />
      <ProfessionalImpactSection :impact="portfolio.impact" />
      <ExperienceSection :experience="portfolio.experience" />
      <ApproachSection :approach="portfolio.approach" />
      <PersonalSection
        :personal="portfolio.personal"
        :photo-one="portfolio.placeholders.personalPhotoOne"
        :photo-two="portfolio.placeholders.personalPhotoTwo"
      />
    </main>
    <ContactSection :contacts="portfolio.contacts" :links="portfolio.links" />
    <StructureOverlay v-if="structureMode" />
  </div>
</template>
