# [](https://github.com/insin/gulp-flatten-imports#imports)gulp-flatten-imports

Rewrites relative  `import`  calls to use flat paths in the same directory.


| Before                    | After            |
| ------------------------- | ---------------- |
| `import defaultExport, { export1 [ , [...] ] } from "./unflattened/path/to/file/module-name";` | `import defaultExport, { export1 [ , [...] ] } from "./module-name";` |
| `import defaultExport, * as name from "./unflattened/path/to/file/module-name";` | `import defaultExport, * as name from "./module-name";` |
| `import "./unflattened/path/to/file/module-name";` | `import "./module-name";` |
| `var promise = import("./unflattened/path/to/file/module-name");` | `var promise = import("./module-name");` |
| `var promise = import("./unflattened/path/to/file/module-name");` | `var promise = import("./module-name");` |
| `import "module-name";` | `import "module-name";` |


## [](https://github.com/insin/gulp-flatten-imports#install)Install

`
npm install --save-dev gulp-flatten-imports
`

## [](https://github.com/insin/gulp-flatten-imports#usage)Usage

This plugin is intended to be used in conjunction with  [gulp-flatten](https://github.com/armed/gulp-flatten)  for a quick-and-dirty means of creating a flat directory of a library's modules to be published to  [npm](https://www.npmjs.org/)  for cleaner requiring of the library's constituent parts.

```
var gulp = require('gulp')
var flatten = require('gulp-flatten')
var flattenImports= require('gulp-flatten-imports')

gulp.task('flatten', function() {
  return gulp.src('./src/**/*.js')
    .pipe(flatten())
    .pipe(flattenImports())
    .pipe(gulp.dest('./build'))
})
```
**Note:**  This assumes that every module in your project is uniquely named.