<script setup>
</script>

<template>
  <section class="home">
    <h1>Bienvenido al Catálogo de Libros</h1>
    <p>
      Una aplicación hecha con Vue 3 que lee datos reales de Cloud Firestore.
      Navega por el catálogo para descubrir nuestros libros.
    </p>
    <RouterLink to="/cataleg" class="home__cta">Ver el catálogo →</RouterLink>
  </section>
</template>

<style scoped>
.home { text-align: center; padding: 3rem 1rem; max-width: 700px; margin: 0 auto; }
.home h1 { font-size: 2rem; margin-bottom: 1rem; color: #1a1a2e; }
.home p { color: #555; font-size: 1.05rem; line-height: 1.6; margin-bottom: 2rem; }
.home__cta { display: inline-block; background: #1a1a2e; color: #fff; padding: 0.8rem 1.6rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: background 0.2s; }
.home__cta:hover { background: #33334d; }
</style>