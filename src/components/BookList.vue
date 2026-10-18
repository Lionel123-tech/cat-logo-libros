<script setup>
import BookCard from '@/components/BookCard.vue'
defineProps({
  books: { type: Array, required: true }
})
</script>

<template>
  <div class="book-list">
    <BookCard v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>

<style scoped>
.book-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
</style>