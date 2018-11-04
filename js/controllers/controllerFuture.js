define(function () {

    FutureController.$inject = [ '$scope' , 'future' ];
    function FutureController( $scope , future ){

        $scope.futureItems = future.results;

    }

    return FutureController;

});