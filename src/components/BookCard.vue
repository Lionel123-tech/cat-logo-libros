<script setup>
defineProps({
  book: { type: Object, required: true }
})
</script>

<template>
  <article class="book">
    <div class="book__cover">
      <img v-if="book.portada" :src="book.portada" :alt="`Portada de ${book.titol}`" class="book__img" />
      <div v-else class="book__placeholder">📖</div>
    </div>
    <div class="book__body">
      <h3 class="book__title">{{ book.titol }}</h3>
      <p class="book__author">{{ book.autor }}</p>
      <p class="book__meta"><span>{{ book.any }}</span> · <span>{{ book.genere }}</span></p>
      <p class="book__desc">{{ book.descripcio }}</p>
      <p class="book__rating" v-if="book.valoracio">⭐ {{ book.valoracio }} / 5</p>
    </div>
  </article>
</template>

<style scoped>
.book { background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.book:hover { transform: translateY(-4px); box-shadow: 0 6px 18px rgba(0,0,0,0.12); }
.book__cover { background: #f0f0f5; height: 220px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.book__img { width: 100%; height: 100%; object-fit: cover; }
.book__placeholder { font-size: 4rem; }
.book__body { padding: 1rem; display: flex; flex-direction: column; gap: 0.35rem; }
.book__title { font-size: 1.05rem; color: #1a1a2e; }
.book__author { font-size: 0.9rem; color: #4a4a5e; font-style: italic; }
.book__meta { font-size: 0.8rem; color: #888; }
.book__desc { font-size: 0.85rem; color: #555; margin-top: 0.4rem; line-height: 1.4; }
.book__rating { margin-top: 0.5rem; font-size: 0.85rem; color: #b8860b; font-weight: 600; }
</style>