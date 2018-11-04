define(function () {

    return function () {

        let base_url = "http://image.tmdb.org/t/p/";
        let poster_sizes = ['w300', 'w780', 'w1280', 'original'];
        let backdrop_sizes = ['w300', 'w780', 'w1280', 'original'];

        return {

            get_base_url : ()=>{

                return base_url

            },

            set_base_url : (url)=>{

                base_url = url;

            },

            get_poster_sizes : (size)=>{

                if(size && poster_sizes[size]){

                    return poster_sizes[size];
                }

                return poster_sizes;

            },

            set_poster_sizes : (size)=>{

                poster_sizes = size;

            },

            get_backdrop_sizes : (size)=>{

                if(size && backdrop_sizes[size]){

                    return backdrop_sizes[size];
                }

                return backdrop_sizes;

            },

            set_backdrop_sizes : (size)=>{

                backdrop_sizes = size;

            },

        };

    }

});
