
Se aceptan sugerencias 

Si hace falta algo mas dentro del gulpfile para optimazar el 
flujo del trabajo, estoy abierto a las posibilidades; incluso si faltan
dependencias de desarrollo, etc


-----------------------------------------------------------------------
En consola para iniciar el package.json
-----------------------------------------------------------------------
    npm init  
Las 3 cosas a modificar
-----------------------------------------------------------------------
    description: Lo que quieras ponerle
    keywords: SASS, GULP (esto es opcional)
    author: name
-----------------------------------------------------------------------
El resto se cuenta solo al ver el gulpfile.js

    npm install

-----------------------------------------------------------------------
   Dependencias de Desarrollo
-----------------------------------------------------------------------
    npm i sass --save-dev
    npm i -D gulp

    npm i --save-dev gulp-sass
    npm i --save-dev gulp-plumber
    npm i --save-dev gulp-sourcempas

    npm i --save-dev cssnano autoprefixer postcss gulp-postcss
---------------------------------------------------------------
   JS 
---------------------------------------------------------------
    npm i --save-dev terser
    npm i --save-dev gulp-terser-js

    npm i --save-dev gulp-rename
    npm i --save-dev gulp-concat
--------------------------------------------------------------
   Imagenes
---------------------------------------------------------------
    npm i --save-dev gulp-clean
    npm i --save-dev gulp-cache
    npm i --save-dev gulp-imagemin@7.1.0
    npm i --save-dev gulp-webp
---------------------------------------------------------------
