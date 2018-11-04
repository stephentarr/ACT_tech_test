/**
 * Created by Shane on 02/03/2016.
 */
define(function () {

    return function() {

        return {

            replace : true,

            scope : {

                page : "=uiNavPagination",
                sep : "@uiNavPaginationSep",
                link : "@uiNavPaginationLink",
                prevLabel : "@uiNavPaginationPrevLabel",
                nextLabel : "@uiNavPaginationNextLabel",
                totalPages : "=uiNavPaginationTotalPages"

            },

            link: function ($scope) {

                $scope.link = $scope.link != undefined ? $scope.link : "/";
                $scope.page = $scope.page != undefined ? $scope.page : 1;
                $scope.prevLink = $scope.link + '?page=' + ($scope.page - 1);
                $scope.nextLink = $scope.link + '?page=' + ($scope.page + 1 );
                $scope.sep = $scope.sep != undefined ? $scope.sep : ' | ';
                $scope.prevLabel = $scope.prevLabel != undefined ? $scope.prevLabel : 'Previous Page';
                $scope.nextLabel = $scope.nextLabel != undefined ? $scope.nextLabel : 'Next Page';

            },

            templateUrl: 'partials/ui_nav_pagination.html'

        };

    }
});