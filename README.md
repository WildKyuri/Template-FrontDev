# Css con *Sass y Gulp*

Esta plantilla esta con el proposito de poder trabajar de manera un poco ***más rapida*** con Sass y Gulp  

:memo: **Note:** esta plantilla ya es funcional con ambos archivos *.json* que ya vienen incluidos 

<!-- imagenes de los logos -->


## :warning: Instalar dependencias manualmente


### Requisitos
- node.js
- npm

Ejecuta los siguientes comandos

    npm init

Las 3 opciones a modificar a la necesidad indivualmente:

- description: Lo que quieras ponerle
- keywords: SASS, GULP (esto es opcional)
- author: name

Una vez creado el package.json, abre el archivo y busca la opcion de **scripts** y vendra lo siguiente

    "Scripts": [
         "test": "echo \"Error: no test specified\" && exit 1"
    ]

Modifica dicha parte, reemplazandola por lo siguiente:

    "Scripts": [
         "dev": "gulp"
    ]

### Dependencias de Desarrollo
Como ultimo paso para instalar las dependencias de desarrollo,
en una terminal dentro del proyecto/plantilla, 
correr los siguientes comandos 

#### Css
    npm i sass --save-dev
    npm i -D gulp
    npm i --save-dev gulp-sass
    npm i --save-dev gulp-plumber
    npm i --save-dev gulp-sourcempas
    npm i --save-dev cssnano autoprefixer postcss gulp-postcss

#### Js
    npm i --save-dev terser
    npm i --save-dev gulp-terser-js
    npm i --save-dev gulp-rename
    npm i --save-dev gulp-concat

#### Img
    npm i --save-dev gulp-clean
    npm i --save-dev gulp-cache
    npm i --save-dev gulp-imagemin@7.1.0
    npm i --save-dev gulp-webp
