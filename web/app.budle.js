/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	angular.module('app', [
	  'ui.router',
	  __webpack_require__(4),
	  __webpack_require__(10),
	  __webpack_require__(11),
	  __webpack_require__(12)
	])
	    .config(__webpack_require__(13))
	    .run(__webpack_require__(14));



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// here we adding styles dependencies
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = 'app.core';

	angular.module('app.core', [
	  __webpack_require__(5),
	  __webpack_require__(6),
	  __webpack_require__(7),
	  __webpack_require__(8),
	  __webpack_require__(9)
	]);


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = 'app.core.directives.directive1';

	angular.module('app.core.directives.directive1', [])
	    .directive('directive1', Directive1);

	Directive1.$inject = [];

	function Directive1() {
	  return  {
	    templateUrl: 'app/core/directives/directive1/directive1.template.html',
	    scope: false,
	    restrict: 'E',
	    controller: function ($scope, $element) {
	    },
	    compile: function (elementm, attrs) {
	      return {
	        pre: function (scope, element, attributes, controller, transcludeFn) {
	        },
	        post: function (scope, element, attributes, controller, transcludeFn) {
	          scope.$ctrl.name = element.find('input').attr('name');
	        }
	      }
	    }
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = 'app.core.directives.directive2';

	angular.module('app.core.directives.directive2', [])
	    .directive('directive2', Directive2);

	Directive2.$inject = [];

	function Directive2() {
	  return  {
	    templateUrl: 'app/core/directives/directive2/directive2.template.html',
	    scope: false,
	    restrict: 'E',
	    controller: function ($scope, $element) {
	      $scope.$ctrl.names = ['Alex', 'Dmitriy', 'Vladimir', 'Oleg'];
	    },
	    compile: function (elementm, attrs) {
	      return {
	        pre: function (scope, element, attributes, controller, transcludeFn) {
	        },
	        post: function (scope, element, attributes, controller, transcludeFn) {

	        }
	      }
	    }
	  }
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = 'app.core.services.greeting';

	angular.module('app.core.services.greeting', [])
	  .service('greetingService', GreetingService);

	GreetingService.$inject = [];

	function GreetingService() {
	  this.greeting = function (name) {
	    console.log('Service says: Hello to you dear ' + name);
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = 'app.core.components.header';

	angular.module('app.core.components.header', [])
	    .component('header', {
	      templateUrl: 'app/core/components/header/header.template.html',
	      controller: HeaderController
	    });

	HeaderController.$inject = ['$state'];

	function HeaderController($state) {
	  var $ctrl = this;

	  $ctrl.isActive = isActive;


	  init();

	  function init() {

	  }

	  function isActive(state) {
	    if (state === $state.current.name) {
	      return 'active';
	    }
	    return false;
	  }

	}


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = 'app.core.components.footer';

	angular.module('app.core.components.footer', [])
	    .component('footer', {
	      templateUrl: 'app/core/components/footer/footer.template.html',
	      controller: FooterController
	    });

	FooterController.$inject = [];

	function FooterController() {

	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = 'app.main';

	angular
	    .module('app.main', [])
	    .component('main', {
	      templateUrl: "app/main/main.template.html",
	      controller: MainController,
	      controllerAs: '$ctrl'
	    });

	MainController.$inject = [];

	function MainController() {
	  var $ctrl = this;

	  $ctrl.name = 'Main';
	  $ctrl.greeting = greeting;

	  var alex = { name: 'Alex', age: 28, brother: {name:'Slava', political: 'false'}, serteficated: true  };
	  var second = { name: 'Second'};
	  var e = angular.extend({}, alex, second);
	  console.log(e);

	  var m = angular.merge({}, alex, second);
	  console.log(m);


	  init();

	  function init() {

	  }

	  function greeting(name) {
	    console.log('Hello ' + name);
	  }

	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = 'app.view1';

	angular.module('app.view1', [])
	    .component('view1', {
	      templateUrl: 'app/view1/view1.template.html',
	      controller: View1Controller,
	      controllerAs: '$ctrl'
	    })

	View1Controller.$inject = [];

	function View1Controller() {
	  var $ctrl = this;

	  $ctrl.name = 'View1Controller created by Alex';

	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = 'app.view2';

	angular.module('app.view2', [])
	    .component('view2', {
	      templateUrl: 'app/view2/view2.template.html',
	      controller: View2Controller,
	      controllerAs: '$ctrl'
	    });

	View2Controller.$inject = ['greetingService'];

	function View2Controller(greetingService) {
	  var $ctrl = this;

	  $ctrl.name = 'View2 Name';

	  init();

	  function init() {
	    greetingService.greeting($ctrl.name);
	  }

	}


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = Config;

	Config.$inject = [
	  '$stateProvider',
	  '$urlRouterProvider',
	  '$locationProvider'
	];

	function Config($stateProvider, $urlRouterProvider, $locationProvider) {
	  $locationProvider.html5Mode({
	    enabled: true,
	    requireBase: false
	  });

	  $urlRouterProvider.otherwise('/');

	  $stateProvider
	      .state('abstract', {
	        url: '',
	        abstract: true,
	        views: {
	          'header': { template: '<header></header>' },
	          'footer': { template: '<footer></footer>' },
	          '': { template: '<div ui-view="main"></div>' }
	        }
	      })
	      .state('main', {
	        url: '/',
	        parent: 'abstract',
	        views: { 'main': { template: '<main></main>' } }
	      })
	      .state('view1', {
	        url: '/view1',
	        parent: 'abstract',
	        views: { 'main': { template: '<view1></view1>' } }
	      })
	      .state('view2', {
	        url: '/view2',
	        parent: 'abstract',
	        views: { 'main': { template: '<view2></view2>' } }
	      })
	      .state('otherwise', {
	        url: '/',
	      })
	}


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = Run;

	Run.$inject = ['$rootScope'];

	function Run($rootScope) {

	}


/***/ }
/******/ ]);