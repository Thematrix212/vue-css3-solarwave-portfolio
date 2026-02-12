<script setup lang="ts">
defineProps<{
  year: number;
}>();
</script>

<template>
  <footer class="px-[clamp(1rem,4vw,2.5rem)] pb-8 pt-6">
    <div
      class="section-inner flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-[0.8rem] text-[var(--muted)] max-[700px]:justify-center max-[700px]:text-center"
    >
      <p>(c) {{ year }} CodeSculptor</p>
      <p>Built with Vue 3, TypeScript, and handcrafted CSS motion.</p>
      <a href="#home" class="font-semibold text-[var(--blue)] no-underline">Back to top</a>
    </div>
  </footer>
</template>
