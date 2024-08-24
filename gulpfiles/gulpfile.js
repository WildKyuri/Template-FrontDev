import { src, dest, watch, series, parallel } from "gulp";

import path from "path";
import fs from "fs";
import { glob } from "glob";

import * as dartSass from "sass";
import gulpSass from "gulp-sass";

import terser from "gulp-terser";
import rename from "gulp-rename";
import concat from "gulp-concat";

import sharp from "sharp";

import browserSync from "browser-sync";

const sass = gulpSass(dartSass);
const bs = browserSync.create();

//-------------------------------------------------
//                  Funciones
//-------------------------------------------------

const paths = {
  scss: "src/scss/**/*.scss",
  js: "src/js/**/*.js",
  img: "src/img/**/*",
};

export function css(done) {
  src(paths.scss, { sourcemaps: true })
    .pipe(
      sass(
        { outputStyle: "compressed" }, // -----> Minificación .css
      ).on("error", sass.logError),
    )
    .pipe(
      dest(
        "build/css", // -----> Destino
        { sourcemaps: "." },
      ),
    ); // -----> Mapeo de los estilos .sass
  done();
}
export function js(done) {
  src(paths.js)
    .pipe(concat("bundle.js"))
    .pipe(terser()) // ----> Minificación .js
    .pipe(rename({ suffix: ".min" })) //----> referencia a la minificación
    .pipe(dest("build/js")); // ----> Destino
  done();
}

// Images with Node.JS
export async function img(done) {
  const srcDir = "src/img";
  const buildDir = "build/img";
  const images = await glob(paths.img);

  images.forEach((file) => {
    const relativePath = path.relative(srcDir, path.dirname(file));
    const outputSubDir = path.join(buildDir, relativePath);
    procesarImagenes(file, outputSubDir); // ----> procesamiento invidiual
  });
  done();
}

function procesarImagenes(file, outputSubDir) {
  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }
  const baseName = path.basename(file, path.extname(file));
  const extName = path.extname(file);

  if (extName.toLowerCase() === ".svg") {
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
    fs.copyFileSync(file, outputFile);
  } else {
    const outputFile = path.join(outputSubDir, `${baseName}${extName}`);
    const outputFileWebp = path.join(outputSubDir, `${baseName}.webp`);
    const outputFileAvif = path.join(outputSubDir, `${baseName}.avif`);
    const options = { quality: 80 };

    sharp(file).jpeg(options).toFile(outputFile);
    sharp(file).webp(options).toFile(outputFileWebp);
    sharp(file).avif().toFile(outputFileAvif);
  }
}

export function dev() {
  watch(paths.scss, css);
  watch(paths.js, js);
}

// export default series(css, js, img, dev);
export default series(css, js, dev);
export const buildImg = series(img);
