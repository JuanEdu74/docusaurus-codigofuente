# 🌐 Sitio Web

Este sitio web ha sido creado con [Docusaurus](https://docusaurus.io/), un generador moderno de sitios web estáticos.

### 📦 Página Web en Github
https://juanedu74.github.io/docusaurus-codigofuente/

Esta es la guía.

### 📦 Instalación

Para instalar las dependencias necesarias, ejecuta el siguiente comando:

```bash
$ yarn
```

### 🚀 Desarrollo Local

Para iniciar un servidor de desarrollo local, utiliza el siguiente comando:

```bash
$ yarn start
```

Este comando inicia un servidor local y abre una ventana del navegador. La mayoría de los cambios se reflejan en vivo sin necesidad de reiniciar el servidor.

### 🏗️ Construcción

Para generar contenido estático en el directorio `build`, ejecuta:

```bash
$ yarn build
```

Este comando genera contenido estático que puede ser servido con cualquier servicio de hosting de contenido estático.

### 📤 Despliegue

#### Usando SSH:
Si tienes configurado tu SSH en GitHub, puedes usar el siguiente comando para hacer el despliegue:

```bash
$ GIT_USER=<TuNombreDeUsuarioEnGitHub> yarn deploy
```

#### Sin usar SSH:
Si no usas SSH, asegúrate de haber configurado previamente tu token de GitHub para el despliegue, y usa el siguiente comando:

```bash
$ yarn deploy
```

Si estás utilizando GitHub Pages para alojar el sitio, este comando generará el sitio web y lo subirá a la rama `gh-pages`.

---

**Nota:** Asegúrate de tener configurado el archivo `docusaurus.config.js` correctamente con la URL de tu sitio y la ruta de despliegue.
```