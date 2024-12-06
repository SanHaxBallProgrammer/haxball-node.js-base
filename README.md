# Base-HaxBall-node.js

Para encender y ejecutar el proyecto `host-node.js` 🔥, sigue estos pasos:

1. **Instalación de dependencias** 🛠️:
   - Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu sistema. Puedes verificarlo ejecutando `node -v` en la terminal. Si no está instalado, descárgalo e instálalo desde el sitio oficial.
   - Abre la terminal en el directorio donde se encuentra el archivo `package.json`.
   - Ejecuta el siguiente comando para instalar las dependencias del proyecto:
     ```
     npm install
     ```
     Esto instalará las dependencias definidas en el archivo `package.json`, como `haxball.js` (la biblioteca para HaxBall ⚽) y `nodemon` (una herramienta para reiniciar automáticamente el servidor durante el desarrollo 🔄).
     
     **Nota sobre `node_modules`**:
     La carpeta `node_modules` se creará automáticamente después de ejecutar `npm install`. Esta carpeta contiene todas las dependencias que tu proyecto necesita para funcionar, como `haxball.js`, `nodemon` y otras bibliotecas. No es necesario añadirla al control de versiones (por ejemplo, Git), ya que puedes regenerarla fácilmente en otro entorno ejecutando `npm install` nuevamente.

2. **Ejecutar el proyecto** 🚀:
   - Para iniciar el servidor en producción, ejecuta:
     ```
     npm start
     ```
     Esto ejecutará el archivo `index.js` dentro de la carpeta `src` usando `node` 🖥️.

3. **Modo de desarrollo** 🧑‍💻:
   - Si estás trabajando en desarrollo y deseas que el servidor se reinicie automáticamente al realizar cambios, ejecuta:
     ```
     npm run dev
     ```
     Esto usará `nodemon` para supervisar el archivo `index.js` en la carpeta `src` y reiniciar el servidor cuando detecte cambios 🔄.

Este proyecto está configurado para utilizar módulos de ES6 (`"type": "module"` en el archivo `package.json`), lo que significa que puedes usar `import` y `export` en lugar de `require` y `module.exports` en el código fuente 📦.
