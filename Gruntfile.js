
'use strict';
 
 
module.exports = function(grunt) {
 
    grunt.initConfig({
        concat: {
            js: {
                src:[
                    "src/engine/sprite.js",
                    "src/engine/pixel.js",
                    "src/engine/player.js",
                    "src/engine/game.js",
                    "src/engine/canvas.js",
                    "src/application.js"
                ],
                dest: 'build.js'
              }
            },
        uglify: {
            js: {
                src: 'assets/js/build.js',
                dest: 'assets/js/build.min.js'
                }
            }
        });
 
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('build', ['concat', 'uglify']);
};