<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/config'
import BookList from '@/components/BookList.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

const books = ref([])
const loading = ref(true)
const error = ref(null)

async function loadBooks() {
  loading.value = true
  error.value = null
  try {
    const q = query(collection(db, 'libros'), orderBy('titol'))
    const snapshot = await getDocs(q)
    books.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  } catch (e) {
    console.error(e)
    error.value = 'No se pudieron cargar los libros. Inténtalo de nuevo más tarde.'
  } finally {
    loading.value = false
  }
}

onMounted(loadBooks)
</script>

<template>
  <section class="catalog">
    <header class="catalog__header">
      <h1>Catálogo</h1>
      <p>Libros cargados directamente de Cloud Firestore.</p>
    </header>

    <LoadingSpinner v-if="loading" message="Cargando libros..." />
    <ErrorMessage v-else-if="error" :message="error" />
    <div v-else-if="books.length === 0" class="catalog__empty">
      <p>📭 Todavía no hay libros en el catálogo.</p>
    </div>
    <BookList v-else :books="books" />
  </section>
</template>

<style scoped>
.catalog__header { margin-bottom: 2rem; }
.catalog__header h1 { font-size: 1.8rem; color: #1a1a2e; margin-bottom: 0.4rem; }
.catalog__header p { color: #666; }
.catalog__empty { text-align: center; padding: 3rem; color: #888; background: #fff; border-radius: 12px; font-size: 1.1rem; }
</style>