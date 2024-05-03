const {src, dest, watch, parallel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// --------------------------------------------------------------
//                      Dependencias CSS
// --------------------------------------------------------------
const plumber = require('gulp-plumber'); // -----> para errores

const autoprefixer = require('autoprefixer'); 
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');

const sourmaps = require('gulp-sourcemaps');
// --------------------------------------------------------------
//                      Dependencias IMG
// --------------------------------------------------------------
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const clean = require('gulp-clean');
const webp = require('gulp-webp')
// --------------------------------------------------------------
//                      Dependencias JS
// --------------------------------------------------------------
const terser = require('gulp-terser-js');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
// --------------------------------------------------------------
//                          Funciones
// --------------------------------------------------------------

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    images: 'src/img/**/*'
}

function css() {
    return src(paths.scss) //Identificar el archivo. scss 
        .pipe(sourmaps.init())
        .pipe(plumber()) // -----> si hay errores, no se detiene la tarea
        .pipe(sass()) //Compilar 
        // .pipe(postcss([autoprefixer(), cssnano])) //------> minificacion (FINAL DE PROYECTO)
        .pipe(sourmaps.write('.'))
        .pipe(dest('build/css'))
}

function javascript(){
    return src(paths.js)
        .pipe(sourmaps.init()) // -------> rastrear erroes
        .pipe(concat('bundle.js'))
        // .pipe(terser()) // ------> minificar el archivo bundle.js (FINAL DE PROYECTO)
        .pipe(rename({ suffix: '.min' })) // --------> bundle.min.js
        /**
            bundle.min.js ---->  
            Un bundle sirve para agrupar todos los ficheros de JavaScript en uno solo. Así el navegador no necesita hacer varias peticiones HTTP.
         */
        .pipe(sourmaps.write('.')) // -----> mapas de origen en el archivos
        .pipe(dest('./build/js')) 
}

function images() {
    return src(paths.images)
        .pipe(cache(imagemin({ optimizationLevel: 3 })))
        .pipe(dest('build/img'))
        .pipe(clean())
}
function Towebp() {
    const cuality = {
        quality: 50         //------> Modificar Calidad
    };
    return src(paths.images)
        .pipe(webp(cuality))  // ------> Convertir a formato webp con la calidad
        .pipe(dest('build/img'))
}

function dev(done) {
        watch(paths.scss, css); // -------> Ejecutar la funcion css
        watch(paths.js, javascript); // -------> Ejecutar la funcion javascript
    done();
}

exports.dev = dev; // -----> css, js
exports.oneUse = parallel(images, Towebp); // -----> imagenes 
exports.dev2 = parallel(css, javascript, images, Towebp, dev)