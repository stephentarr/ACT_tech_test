define(function () {

    FutureController.$inject = [ '$scope' , 'baseData' , 'configData' ];
    function FutureController( $scope , baseData , configData ){

        baseData.set_base_url(configData.images.base_url);
        baseData.set_poster_sizes(configData.images.poster_sizes);
        baseData.set_backdrop_sizes(configData.images.backdrop_sizes);

    }

    return FutureController;

});