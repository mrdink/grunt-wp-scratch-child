/**
 * grunt-contrib-compress
 *
 * Compress files and folders.
 *
 * Used in grunt package to create production-ready zip file.
 *
 * @link https://www.npmjs.com/package/grunt-contrib-compress
 */
module.exports = {
  prod: {
    options: {
      mode: 'zip',
      archive: './dist/<%= grunt.configs.package.name %>.<%= grunt.configs.package.version %>.zip'
    },
    expand: true,
    cwd: 'dist/<%= grunt.configs.package.version %>/',
    src: ['**/*'],
    dest: '<%= grunt.configs.package.name %>/'
  }
};
