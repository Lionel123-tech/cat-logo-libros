# Catálogo de Libros - Web Dinámica

Aplicación web dinámica desarrollada con Vue 3, Vue Router y Cloud Firestore para la asignatura **Web Dinámica** del Grado en Diseño Digital y Tecnologías Creativas.

## Descripción de la temática
Se trata de un catálogo de libros interactivo. La aplicación permite navegar entre diferentes vistas y consultar en tiempo real los libros almacenados en la nube (Cloud Firestore). 

## Tecnologías utilizadas
- **Vue 3** (Composition API, `<script setup>`)
- **Vue Router 4** (Modo history)
- **Cloud Firestore** (Base de datos NoSQL)
- **Firebase Hosting** (Despliegue)
- **Vite** (Empaquetador)

## Instalación y ejecución local
Para ejecutar este proyecto en local, sigue estos pasos:
1. Clona el repositorio: `git clone https://github.com/Lionel123-tech/catalogo-libros.git`
2. Entra en la carpeta: `cd catalogo-libros`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run dev`

Para generar la versión de producción y desplegarla:
- `npm run build` (genera la carpeta `dist`)
- `firebase deploy --only hosting` (publica en Firebase)

## Componentes propios
Además de `App.vue`, la aplicación cuenta con los siguientes componentes:
1. **NavBar.vue**: Barra de navegación superior con enlaces (RouterLink).
2. **BookList.vue**: Componente contenedor que recibe la lista de libros y los renderiza.
3. **BookCard.vue**: Muestra la información de un libro individual.
4. **LoadingSpinner.vue**: Indicador visual mientras se cargan los datos.
5. **ErrorMessage.vue**: Muestra un mensaje de alerta si falla la conexión con la base de datos.

## Ejemplo de comunicación con props
La comunicación de padre a hijo se produce en la vista del catálogo:
- **Padre:** `CatalogView.vue` (lee los datos de Firestore).
- **Hijo:** `BookList.vue` (recibe los datos).
- **Datos pasados:** Se utiliza la prop `books`, que es un Array con todos los documentos de Firestore. `BookList` lo recibe mediante `<BookList :books="books" />`. El hijo no modifica los datos, solo los recorre y se los pasa a `BookCard`.

## Rutas de Vue Router
La aplicación cuenta con 3 rutas principales:
1. `/` (Home): Página de bienvenida.
2. `/cataleg` (Catálogo): Muestra la lista de libros extraída de Firestore.
3. `/sobre` (Sobre): Información sobre el proyecto y las tecnologías usadas.

## Base de datos (Cloud Firestore)
- **Colección utilizada:** `libros`
- **Campos principales:** `titol`, `autor`, `any`, `genere`, `descripcio`, `valoracio`.
- **Vista que muestra los datos:** `CatalogView.vue` (utilizando `getDocs` para leer los datos).

## Enlace a la web publicada
🔗 **URL de Firebase Hosting:** https://catalogo-libros-2026.web.app