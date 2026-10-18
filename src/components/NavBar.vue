<script setup>
</script>

<template>
  <header class="navbar">
    <div class="navbar__inner">
      <RouterLink to="/" class="navbar__logo">Catálogo de Libros</RouterLink>
      <nav class="navbar__links">
        <RouterLink to="/" class="navbar__link">Inicio</RouterLink>
        <RouterLink to="/cataleg" class="navbar__link">Catálogo</RouterLink>
        <RouterLink to="/sobre" class="navbar__link">Sobre</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar { background: #fff; border-bottom: 1px solid #e0e0e5; position: sticky; top: 0; z-index: 10; }
.navbar__inner { max-width: 1100px; margin: 0 auto; padding: 1rem; display: flex; justify-content: space-between; align-items: center; gap: 1rem; }
.navbar__logo { font-weight: 700; font-size: 1.1rem; color: #1a1a2e; text-decoration: none; }
.navbar__links { display: flex; gap: 1rem; }
.navbar__link { color: #4a4a5e; text-decoration: none; padding: 0.4rem 0.8rem; border-radius: 6px; transition: background 0.2s, color 0.2s; }
.navbar__link:hover { background: #f0f0f5; }
.navbar__link.router-link-active { background: #1a1a2e; color: #fff; }
</style>