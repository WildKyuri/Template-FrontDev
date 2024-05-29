# Css con *Sass y Gulp*

Esta plantilla esta con el proposito de poder trabajar de manera un poco ***más rapida*** con Sass y Gulp  

:memo: **Note:** esta plantilla ya es funcional con ambos archivos *.json* que ya vienen incluidos 

## :speech_balloon:Actualizaciones
- Anteriormente se estaba usando la version vieja de sass en que se basaba en ruby,
    ahora sass esta actualizado para usarse en base a DartSass

- Se esta usando modern normalize 

    - https://github.com/sindresorhus/modern-normalize/tree/main

    <br>


- Dependencias de desarrollo que no se utilizaban

- Ahora se ocupa DartSass, algunas dependencias anteriores ya no son necesarias

- Se agrego el renderizado de las imagenes a .avif, anteriormente solo era .webp

<!-- imagenes de los logos -->

## :notebook_with_decorative_cover:Ejecutar tareas gulpfile.js
Asegura de cambiar en el archivo package.json la parte de escripts y añadir las pripiedades faltantes

### Propiedades faltantes    
Agregar manualmente las siguientes propiedades debajo de "Description"
```
"main": "gulpfile.json",
"type": "module",

```

#### Scripts    
##### Actual
```
"Scripts": [
    "test": "echo \"Error: no test specified\" && exit 1"
    ]
```

##### Modificación 
```
"Scripts": [
    "dev": "gulp"
    ]

```
Para poder empezar a usar la plantilla, necesitamos la carpeta *node_modules* 
    
```
npm install
```

## :warning:Instalar dependencias manualmente

### Requisitos
- node.js
- npm

Ejecuta los siguientes comandos
```
npm init
```
Las 3 opciones a modificar a la necesidad indivualmente:

- description: Lo que quieras ponerle
- keywords: SASS, GULP (esto es opcional)
- author: name


### Dependencias de Desarrollo
Como ultimo paso, descargar/instalar las dependencias 
de desarrollo, en una terminal dentro del proyecto/plantilla, 
correr los siguientes comandos 

#### Css
```
npm i --save-dev sass
npm i --save-dev gulp
npm i --save-dev gulp-sass
```
#### Js
```
npm i --save-dev gulp-terser
npm i --save-dev gulp-rename
npm i --save-dev gulp-concat
```
#### Img
```
npm i --save-dev sharp
```    
