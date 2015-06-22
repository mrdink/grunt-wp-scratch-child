/**
 * Below is the aliases for each task run.
 * By running `grunt`, `grunt dev` will be run.
 */
module.exports = {
  'default': ['dev'],
  'styles': [
    'sass',
    'autoprefixer',
    'csscomb',
    'pixrem',
    'cssjanus'
  ],
  'dev': [
    'clean',
    'styles',
    'notify:dev'
  ],
  'prod': [
    'dev',
    'cssmin',
    'imagemin',
    'makepot',
    'notify:prod'
  ],
  'package': [
    'prod',
    'rsync:dist',
    'compress',
    'notify:package'
  ],
  'deploy': [
    'prod',
    'rsync',
    'notify:deployed'
  ]
};
