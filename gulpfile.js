const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')
const htmlmin = require('gulp-htmlmin')



//Logs Task
gulp.task('message', function(){
  return console.log('Gulp is running...')
})

//Copy HTML files
gulp.task('copyHtml', function(){
  gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('docs'))
})

//Copy Pages
gulp.task('copyPages', function () {
  gulp.src('pages/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('docs/pages'));
});

//Copy JS
gulp.task('copyJS', function(){
  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('docs/js'))
})

//optimize images
gulp.task('imageMin', () =>
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('docs/img'))
)

//compile sass
gulp.task('sass', function(){
  gulp.src([
  'sass/style.scss',
  'sass/portraitM.scss',
  'sass/portraitL.scss',
  'sass/portraitS.scss',
  'sass/portraitXL.scss',
  'sass/landscapeS.scss',
  'sass/landscapeL.scss'
  ])
  .pipe(concat('style.scss'))
  .pipe(sass().on('error', sass.logError))
  .pipe(uglifycss())
  .pipe(gulp.dest('css'))
  .pipe(gulp.dest('docs/css'))
})

// gulp.task('copyCSS', function () {
//   gulp.src('css/style.css')
//     .pipe(gulp.dest('docs/css'))
// });


//compile scripts
// gulp.task('scripts', function(){
//   gulp.src('js/*.js')
//   .pipe(concat('main.js'))
//   .pipe(uglify())
//   .pipe(gulp.dest('docs/js'))
// })

gulp.task('default', ['message', 'copyHtml', 'copyPages', 'imageMin', 'copyJS', 'sass'])

gulp.task('watch', function(){
  gulp.watch('*.html', ['copyHtml'])
  gulp.watch('pages/*.html', ['copyPages'])
  gulp.watch('img/*', ['imageMin'])
  gulp.watch('js/*.js', ['copyJS'])
  gulp.watch('sass/*.scss', ['sass'])
})
