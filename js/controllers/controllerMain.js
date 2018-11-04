define(function () {

    MainController.$inject = [ '$scope', '$route', '$http', '$timeout', '$q'];
    function MainController( $scope, $route, $http, $timeout, $q ){

        $scope.mainController = this;

    }

    return MainController;

});