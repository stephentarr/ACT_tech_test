define(function () {

    MovieController.$inject = [ '$scope' , 'singleMovieInfo' , 'baseData' ];
    function MovieController( $scope , singleMovieInfo , baseData ){

        console.log(singleMovieInfo);

        $scope.posterPath = baseData.get_base_url() + baseData.get_poster_sizes(1) + singleMovieInfo.poster_path;
        $scope.backdropPath = baseData.get_base_url() + baseData.get_backdrop_sizes(3) + singleMovieInfo.backdrop_path;

        if($scope.posterPath === baseData.get_base_url() + baseData.get_poster_sizes(1)){
            $scope.posterPath = "assets/default_poster.png"
        }

        if($scope.backdropPath === baseData.get_base_url() + baseData.get_poster_sizes(1)){
            $scope.backdrop = ""
        } else {

            $scope.backdrop = {
                "background-image": "url(" + $scope.backdropPath + ")",
                "background-size": "cover",
                "background-repeat": "no-repeat",
                "background-origin": "border-box",
                "background-position": "center"
            }

        }

        $scope.title = singleMovieInfo.title;
        $scope.tagline = singleMovieInfo.tagline;
        $scope.overview = singleMovieInfo.overview;

        $scope.voteAverage = singleMovieInfo.vote_average;

        $scope.trailerLink = "http://www.youtube.com/watch?v=" + singleMovieInfo.videos.results[0].key;

    }

    return MovieController;

});