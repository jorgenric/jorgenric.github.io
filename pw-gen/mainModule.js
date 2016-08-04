
var pwGen = angular.module("passwordGenerator",["ngRoute"]);

pwGen.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:"./views/homeView.html",
            controller : "homeController"
        })
        .when('/pw-gen',{
            templateUrl : "./views/pwGenView.html",
            controller : "pwGenController"
        })
        .when('/error',{
            templateUrl : "./views/error.html"
        })
        .otherwise({redirectTo : "/error"});
});

pwGen.constant('CHAR_MAPPING_OBJ', {
        
        'a' : '4',
        'b' : '8',
        'c' : 'c',
        'd' : 'd',
        'e' : '3',
        'f' : 'f',
        'g' : 'g',
        'h' : 'h',
        'i' : '1',
        'j' : 'j',
        'k' : 'k',
        'l' : 'l',
        'm' : 'm',
        'n' : 'n',
        'o' : '0',
        'p' : 'p',
        'q' : 'q',
        'r' : 'r',
        's' : '5',
        't' : 't',
        'u' : 'u',
        'v' : 'v',
        'w' : 'w',
        'x' : 'x',
        'y' : 'y',
        'z' : '2'
    }
);

