# Guía para crear una estructura básica de HTML5 y arquitectura de directorios

## 1. Crear la carpeta del proyecto
- Elige un nombre descriptivo para tu proyecto, por ejemplo: `estructurapw26`.

## 2. Abrir la carpeta en VS Code
- Abre Visual Studio Code y selecciona la carpeta creada.

## 3. Crear archivos y carpetas
- Dentro de la carpeta del proyecto, crea:
  - Un archivo `index.html`.
  - Una carpeta `css` para hojas de estilo.
  - Una carpeta `js` para scripts JavaScript.

## 4. Estructura básica de HTML5 en `index.html`
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primer sitio web</title>
    <link rel="stylesheet" href="css/estilos.css">
  </head>
  <body>
    <h1>Bienvenidos a mi sitio web</h1>
    <p>Este es un ejemplo de estructura básica en HTML5.</p>
    <script src="js/app.js"></script>
  </body>
</html>
```

## 5. Etiquetas HTML: cierre y función
- **Etiquetas con cierre:** `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`, `<div>`, `<span>`, etc.
- **Etiquetas sin cierre:** `<img>`, `<br>`, `<hr>`, `<meta>`, `<link>`, etc.
- **Funciones:**
  - `<h1>` a `<h6>`: Encabezados.
  - `<p>`: Párrafos.
  - `<a>`: Enlaces.
  - `<img>`: Imágenes.
  - `<ul>`, `<ol>`, `<li>`: Listas.

## 6. Probar el sitio
- Usa la extensión **Live Server** en VS Code o un servidor Apache para visualizar tu página.

## 7. Probar elementos y agregar DOCTYPE
- Añade y modifica etiquetas como `<p>`, `<h1>`, `<a>`, `<img>`, etc.
- El `<!DOCTYPE html>` debe ir siempre al inicio para indicar que usas HTML5.

## 8. Estructurar el contenido
- Organiza el contenido usando etiquetas semánticas:
  - `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.

## 9. Crear repositorio en GitHub y guardar cambios
### a) Crear el repositorio en GitHub
- Ve a [github.com](https://github.com) y crea un nuevo repositorio.

### b) Clonar o agregar el repositorio al origen
- Si ya tienes el repositorio en GitHub:
  - Clona con:
    ```bash
    git clone https://github.com/usuario/estructurapw26.git
    ```
- Si ya tienes la carpeta local, inicializa git:
    ```bash
    git init
    git remote add origin https://github.com/usuario/estructurapw26.git
    ```

### c) Preparar archivos para subir
- Agrega los archivos:
    ```bash
    git add .
    ```

### d) Crear un commit
    ```bash
    git commit -m "Estructura inicial del proyecto HTML5"
    ```

### e) Subir los cambios (push)
    ```bash
    git push -u origin main
    ```

### f) Traer cambios (pull)
    ```bash
    git pull origin main
    ```

---

**¡Listo! Ahora tienes una estructura básica de proyecto web, conoces las etiquetas principales de HTML5 y los pasos para gestionar tu repositorio con GitHub.**
