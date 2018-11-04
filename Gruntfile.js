'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    // Project configuration

	grunt.initConfig({

		//set meta

		pkg: pkg,
		banner: '/*! <%= pkg.name %> Copy right Stephen Tarr <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		jsMin	: 'js/<%= pkg.name %>_<%= pkg.version %>_min.js',
		buildFiles : [

			'assets/**',
			'css/*.css',
			'routes/**',
			'partials/**',
			'bower_components/**',
            'index.html'

		],
		states : {

			DEBUG : 0,
			PRODUCTION : 1,
			RELEASE : 2

		},
		state : '<%=states.RELEASE%>',

		//set requirejs

		requirejs: {

			//source code only build

			compile: {

				options: {

					baseUrl: "./js",
					mainConfigFile: "js/config.js",//name
					name : "config",
					out: "dist/js/config.js",

					wrap: {

						start: "<%=banner%>",
						end: ""

					}

				}

			}

		}

	});

	// register tasks

	grunt.registerTask( "d", "Debug Build", function() {

		grunt.config( 'state' , '<%=states.DEBUG%>' );
		grunt.task.run( 'copy:debug' , 'imagemin' );

    });

	grunt.registerTask( "r", "Release Build", function() {

		grunt.config( 'state' , '<%=states.RELEASE%>' );
		grunt.task.run( 'clean' , 'requirejs' , 'sass' , 'copy' );

    });

};