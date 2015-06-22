/**
 * grunt-wp-scratch-child
 * https://github.com/mrdink/grunt-wp-scratch-child
 *
 * Copyright (c) 2015 Justin Peacock, byjust.in
 * Licensed under the MIT License
 */

'use strict';

// Basic template description
exports.description = 'Create a WordPress child theme \e[9mfrom\e[0m for Scratch.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
	init.process( {}, [
		// Prompt for these values.
		{
			name   : 'title',
			message: 'Theme Name',
			default: 'Scratch Child'
		},
		{
			name   : 'prefix',
			message: 'PHP function prefix (alpha and underscore characters only)',
			default: 'scratch_child'
		},
		{
			name   : 'base_theme',
			message: 'Base theme name (directory name of your parent theme)',
			default: 'scratch'
		},
		init.prompt( 'version', '0.1.0' ),
		init.prompt( 'description', 'Hi. I\'m a starter child theme called <code>Scratch Child</code> based on <code>_s</code> and <code>Foundation</code>. I\'m a theme meant for hacking so don\'t use me as a <em>Parent Theme</em>. Instead try turning me into the next, most awesome, WordPress theme out there. That\'s what I\'m here for.' ),
		{
			name   : 'theme_url',
			message: 'Theme URL',
			default: 'https://github.com/mrdink/scratch'
		},
		init.prompt( 'author_name', 'Your Name' ),
		init.prompt( 'author_email', 'Your Email' ),
		{
			name   : 'author_url',
			message: 'Author URL',
			default: 'https://github.com/mrdink'
		}
	], function( err, props ) {
		props.engines = {
	    "node": ">= 0.10.0"
		};
		props.version = props.version;
		props.devDependencies = {
			"grunt": "^0.4.5",
	    "grunt-autoprefixer": "^3.0.0",
	    "grunt-contrib-clean": "^0.6.0",
	    "grunt-contrib-compress": "^0.13.0",
	    "grunt-contrib-cssmin": "^0.12.3",
	    "grunt-contrib-imagemin": "^0.9.4",
	    "grunt-contrib-watch": "~0.6.1",
	    "grunt-csscomb": "^3.0.0",
	    "grunt-cssjanus": "^0.2.4",
	    "grunt-notify": "^0.4.1",
	    "grunt-pixrem": "~0.1.1",
	    "grunt-rsync": "^0.6.2",
	    "grunt-sass": "^1.0.0",
	    "grunt-version-check": "^0.2.1",
	    "grunt-wp-i18n": "^0.5.2",
	    "load-grunt-config": "^0.17.1",
	    "load-grunt-tasks": "^3.0.0",
	    "node-sass": "^3.0.0",
	    "time-grunt": "^1.0.0",
	    "versioncheck": "^2.1.1"
		};

		// Sanitize names where we need to for PHP/JS
		props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
		// Development prefix (i.e. to prefix PHP function names, variables)
		props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
		// Development prefix in all caps (e.g. for constants)
		props.prefix_caps = props.prefix.toUpperCase();
		// An additional value, safe to use as a JavaScript identifier.
		props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
		// An additional value that won't conflict with NodeUnit unit tests.
		props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
		props.js_safe_name_caps = props.js_safe_name.toUpperCase();

		// Files to copy and process
		var files = init.filesToCopy( props );

		console.log( files );

		// Actually copy and process files
		init.copyAndProcess( files, props, {noProcess: ['*.png','assets/img/*','assets/ico/*']} );

		// Generate package.json file
		init.writePackageJSON( 'package.json', props );

		// Done!
		done();
	});
};