# <font color="#FFD7F0">Css con *Sass y Gulp*</font>

Esta plantilla esta con el proposito de poder trabajar de manera un poco ***más rapida*** con Sass y Gulp  

:memo: **Note:** esta plantilla ya es funcional con ambos archivos *.json* que ya vienen incluidos 

<!-- imagenes de los logos -->


## :warning: Instalar dependencias manualmente

Para iniciar los siguientes archivos:
- *Package-lock.json*
- *Package.json*

En una terminal escribir

    npm init

Las 3 que tienes que tocar al momento que empiece el profe y pregunte:
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

### <font color="#FFD7F0">Dependencias de Desarrollo*</font>
Como ultimo paso para instalar las dependencias de desarrollo, en una terminal dentro del proyecto/plantilla, meter los siguientes comandos: 

#### <font color="#FFD7F0">Css</font>
    npm i sass --save-dev
    npm i -D gulp
    npm i --save-dev gulp-sass
    npm i --save-dev gulp-plumber
    npm i --save-dev gulp-sourcempas
    npm i --save-dev cssnano autoprefixer postcss gulp-postcss

#### <font color="#FFD7F0">Js</font>
    npm i --save-dev terser
    npm i --save-dev gulp-terser-js
    npm i --save-dev gulp-rename
    npm i --save-dev gulp-concat

#### <font color="#FFD7F0">Img</font>
    npm i --save-dev gulp-clean
    npm i --save-dev gulp-cache
    npm i --save-dev gulp-imagemin@7.1.0
    npm i --save-dev gulp-webp
