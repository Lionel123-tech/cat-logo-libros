<script setup>
defineProps({
  message: { type: String, required: true }
})
</script>

<template>
  <div class="error">
    <span class="error__icon">⚠️</span>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.error { background: #fdecea; border: 1px solid #f5c2c0; color: #8a1f1b; padding: 1rem 1.25rem; border-radius: 8px; display: flex; align-items: center; gap: 0.75rem; }
.error__icon { font-size: 1.4rem; }
</style>