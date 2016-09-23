!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.loaded = !0, module.exports;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.p = "", __webpack_require__(0);
}([ function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(1), angular.module("app", [ "ui.router", __webpack_require__(4), __webpack_require__(5), __webpack_require__(13), __webpack_require__(14), __webpack_require__(15) ]).config(__webpack_require__(16));
}, function(module, exports, __webpack_require__) {
    "use strict";
    __webpack_require__(2), __webpack_require__(3);
}, function(module, exports) {}, function(module, exports) {}, function(module, exports) {
    "use strict";
    function Run($rootScope) {
        $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams) {
            console.log("success change"), console.log(event);
        }), $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
            console.log("start change"), console.log(event);
        }), $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams) {
            console.log("error state change"), console.log(event);
        });
    }
    module.exports = "app.run", angular.module("app.run", []).run(Run), Run.$inject = [ "$rootScope" ];
}, function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = "app.core", angular.module("app.core", [ __webpack_require__(6), __webpack_require__(7), __webpack_require__(8), __webpack_require__(9), __webpack_require__(10), __webpack_require__(11), __webpack_require__(12) ]);
}, function(module, exports) {
    "use strict";
    function Directive1() {
        return {
            templateUrl: "app/core/directives/directive1/directive1.template.html",
            scope: !1,
            restrict: "E",
            controller: function($scope, $element) {},
            compile: function(elementm, attrs) {
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn) {},
                    post: function(scope, element, attributes, controller, transcludeFn) {
                        scope.$ctrl.name = element.find("input").attr("name");
                    }
                };
            }
        };
    }
    module.exports = "app.core.directives.directive1", angular.module("app.core.directives.directive1", []).directive("directive1", Directive1), 
    Directive1.$inject = [];
}, function(module, exports) {
    "use strict";
    function Directive2() {
        return {
            templateUrl: "app/core/directives/directive2/directive2.template.html",
            scope: !1,
            restrict: "E",
            controller: function($scope, $element) {
                $scope.$ctrl.names = [ "Alex", "Dmitriy", "Vladimir", "Oleg" ];
            },
            compile: function(elementm, attrs) {
                return {
                    pre: function(scope, element, attributes, controller, transcludeFn) {},
                    post: function(scope, element, attributes, controller, transcludeFn) {}
                };
            }
        };
    }
    module.exports = "app.core.directives.directive2", angular.module("app.core.directives.directive2", []).directive("directive2", Directive2), 
    Directive2.$inject = [];
}, function(module, exports) {
    "use strict";
    function MyDirective() {
        return {
            templateUrl: "app/core/directives/my-directive/my-directive.template.html",
            restrict: "E",
            scope: {
                customerInfo: "=info"
            },
            link: function(scope, element, attrs, controller, transcludeFn) {}
        };
    }
    module.exports = "app.core.directives.myDirective", angular.module("app.core.directives.myDirective", []).directive("ravMyDirective", MyDirective), 
    MyDirective.$inject = [];
}, function(module, exports) {
    "use strict";
    function MyDirective2() {
        return {
            templateUrl: "app/core/directives/my-directive2/my-directive2.template.html",
            restrict: "E",
            scope: {},
            transclude: !0,
            link: function(scope, element, attrs, controller, transcludeFn) {}
        };
    }
    module.exports = "app.core.directives.myDirective2", angular.module("app.core.directives.myDirective2", []).directive("ravMyDirective2", MyDirective2), 
    MyDirective2.$inject = [];
}, function(module, exports) {
    "use strict";
    function GreetingService() {
        this.greeting = function(name) {
            console.log("Service says: Hello to you dear " + name);
        };
    }
    module.exports = "app.core.services.greeting", angular.module("app.core.services.greeting", []).service("greetingService", GreetingService), 
    GreetingService.$inject = [];
}, function(module, exports) {
    "use strict";
    function HeaderController($state) {
        function init() {}
        function isActive(state) {
            return state === $state.current.name && "active";
        }
        var $ctrl = this;
        $ctrl.isActive = isActive, init();
    }
    module.exports = "app.core.components.header", angular.module("app.core.components.header", []).component("header", {
        templateUrl: "app/core/components/header/header.template.html",
        controller: HeaderController
    }), HeaderController.$inject = [ "$state" ];
}, function(module, exports) {
    "use strict";
    function FooterController() {}
    module.exports = "app.core.components.footer", angular.module("app.core.components.footer", []).component("footer", {
        templateUrl: "app/core/components/footer/footer.template.html",
        controller: FooterController
    }), FooterController.$inject = [];
}, function(module, exports) {
    function MainController($state) {
        function init() {}
        function greeting(name) {
            console.log("Hello " + name);
        }
        function getUsers() {
            return {
                alex: {
                    name: "Alex Ruzhinskiy",
                    address: "Irpin, Ostrovskogo7"
                },
                dmitriy: {
                    name: "Dmitriy Gotra",
                    address: "Bratislava, Stravska 27"
                }
            };
        }
        var $ctrl = this;
        $ctrl.name = "Main", $ctrl.greeting = greeting, $ctrl.directiveName = "This a test directive: type E, one time bind", 
        $ctrl.users = getUsers(), init();
    }
    module.exports = "app.main", angular.module("app.main", []).component("main", {
        templateUrl: "app/main/main.template.html",
        controller: MainController,
        controllerAs: "$ctrl"
    }), MainController.$inject = [ "$state" ];
}, function(module, exports) {
    "use strict";
    function View1Controller() {
        var $ctrl = this;
        $ctrl.name = "View1Controller created by Alex";
    }
    module.exports = "app.view1", angular.module("app.view1", []).component("view1", {
        templateUrl: "app/view1/view1.template.html",
        controller: View1Controller,
        controllerAs: "$ctrl"
    }), View1Controller.$inject = [];
}, function(module, exports) {
    "use strict";
    function View2Controller(greetingService) {
        function init() {
            greetingService.greeting($ctrl.name);
        }
        var $ctrl = this;
        $ctrl.name = "View2 Name", init();
    }
    module.exports = "app.view2", angular.module("app.view2", []).component("view2", {
        templateUrl: "app/view2/view2.template.html",
        controller: View2Controller,
        controllerAs: "$ctrl"
    }), View2Controller.$inject = [ "greetingService" ];
}, function(module, exports) {
    "use strict";
    function Config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: !0,
            requireBase: !1
        }), $urlRouterProvider.otherwise("/"), $stateProvider.state("abstract", {
            url: "",
            "abstract": !0,
            views: {
                header: {
                    template: "<header></header>"
                },
                footer: {
                    template: "<footer></footer>"
                },
                "": {
                    template: '<div ui-view="main"></div>'
                }
            }
        }).state("main", {
            url: "/",
            parent: "abstract",
            views: {
                main: {
                    template: "<main></main>"
                }
            }
        }).state("view1", {
            url: "/view1",
            parent: "abstract",
            views: {
                main: {
                    template: "<view1></view1>"
                }
            }
        }).state("view2", {
            url: "/view2",
            parent: "abstract",
            views: {
                main: {
                    template: "<view2></view2>"
                }
            }
        }).state("otherwise", {
            url: "/"
        });
    }
    module.exports = Config, Config.$inject = [ "$stateProvider", "$urlRouterProvider", "$locationProvider" ];
} ]);