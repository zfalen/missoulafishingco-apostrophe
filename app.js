var apos = require('apostrophe')({
  shortName: 'MFC-apostrophe',
  title: 'MFC-apostrophe',

  // These are the modules we want to bring into the project.
  modules: {
    // This configures the apostrophe-users module to add an admin-level
    // group by default
    'apostrophe-users': {
      groups: [
        {
          title: 'guest',
          permissions: [ ]
        },
        {
          title: 'admin',
          permissions: [ 'admin' ]
        }
      ]
    },
    // This configures the apostrophe-assets module to push a 'site.less'
    // stylesheet by default
    'apostrophe-assets': {
      stylesheets: [
        {
          name: 'site'
        }
      ]
    },
    'apostrophe-pages': {
      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'home_2',
          label: 'Home_2'
        },
      ]
    }
    // Add your modules and their respective configuration here!
  }

});
