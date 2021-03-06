var gulp = require("gulp"),
    // exec = require("child_process").exec,
    spawn = require("child_process").spawn,
    webpack = require('gulp-webpack'),
    sourcemaps = require("gulp-sourcemaps"),
    ts = require("gulp-typescript");

var tsProject = ts.createProject("src/tsconfig.json");

var doServe = function () {
    // verbose execution, with lows

    var ls = spawn("yarn", ["run", "lite"]);

    ls.stdout.on("data", function (data) {
        console.log("stdout: " + data.toString());
    });

    ls.stderr.on("data", function (data) {
        console.log("stderr: " + data.toString());
    });

    ls.on("exit", function (code) {
        console.log("child process exited with code " + code.toString());
    });
}

gulp.task("compile", function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return tsResult.js
        .pipe(sourcemaps.write(".")) // produce *.js.map files
        .pipe(gulp.dest("dist"));
});

gulp.task('webpack', ["compile"], function () {
    return gulp.src('dist/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/'));
});

gulp.task("watch", ["compile"], function () {
    gulp.watch(["src/**/*.ts"], ["compile"]).on("change", function (e) {
        console.log("TypeScript file " + e.path + " has been changed. Refreshing.");
    });
});

gulp.task("watch-webpack", ["webpack"], function () {
    gulp.watch(["src/**/*.ts", "webpack.config.js"], ["webpack"]).on("change", function (e) {
        console.log("TypeScript file " + e.path + " has been changed. Refreshing.");
    });
});

gulp.task("serve", ["compile"], function (cb) {
    // no logs, silent execution
    // exec is not meant for processes that return HUGE buffers to Node. You should use spawn for that. So what do you use exec for? Use it to run programs that return result statuses, instead of data.
    // exec("yarn run lite", function (err, stdout, stderr) {
    //   console.log(stdout);
    //   console.log(stderr);
    //   cb(err);
    // });

    doServe()

});

gulp.task("serve-webpack", ["webpack"], function () {
    doServe();
});

gulp.task("build-webpack", ["watch-webpack", "serve-webpack"], function () {

});

gulp.task("build", ["watch", "serve"], function () {

});