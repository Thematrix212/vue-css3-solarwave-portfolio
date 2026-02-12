<script setup lang="ts">
import type { BrandProfile, HeroStat } from '../data/portfolio';

const props = defineProps<{
  brand: BrandProfile;
  role: string;
  stats: HeroStat[];
}>();
</script>

<template>
  <div class="section-inner grid items-center gap-[clamp(1.5rem,4vw,3rem)] min-[940px]:grid-cols-[1.15fr_0.85fr]">
    <div>
      <p
        class="mb-3 inline-block rounded-full bg-[rgba(0,168,150,0.1)] px-3 py-1.5 font-['IBM_Plex_Mono'] text-[0.72rem] uppercase tracking-[0.08em] text-[var(--teal)]"
      >
        Digital portfolio . Vue edition
      </p>
      <h1 class="m-0 font-['Syne'] text-[clamp(2rem,6vw,4.4rem)] leading-[1.02] tracking-[-0.025em] text-[var(--ink)]">
        {{ props.brand.name }}
        <span
          class="mt-2 block font-['Fraunces'] text-[clamp(1.15rem,2.2vw,1.65rem)] font-medium text-[var(--muted)]"
        >
          Crafting dynamic web experiences.
        </span>
      </h1>

      <div class="mt-4 flex items-center gap-3" aria-live="polite">
        <span class="text-[0.82rem] uppercase tracking-[0.11em] text-[var(--muted)]">Current focus</span>
        <transition
          mode="out-in"
          enter-active-class="transition duration-300 ease-out"
          leave-active-class="transition duration-300 ease-in"
          enter-from-class="translate-y-2 opacity-0"
          leave-to-class="translate-y-2 opacity-0"
        >
          <strong
            :key="props.role"
            class="inline-flex items-center rounded-full bg-[linear-gradient(125deg,rgba(0,168,150,0.18),rgba(255,127,81,0.2))] px-3 py-2 text-[0.88rem] text-[var(--ink)]"
          >
            {{ props.role }}
          </strong>
        </transition>
      </div>

      <p class="mt-4 max-w-[56ch] text-base leading-[1.72] text-[var(--muted)]">{{ props.brand.tagline }}</p>

      <div class="mt-6 flex flex-wrap gap-3">
        <a
          href="#projects"
          class="rounded-2xl bg-[linear-gradient(135deg,var(--blue),var(--teal))] px-4 py-3 text-[0.9rem] font-semibold text-white no-underline shadow-[0_10px_24px_rgba(35,100,170,0.22)] transition-transform hover:-translate-y-0.5"
        >
          See projects
        </a>
        <a
          href="#contact"
          class="rounded-2xl bg-white/75 px-4 py-3 text-[0.9rem] font-semibold text-[var(--ink)] no-underline shadow-[inset_0_0_0_1px_rgba(20,40,66,0.1)] transition-transform hover:-translate-y-0.5"
        >
          Start conversation
        </a>
      </div>
    </div>

    <aside class="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-[0_16px_32px_rgba(20,40,66,0.1)]">
      <div class="inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.08em] text-[var(--muted)]">
        <span class="h-2 w-2 animate-pulse rounded-full bg-[#08b26d]" />
        <span>Live profile snapshot</span>
      </div>

      <dl class="my-4 grid gap-2.5">
        <div class="flex justify-between gap-4 border-b border-[rgba(20,40,66,0.08)] pb-2.5">
          <dt class="text-[0.82rem] text-[var(--muted)]">Handle</dt>
          <dd class="m-0 text-right text-[0.84rem] font-semibold text-[var(--ink)]">{{ props.brand.handle }}</dd>
        </div>
        <div class="flex justify-between gap-4 border-b border-[rgba(20,40,66,0.08)] pb-2.5">
          <dt class="text-[0.82rem] text-[var(--muted)]">Location</dt>
          <dd class="m-0 text-right text-[0.84rem] font-semibold text-[var(--ink)]">{{ props.brand.location }}</dd>
        </div>
        <div class="flex justify-between gap-4 border-b border-[rgba(20,40,66,0.08)] pb-2.5">
          <dt class="text-[0.82rem] text-[var(--muted)]">Status</dt>
          <dd class="m-0 text-right text-[0.84rem] font-semibold text-[var(--ink)]">{{ props.brand.availability }}</dd>
        </div>
      </dl>

      <div class="grid gap-2">
        <article
          v-for="item in props.stats"
          :key="item.label"
          class="rounded-2xl bg-[rgba(245,245,245,0.78)] px-3 py-2.5"
        >
          <strong class="block font-['Syne'] text-[1.2rem]">{{ item.value }}</strong>
          <span class="text-[0.8rem] text-[var(--muted)]">{{ item.label }}</span>
        </article>
      </div>
    </aside>
  </div>
</template>
