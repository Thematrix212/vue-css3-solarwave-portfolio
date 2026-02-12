<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { ContactLink } from '../data/portfolio';

const props = defineProps<{
  links: ContactLink[];
}>();

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const sent = ref(false);
let resetTimer: number | null = null;

const submitForm = () => {
  sent.value = true;
  form.name = '';
  form.email = '';
  form.message = '';

  if (resetTimer) {
    window.clearTimeout(resetTimer);
  }

  resetTimer = window.setTimeout(() => {
    sent.value = false;
  }, 2600);
};
</script>

<template>
  <div class="section-inner grid gap-5 min-[980px]:grid-cols-2">
    <div>
      <p class="m-0 font-['IBM_Plex_Mono'] text-[0.75rem] uppercase tracking-[0.1em] text-[var(--orange)]">Contact</p>
      <h2 class="mb-3 mt-2 font-['Syne'] text-[clamp(1.5rem,4vw,2.5rem)]">Let's shape your next digital release</h2>
      <p class="m-0 max-w-[52ch] leading-[1.65] text-[var(--muted)]">
        Tell me about your goals, product stage, and timeline. I can jump in with design-focused frontend delivery.
      </p>

      <ul class="mt-4 grid list-none gap-2 p-0">
        <li
          v-for="link in props.links"
          :key="link.label"
          class="flex items-center justify-between gap-4 rounded-xl border border-[rgba(20,40,66,0.1)] bg-white/65 px-3 py-2.5"
        >
          <span class="font-['IBM_Plex_Mono'] text-[0.74rem] text-[var(--muted)]">{{ link.label }}</span>
          <a :href="link.href" target="_blank" rel="noreferrer noopener" class="text-[0.84rem] font-semibold text-[var(--ink)] no-underline">
            {{ link.value }}
          </a>
        </li>
      </ul>
    </div>

    <form
      class="grid gap-3 rounded-[1.15rem] border border-[rgba(20,40,66,0.12)] bg-white/74 p-4"
      @submit.prevent="submitForm"
    >
      <label class="grid gap-1.5 text-[0.83rem] font-semibold">
        Name
        <input
          v-model="form.name"
          type="text"
          required
          placeholder="Your name"
          class="w-full rounded-xl border border-[rgba(20,40,66,0.15)] bg-white/85 px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[rgba(0,168,150,0.45)] focus:ring-2 focus:ring-[rgba(0,168,150,0.28)]"
        >
      </label>
      <label class="grid gap-1.5 text-[0.83rem] font-semibold">
        Email
        <input
          v-model="form.email"
          type="email"
          required
          placeholder="you@company.com"
          class="w-full rounded-xl border border-[rgba(20,40,66,0.15)] bg-white/85 px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[rgba(0,168,150,0.45)] focus:ring-2 focus:ring-[rgba(0,168,150,0.28)]"
        >
      </label>
      <label class="grid gap-1.5 text-[0.83rem] font-semibold">
        Brief
        <textarea
          v-model="form.message"
          required
          rows="5"
          placeholder="Project scope, timeline, team size..."
          class="w-full rounded-xl border border-[rgba(20,40,66,0.15)] bg-white/85 px-3 py-2.5 text-[var(--ink)] outline-none focus:border-[rgba(0,168,150,0.45)] focus:ring-2 focus:ring-[rgba(0,168,150,0.28)]"
        />
      </label>
      <button
        type="submit"
        class="cursor-pointer rounded-xl bg-[linear-gradient(135deg,var(--blue),var(--teal))] px-4 py-3 text-[0.9rem] font-bold text-white transition-transform hover:-translate-y-0.5"
      >
        <span v-if="!sent">Send brief</span>
        <span v-else>Sent successfully</span>
      </button>
    </form>
  </div>
</template>
