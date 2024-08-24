# Working with Sass

## What about this :grey_question:

This template will help you working on little proyects with Sass, js and the target of having a good
performance in your web page. It works with Gulp having a gulpfile that
performs multiple task:

We have a folder with two gulpfiles

- With Browser-sync
- Without Browser-sync

### Sass

Compiles all Sass files into a single css file, at the same time with the minified of the css and the .map

```
templeate
├──📂build/
|    └──📂css/
|       └──🔰app.css
|       └──🔰app.css.map
```

### Js

All your js files into a single one app.js and the minified

```
templeate
├──📂build/
|    └──📂css/
|       └──🔰app.js
|       └──🔰example-one.js
|       └──🔰example-two.js
```

### Images

Everysingle image that you have in your `./src/img`, will be made into three image formats

```
templeate
├──📂build/
|    └──📂img/
|       └──🔰image1.jpg
|       └──🔰image1.webp
|       └──🔰image1.avif
```

<!-- imagenes de los logos -->

## System Requirements

You must have in your Dev Enviroment the following Requirements

- node.js

## Getting Started

Install all the dependencies:

```
npm install
```

Run the gulp task:

```
npm run dev
```
