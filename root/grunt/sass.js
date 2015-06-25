/**
 * grunt-sass
 *
 * Compile Sass to CSS using node-sass
 *
 * @link https://www.npmjs.com/package/grunt-sass
 */
module.exports = {
  /**
   * Bourbon and Foundation are imported here so we can
   * access them from within the project
   */
  options: {
    sourceMap: true,
    includePaths: [
      '../{%= base_theme %}/bower_components/foundation/scss',
      '../{%= base_theme %}/bower_components/bourbon/app/assets/stylesheets',
      '../{%= base_theme %}/sass'
    ]
  },
  dev: {
    files: {
      'assets/css/main.css': ['sass/main.scss'],
      'assets/css/editor-style.css': ['sass/editor-style.scss'],
      'style.css': ['sass/style.scss']
    }
  }
};
