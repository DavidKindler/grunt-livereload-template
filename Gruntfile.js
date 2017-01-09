'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');


    grunt.initConfig({
        // pkg: grunt.file.readJSON('package.json'),

        watch: {
            options: {livereload:true},
            files:['public/**'],
            tasks: ''
        },
        express: {
            all: {
                options: {
                    port:9000,
                    hostname: 'localhost',
                    bases:['./public'],
                    livereload: true
                }
            }
        }


    });

    grunt.registerTask('server', ['express','watch' ]);
    grunt.registerTask('default', ['server']);

}