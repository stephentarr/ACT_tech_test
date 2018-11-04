require([

    "controllers/controllerMain",
    "controllers/controllerHome",
    "controllers/controllerLatest",
    "controllers/controllerMovie",
    "controllers/controllerFuture",

    "directives/uiNavPagination",
    "directives/movieCard",

    "services/baseData"

],function (

    controllerMain,
    controllerHome,
    controllerLatest,
    controllerMovie,
    controllerFuture,

    directiveUiNavPagination,
    directiveMovieCard,

    serviceBaseData

) {

    const app = angular.module( 'act_angular_test', [ 'ngRoute' , 'ngAnimate' ] );

    app.config(['$compileProvider', '$routeProvider', '$locationProvider','$httpProvider',
        function($compileProvider, $routeProvider, $locationProvider, $httpProvider) {

            $httpProvider.defaults.cache = true;
            $compileProvider.debugInfoEnabled(false);
            $locationProvider.hashPrefix('!');

            $routeProvider

                .when('/' , {

                    templateUrl: 'routes/home.html',
                    controller: 'ControllerHomeController',
                    data: {
                        ID: "home",
                        title: "Home"
                    },
                    resolve: {

                        configData : ['$http', function ($http) {

                            return $http({

                                url: 'https://api.themoviedb.org/3/configuration?api_key=9435a69f0d3310f91a4816c298be7472',
                                method: 'GET',

                            }).then(
                                function successCallback(response) {
                                    return response.data
                                },
                                function errorCallback(response) {
                                    return response.data;
                                }
                            )

                        }]
                    }

                })

                .when('/latest', {

                    url: '/latest/{paged:[0-9]+}',
                    templateUrl: 'routes/latest.html',
                    controller: 'ControllerLatestController',
                    data: {
                        ID: "latest",
                        title: "Latest"
                    },
                    resolve: {

                        movies : ['$http', '$route', function ($http,$route) {

                            const pageNumb = $route.current.params.page !== undefined ? $route.current.params.page : 1;

                            return $http({

                                url: 'http://api.themoviedb.org/3/movie/now_playing?api_key=9435a69f0d3310f91a4816c298be7472&region=GB&page=' + pageNumb,
                                method: 'GET',

                            }).then(
                                function successCallback(response) {
                                    return response.data
                                },
                                function errorCallback(response) {
                                    return response.data;
                                }
                            )

                        }]
                    }

                })

                .when('/movie', {

                    templateUrl : 'routes/movie.html',
                    controller: 'ControllerMovieController',
                    data : {
                        ID: "movie",
                        title: "Movie"
                    },
                    resolve: {

                        singleMovieInfo : ['$http', '$q', '$route', function ($http,$q,$route) {

                            return $http({

                                url: 'http://api.themoviedb.org/3/movie/'+ $route.current.params.movieId + '?api_key=9435a69f0d3310f91a4816c298be7472&region=GB&append_to_response=videos',
                                method: 'GET',

                            }).then(
                                function successCallback(response) {
                                    return response.data;
                                },
                                function errorCallback(response) {
                                    return response.data;
                                }
                            )

                        }]

                    }

                })

                .when('/future', {

                    templateUrl : 'routes/future.html',
                    controller: 'ControllerFutureController',
                    data : {
                        ID: "future",
                        title: "Future"
                    },
                    resolve: {

                        future : ['$http', '$q', function ($http,$q) {

                            return $http({

                                url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=9435a69f0d3310f91a4816c298be7472&region=GB',
                                method: 'GET',

                            }).then(
                                function successCallback(response) {
                                    return response.data
                                },
                                function errorCallback(response) {
                                    return response.data;
                                }
                            )

                        }]
                    }


                })

        }]);

    //controllers
    app.controller('ControllerMainController', controllerMain );
    app.controller('ControllerHomeController', controllerHome );
    app.controller('ControllerLatestController', controllerLatest );
    app.controller('ControllerMovieController', controllerMovie );
    app.controller('ControllerFutureController', controllerFuture );

    //directives
    app.directive( 'uiNavPagination', directiveUiNavPagination );
    app.directive( 'movieCard', directiveMovieCard );

    //services
    app.service( 'baseData', serviceBaseData);

    angular.bootstrap( document.querySelector("html"), ['act_angular_test'] ,{
        strictDi: true
    });

    return app;

});