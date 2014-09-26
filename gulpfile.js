var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var gulpWebpack = require('gulp-webpack');
var react = require('gulp-react');
var jshint = require('gulp-jshint');
var jest = require('gulp-jest');

// hijack task fn and add help
require('gulp-help')(gulp);

var packageJson = require('./package.json');


var livereload = require('livereload');
var webpack = require('webpack');
var argv = require('yargs').argv;
var stylish = require('jshint-stylish');

gulp.task('deploy', 'Deploy site to github page', function () {
  gulp.src(['./app/**/*'])
    .pipe(deploy({
      branch: 'master',
      push: !argv.noPush
    }));
});

gulp.task('lint', 'lint project code (post jsx transformation)', function() {
  gulp.src('src/**/*')
    .pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch:lint', false, function() {
  gulp.watch('./src/**/*', ['lint']);
});

function test() {
  return gulp.src('.')
    .pipe(jest(packageJson.jest));
}

gulp.task('test', 'Run tests once', test);

gulp.task('watch:test', false, function() {
  gulp.watch('./src/**/*.js', test);
});

function build(once) {
  var buildConfig = getBuildWebpack(once);
  return gulp.src('./src/app.js')
    .pipe(gulpWebpack(buildConfig))
    .pipe(gulp.dest('app/'));
}

gulp.task('build', 'bundle the app', function() {
  build(true);
});

gulp.task('watch:build', false, function() {
  build(false);
});

gulp.task('watch', 'Use this for development. Will build, test, and serve the demo automgagically', [
  'watch:build',
  'watch:lint',
  'watch:test'
]);

gulp.task('default', false, ['help']);

gulp.task('ci', 'Run the tests and build. Use --travis for the travis version of the build.', [
  'test',
  'build'
]);

// UTILS


function getBuildWebpack(once) {
  return {
    entry: './src/app.js',
    output: {
      path: __dirname + 'app',
      filename: 'bundle.js'
    },

    debug: false,
    devtool: 'source-map',
    watch: !once,

    stats: {
      colors: true,
      reasons: false
    },

    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ],

    resolve: {
      extensions: ['', '.js']
    },

    module: {
      loaders: [
        { test: /src\/.*\.js$/, loader: 'jsx-loader' }
      ]
    }
  }
}