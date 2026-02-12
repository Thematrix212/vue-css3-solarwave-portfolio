<script setup lang="ts">
import type { PortfolioProject } from '../data/portfolio';

const props = defineProps<{
  projects: PortfolioProject[];
}>();

const onCardMove = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  const rect = card.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const rotateY = (offsetX / rect.width - 0.5) * 10;
  const rotateX = (0.5 - offsetY / rect.height) * 10;

  card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
  card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
};

const resetCard = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement;
  card.style.setProperty('--tilt-x', '0deg');
  card.style.setProperty('--tilt-y', '0deg');
};
</script>

<template>
  <div class="section-inner grid gap-6">
    <div class="grid items-end gap-4 min-[940px]:grid-cols-[1fr_auto]">
      <div>
        <p class="m-0 font-['IBM_Plex_Mono'] text-[0.75rem] uppercase tracking-[0.1em] text-[var(--teal)]">Selected work</p>
        <h2 class="mb-0 mt-2 font-['Syne'] text-[clamp(1.5rem,4vw,2.6rem)]">Portfolio built around product impact</h2>
      </div>
      <p class="m-0 max-w-[42ch] text-[var(--muted)]">
        Different domains, one approach: clean architecture, clear UX, and expressive interactions.
      </p>
    </div>

    <div class="grid gap-4 min-[940px]:grid-cols-2">
      <article
        v-for="project in props.projects"
        :key="project.title"
        class="relative overflow-hidden rounded-[1.2rem] border border-[rgba(20,40,66,0.1)] bg-white/70 p-4 transition-[transform,box-shadow] duration-200 hover:shadow-[0_16px_28px_rgba(20,40,66,0.14)]"
        style="--tilt-x: 0deg; --tilt-y: 0deg; transform: perspective(1000px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));"
        @mousemove="onCardMove"
        @mouseleave="resetCard"
      >
        <div
          class="absolute inset-x-0 top-0 h-1.5"
          :style="{ background: `linear-gradient(130deg, ${project.accentStart}, ${project.accentEnd})` }"
        />

        <header class="mt-1.5 flex items-center justify-between font-['IBM_Plex_Mono'] text-[0.72rem] tracking-[0.04em] text-[var(--muted)]">
          <span>{{ project.type }}</span>
          <strong>{{ project.period }}</strong>
        </header>

        <h3 class="mb-2 mt-3 font-['Syne'] text-[1.18rem]">{{ project.title }}</h3>
        <p class="m-0 text-[0.92rem] leading-[1.6] text-[var(--muted)]">{{ project.summary }}</p>

        <ul class="mb-4 mt-4 flex list-none flex-wrap gap-2 p-0">
          <li v-for="tag in project.stack" :key="tag">{{ tag }}</li>
        </ul>

        <a :href="project.link" class="inline-flex text-[0.84rem] font-semibold text-[var(--blue)] no-underline" aria-label="Open project link">
          Open case
        </a>
      </article>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: 0.72rem;
  font-family: 'IBM Plex Mono', monospace;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(20, 40, 66, 0.12);
  padding: 0.25rem 0.55rem;
}
</style>
