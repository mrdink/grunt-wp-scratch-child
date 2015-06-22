/**
 * grunt-notify
 *
 * Automatic desktop notifications for Grunt errors and warnings using
 * Growl for OS X or Windows, Mountain Lion and Mavericks Notification
 * Center, and Notify-Send.
 *
 * @link https://www.npmjs.com/package/grunt-notify
 */
module.exports = {
  sass: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Sass is Sassy.'
    }
  },
  dev: {
    options: {
      title: 'Grunt, grunt!',
      message: 'Development processed without errors.'
    }
  },
  prod: {
    options: {
      title: 'Grunt, grunt!',
      message: 'We\'ll do it live!'
    }
  },
  deployed: {
    options: {
      title: 'Grunt, grunt!',
      message: '/dist has been pushed the specified server.'
    }
  }
};
