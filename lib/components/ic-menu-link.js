+function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'ember',
      '.lib/components/ic-menu-item'
      ], function(Ember, MenuItemComponent) { return factory(Ember, MenuItemComponent); });
  } else if (typeof exports === 'object') {
    module.exports = factory(require('ember'), require('./lib/components/ic-menu-item'));
  } else {
    root.ic = root.ic || {};
    root.ic.MenuLinkComponent = factory(Ember, root.ic.MenuItemComponent);
  }
}(this, function(Ember, MenuItemComponent) {

  var MenuLinkComponent = MenuItemComponent.extend({

    tagName: 'ic-menu-link',

    attributeBindings: [
      'href'
    ],

    role: 'link',

    clickAction: function() {
      window.location = this.get('href');
    },

  });

  return MenuLinkComponent;

});
