<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <main class="main">
      <RouterView />
    </main>
    <footer class="footer">
      <p>Catálogo de Libros · Web Dinàmica 2026</p>
    </footer>
  </div>
</template>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  background: #f5f5f7;
  color: #1a1a2e;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.footer {
  text-align: center;
  padding: 1.5rem;
  color: #666;
  font-size: 0.85rem;
  border-top: 1px solid #e0e0e5;
  background: #fff;
}
</style>