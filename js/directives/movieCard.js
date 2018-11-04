define(function () {

    return function () {

        return {

            scope : {

                movieId        : "@",

                title           : "@",
                overview        : "@",
                releaseDate    : "@",
                voteAverage    : "@",

                posterPath     : "@",

            },
            replace : true,
            templateUrl : "partials/movie_card.html",
            controller: [ '$scope' , '$element' , '$location' , '$filter' , 'baseData' , function ( $scope , $element , $location , $filter , baseData ) {

                $scope.locationPath = $location.path;

                $scope.releaseDateFormatted = $filter('date')($scope.releaseDate, "MMM dd, yyyy")

                $scope.posterImageUrl = baseData.get_base_url() + baseData.get_poster_sizes(1) + $scope.posterPath;

                if($scope.posterImageUrl === baseData.get_base_url() + baseData.get_poster_sizes(1)){
                    $scope.posterImageUrl = "assets/default_poster.png"
                }

            }]

        };

    }

});
