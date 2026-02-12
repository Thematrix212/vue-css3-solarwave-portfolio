<script setup lang="ts">
import { ref } from 'vue';
import type { NavLink } from '../data/portfolio';

const props = defineProps<{
  links: NavLink[];
  activeSection: string;
  scrolled: boolean;
  progress: number;
}>();

const mobileOpen = ref(false);

const closeMenu = () => {
  mobileOpen.value = false;
};
</script>

<template>
  <header
    class="sticky top-0 z-40 backdrop-blur-sm transition-[background-color,box-shadow] duration-300"
    :class="props.scrolled ? 'bg-[rgba(243,239,231,0.76)] shadow-[0_10px_30px_rgba(20,40,66,0.08)]' : ''"
  >
    <div
      class="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-[var(--teal)] to-[var(--orange)]"
      :style="{ transform: `scaleX(${props.progress})` }"
    />

    <div class="mx-auto flex max-w-[1120px] items-center gap-4 px-[clamp(1rem,4vw,2.75rem)] py-3.5">
      <a href="#home" class="inline-flex items-center gap-2.5 no-underline text-[var(--ink)]" @click="closeMenu">
        <span
          class="grid h-9 w-9 place-items-center rounded-[0.9rem] bg-[linear-gradient(140deg,var(--teal),var(--orange))] text-[0.72rem] font-bold tracking-[0.08em] text-white"
        >
          SW
        </span>
        <span class="inline-flex flex-col leading-none">
          <strong class="font-['Syne'] text-[0.92rem]">CodeSculptor</strong>
          <small class="mt-0.5 text-[0.7rem] uppercase tracking-[0.08em] text-[var(--muted)]">Vue Portfolio</small>
        </span>
      </a>

      <nav class="ml-auto flex gap-1 max-[900px]:hidden" aria-label="Main navigation">
        <a
          v-for="link in props.links"
          :key="link.id"
          :href="`#${link.id}`"
          class="rounded-full px-3.5 py-2 text-[0.86rem] font-medium text-[var(--muted)] transition-colors hover:bg-white/55 hover:text-[var(--ink)]"
          :class="
            props.activeSection === link.id
              ? 'bg-white/75 text-[var(--ink)] shadow-[inset_0_0_0_1px_rgba(20,40,66,0.08)]'
              : ''
          "
        >
          {{ link.label }}
        </a>
      </nav>

      <a
        href="#contact"
        class="ml-3 rounded-[0.85rem] bg-[linear-gradient(135deg,var(--blue),var(--teal))] px-4 py-2.5 text-[0.82rem] font-semibold text-white no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(35,100,170,0.2)] max-[900px]:hidden"
      >
        Book a call
      </a>

      <button
        class="ml-auto hidden h-10 w-10 flex-col items-center justify-center gap-[0.27rem] rounded-[0.8rem] border-0 bg-white/65 p-0 max-[900px]:inline-flex"
        type="button"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="h-[2px] w-[1.15rem] rounded bg-[var(--ink)]" />
        <span class="h-[2px] w-[1.15rem] rounded bg-[var(--ink)]" />
        <span class="h-[2px] w-[1.15rem] rounded bg-[var(--ink)]" />
      </button>
    </div>

    <nav
      id="mobile-nav"
      class="mx-[clamp(1rem,4vw,2.75rem)] mb-3.5 flex max-h-0 flex-col gap-1 overflow-hidden rounded-2xl bg-white/88 opacity-0 backdrop-blur-sm transition-[max-height,opacity,padding] duration-300"
      :class="mobileOpen ? 'max-h-80 p-3 opacity-100' : ''"
      aria-label="Mobile navigation"
    >
      <a
        v-for="link in props.links"
        :key="link.id"
        :href="`#${link.id}`"
        class="rounded-xl px-3 py-2.5 text-[0.9rem] text-[var(--ink)] no-underline"
        :class="props.activeSection === link.id ? 'bg-[rgba(0,168,150,0.12)]' : ''"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
      <a
        href="#contact"
        class="mt-1 rounded-xl bg-[linear-gradient(135deg,var(--blue),var(--teal))] px-3 py-2.5 text-center text-[0.9rem] font-semibold text-white no-underline"
        @click="closeMenu"
      >
        Book a call
      </a>
    </nav>
  </header>
</template>
