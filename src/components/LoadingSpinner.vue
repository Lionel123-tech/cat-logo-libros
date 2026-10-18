<script setup>
defineProps({
  message: { type: String, default: 'Cargando...' }
})
</script>

<template>
  <div class="loading">
    <div class="loading__spinner"></div>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped>
.loading { display: flex; flex-direction: column; align-items: center; gap: 1rem; padding: 3rem; color: #666; }
.loading__spinner { width: 40px; height: 40px; border: 4px solid #e0e0e5; border-top-color: #1a1a2e; border-radius: 50%; animation: spin 0.8s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
</style>