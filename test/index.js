var fs = require('fs')

var gutil = require('gulp-util')
var tape = require('tape')

var flattenImports = require('../')
var test = fs.readFileSync(__dirname + '/files/test.js', 'utf8')
var expected = fs.readFileSync(__dirname + '/files/expected.js', 'utf8')

tape('gulp-flatten-imports', function(t) {
  t.plan(1)

  var stream = flattenImports();

  stream.on('data', function(file) {
    t.equal(file.contents.toString(), expected, 'relative requires are rewritten')
  });

  stream.write(new gutil.File({
    path: 'test.js'
  , contents: Buffer.from(test)
  }));
})