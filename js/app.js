angular.module("multipletodolist",["ngRoute"])
    .config(config)

    function config($routeProvider){

        $routeProvider
        .when("/",{
            templateUrl:"Partials/home.html",
            controller:"homeCtrl",
            controllerAs:"home"
        })
        .when("/category/:category",{
            templateUrl:"Partials/category.html",
            controller:"categoryCtrl",
            controllerAs:"category"
        })
        .otherwise({redirectTo:"/"})
    }