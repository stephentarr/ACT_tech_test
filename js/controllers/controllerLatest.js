define(function () {

    HomeController.$inject = [ '$scope' , '$location' , '$anchorScroll' , 'movies' ];
    function HomeController( $scope , $location , $anchorScroll , movies ){

        $scope.movieItems = movies.results;
        $scope.page = movies.page;
        $scope.total_pages = movies.total_pages;

        if(movies.success === false && movies.success !== undefined){
            console.log( "ERROR: " + movies.status_message );
            $scope.error = movies.status_message;
        }

        $location.hash('top');
        $anchorScroll();

    }

    return HomeController;

});