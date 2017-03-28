var gulp = require("gulp"),
    // exec = require("child_process").exec,
    spawn = require("child_process").spawn,
    sourcemaps = require("gulp-sourcemaps"),
    ts = require("gulp-typescript");

var tsProject = ts.createProject("src/tsconfig.json");

gulp.task("compile", function () {
  var tsResult = tsProject.src()
  .pipe(sourcemaps.init())
  .pipe(tsProject());

  return tsResult.js
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest("src"));
});

gulp.task("watch", ["compile"], function () {
  gulp.watch(["src/**/*.ts"], ["compile"]).on("change", function (e) {
    console.log("TypeScript file " + e.path + " has been changed. Compiling.");
  });
});

gulp.task("serve", ["compile"], function (cb) {
  // no logs, silent execution
  // exec("yarn run lite", function (err, stdout, stderr) {
  //   console.log(stdout);
  //   console.log(stderr);
  //   cb(err);
  // });

  // verbose execution, with lows
  {
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

});

gulp.task("build", ["watch", "serve"], function () {

});