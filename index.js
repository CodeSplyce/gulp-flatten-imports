'use strict';

var gutil = require('gulp-util')
var through = require('through2')
var path = require('path')

module.exports = function(options) {
  return through.obj(function(file, encoding, cb) {
    if (file.isNull()) {
      return cb(null, file)
    }

    if (file.isStream()) {
      return cb(new gutil.PluginError('gulp-flatten-imports', 'Streaming is not supported.'))
    }

    try {
      var contents = String(file.contents);
      var matches = [...contents.matchAll(/(import(\s*\(|.*from)?\s*("|'))(.*(\\["'])?)+?(\3)/g)]
      for (var index in matches)
      {
        contents = contents.replace(matches[index][0], matches[index][1] + (matches[index][4].match(/[\\\/]/) == null ? '' : './') + path.basename(matches[index][4]) + matches[index][6])
      }
      file.contents = Buffer.from(contents);
      this.push(file)
    }
    catch (e) {
      this.emit('error', new gutil.PluginError('gulp-flatten-imports', e, {fileName: file.path}))
    }

    cb()
  })
}