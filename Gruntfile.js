module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        transform: [
          [ 'babelify', { presets: 'es2015' } ]
        ],
        require: [
            './node_modules/moleculejs/src/molecule.js:molecule'
        ]
      },
      dist: {
        files: {
          './tests/tests.js': [ './tests/singleton.spec.js' ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [ 'browserify' ]);

};