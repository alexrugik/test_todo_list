'use strict';

module.exports = 'app.core.components.footer';

angular.module('app.core.components.footer', [])
    .component('footer', {
      templateUrl: 'app/core/components/footer/footer.template.html',
      controller: FooterController
    });

FooterController.$inject = [];

function FooterController() {

}
