/**
 * grunt-pixrem
 *
 * Generate pixel fallbacks for rem units with Grunt.
 *
 * @link https://www.npmjs.com/package/grunt-pixrem
 */
module.exports = {
  options: {
    rootvalue: '16px',
    replace: true
  },
  dev: {
    src: ['assets/css/main.css'],
    dest: 'assets/css/ie.css'
  }
};
