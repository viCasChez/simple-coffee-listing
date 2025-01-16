# Simple Coffee Listing

Este proyecto está diseñado para crear una página interactiva de listado de cafés utilizando React. Ayuda a los desarrolladores a practicar con bibliotecas front-end, mejorando sus habilidades en JavaScript, HTML, CSS y React mientras implementan componentes reutilizables.

## Objetivos de Aprendizaje
- Practicar el uso de bibliotecas front-end como React.
- Implementar un componente de tarjeta reutilizable con variables personalizables.
- Mejorar tus habilidades en HTML, CSS y JavaScript.
- Incrementar tu capacidad para crear aplicaciones web interactivas.

## Características
- **Componente de Tarjeta Reutilizable:** Muestra detalles del café como imagen, nombre, precio, calificación, votos y etiquetas.
- **Filtros:** Los usuarios pueden alternar entre todos los productos y los productos disponibles.
- **Obtención Dinámica de Datos:** Los datos del café se obtienen de una API para su renderizado.
- **Diseño Interactivo:** Incluye renderizado condicional para etiquetas y estado de disponibilidad.
- **Interfaz de Usuario Responsiva:** Compatible con estándares de diseño modernos y dispositivos variados.

## Tecnología Utilizada
- **React:** Para construir los componentes de interfaz interactiva.
- **Vite:** Para un desarrollo rápido y construcciones optimizadas.
- **CSS:** Para estilizar los componentes.
- **API Fetch de JavaScript:** Para obtener datos desde la API.

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd simple-coffee-listing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir el proyecto para producción:**
   ```bash
   npm run build
   ```

5. **Previsualizar la construcción de producción:**
   ```bash
   npm run preview
   ```

## Componentes

### 1. `Card.jsx`
- Muestra detalles del café como:
  - Nombre
  - Imagen
  - Precio
  - Calificación
  - Número de votos (si están disponibles)
  - Etiquetas condicionales (e.g., "Popular", "Agotado")

### 2. `Filters.jsx`
- Incluye botones para alternar los filtros por disponibilidad.

### 3. `List.jsx`
- Recorre los datos del café y renderiza el componente `Card` para cada elemento.

### 4. `App.jsx`
- Obtiene los datos del café desde la API.
- Administra el estado y pasa los datos a los componentes secundarios.

## Obtención de Datos
Los datos del café se obtienen desde la siguiente URL:

```
https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json
```

## Historias de Usuario
1. Crear una página de listado de cafés que coincida con el diseño proporcionado.
2. Usar React para construir componentes reutilizables e interactivos.
3. Incluir un componente de tarjeta para mostrar detalles del café.
4. Renderizar etiquetas condicionales como "Popular" y "Agotado".
5. Permitir a los usuarios filtrar los elementos del café por disponibilidad.
6. Desplegar la solución y compartir las URLs del repositorio y demo.

## Despliegue

Para desplegar la solución:
1. Construir el proyecto usando:
   ```bash
   npm run build
   ```
2. Alojar la carpeta `dist` en un servicio de hosting estático (e.g., Vercel, Netlify).

## Demo
- [URL del Repositorio](#)
- [URL de la Demo](#)

---

¡Disfruta codificando y construyendo componentes reutilizables!
