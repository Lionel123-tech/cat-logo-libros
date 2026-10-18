<script setup>
</script>

<template>
  <h1 style="color: red; font-size: 50px;">¡PRUEBA 123!</h1>
  <section class="about">
    <h1>Sobre el proyecto</h1>
    <p>
      Este catálogo de libros es una aplicación web desarrollada con
      <strong>Vue</strong> y
      <strong>Cloud Firestore</strong> para la asignatura
      <em>Web Dinámica</em> del Grado en Diseño Digital y Tecnologías Creativas.
    </p>
    
    <h2>Tecnologías</h2>
    <ul>
      <li>Vue 3</li>
      <li>Firebase Hosting</li>
      <li>Cloud Firestore</li>
      <li>Vite como bundler</li>
    </ul>

    <h2>Componentes propios</h2>
    <ul>
      <li><strong>NavBar</strong> — barra de navegación con RouterLink.</li>
      <li><strong>BookCard</strong> — tarjeta de un libro.</li>
      <li><strong>BookList</strong> — lista de libros.</li>
      <li><strong>LoadingSpinner</strong> — indicador de carga.</li>
      <li><strong>ErrorMessage</strong> — mensaje de error.</li>
    </ul>
  </section>
</template>

<style scoped>
.about { max-width: 700px; margin: 0 auto; }
.about h1 { font-size: 1.8rem; margin-bottom: 1rem; color: #1a1a2e; }
.about h2 { font-size: 1.2rem; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #33334d; }
.about p, .about li { color: #555; line-height: 1.6; }
.about ul { padding-left: 1.2rem; }
</style>