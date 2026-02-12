<script setup lang="ts">
import type { ExperienceItem } from '../data/portfolio';

const props = defineProps<{
  items: ExperienceItem[];
}>();
</script>

<template>
  <div class="section-inner">
    <p class="m-0 font-['IBM_Plex_Mono'] text-[0.75rem] uppercase tracking-[0.1em] text-[var(--blue)]">Experience</p>
    <h2 class="mb-6 mt-2 font-['Syne'] text-[clamp(1.5rem,4vw,2.5rem)]">Journey through product and interface teams</h2>

    <div class="relative grid gap-3">
      <div
        class="pointer-events-none absolute bottom-2 top-2 left-[0.55rem] w-0.5 bg-[linear-gradient(to_bottom,var(--teal),var(--orange))] min-[640px]:left-[0.85rem]"
      />

      <article
        v-for="item in props.items"
        :key="`${item.company}-${item.period}`"
        class="relative ml-[1.8rem] rounded-2xl border border-[rgba(20,40,66,0.1)] bg-white/70 p-4 min-[640px]:ml-[2.35rem]"
      >
        <span
          class="absolute top-[1.1rem] -left-[1.35rem] h-3.5 w-3.5 rounded-full bg-[linear-gradient(130deg,var(--teal),var(--orange))] min-[640px]:-left-[1.73rem]"
        />

        <header class="flex justify-between gap-4">
          <strong class="font-['Syne'] text-base">{{ item.role }}</strong>
          <span class="font-['IBM_Plex_Mono'] text-[0.74rem] text-[var(--muted)]">{{ item.period }}</span>
        </header>
        <p class="mb-3 mt-1 text-[0.86rem] text-[var(--blue)]">{{ item.company }}</p>

        <ul class="m-0 grid gap-1.5 pl-4 text-[0.9rem] leading-[1.55] text-[var(--muted)]">
          <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </article>
    </div>
  </div>
</template>
