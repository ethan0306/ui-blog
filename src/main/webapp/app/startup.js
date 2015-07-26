define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('home', { require: 'components/home-page/home' });

  ko.components.register('post', { require: 'components/post-page/post' });

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
