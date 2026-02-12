<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  skills: string[];
}>();

const forwardList = computed(() => [...props.skills, ...props.skills]);
const reverseList = computed(() => [...props.skills].reverse().concat([...props.skills].reverse()));
</script>

<template>
  <div class="section-inner grid gap-5">
    <div>
      <p class="m-0 font-['IBM_Plex_Mono'] text-[0.75rem] uppercase tracking-[0.1em] text-[var(--orange)]">Toolkit</p>
      <h2 class="my-2 font-['Syne'] text-[clamp(1.4rem,4vw,2.3rem)]">Stack that ships polished products</h2>
      <p class="m-0 max-w-[70ch] text-[var(--muted)]">
        From architecture to motion details, the workflow keeps design intent and engineering quality aligned.
      </p>
    </div>

    <div
      class="grid gap-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,_#000_8%,_#000_92%,_transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,_#000_8%,_#000_92%,_transparent)]"
      aria-label="Technology stack"
    >
      <ul class="m-0 flex w-max list-none gap-2.5 p-0 motion-safe:animate-[slide-left_22s_linear_infinite]">
        <li v-for="(skill, index) in forwardList" :key="`${skill}-${index}`">{{ skill }}</li>
      </ul>
      <ul class="m-0 flex w-max list-none gap-2.5 p-0 motion-safe:animate-[slide-right_30s_linear_infinite]" aria-hidden="true">
        <li v-for="(skill, index) in reverseList" :key="`${skill}-${index}`">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
li {
  border-radius: 999px;
  border: 1px solid rgba(20, 40, 66, 0.14);
  padding: 0.42rem 0.8rem;
  font-size: 0.82rem;
  background: rgba(255, 255, 255, 0.72);
}
</style>
