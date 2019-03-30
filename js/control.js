const Controller = {
    githubRoute (){
        View.inputUser();
    
        document.querySelector('#searchInput').addEventListener('keyup', function (e){
            const userName = e.target.value;
            
                
                Model.getUser(userName)
                    .then(user => {
                        
                        if(user.message == 'Not Found'){
                            View.showAlert('Sorry, user is not found')
                        }else{
                            View.showUser(user);
                        }
                    })
                    .catch(err => err);
            
        });
    },

    movieRoute(){
        View.inputMovie();

    const movieTitle = document.querySelector('#searchInput');

    document.querySelector('#search').addEventListener('click', function(e){

        Model.getMovies(movieTitle.value)
            .then(data =>{
                if(data.Response == "False"){
                    View.showAlert('Sorry, movie is not found or there are too many results. Please, change your request');
                }else{
                    View.showMovies(data.Search);
                    const movies = document.querySelector('.responce-fild');
                    View.clearFields();
                    return movies;
                } 
            })
            .then(movies =>{
                movies.addEventListener('click', function (e){

                    if(e.target.parentElement.classList.contains('movie-poster')){

                        const movieTitle = e.target.parentElement.textContent.trim();
                        
                        Model.getMovie(movieTitle)
                            .then(movie => {
                                View.showMovieDescr(movie);
                            })
                    }
                })
            })
        
        })
    },

    homeRoute(){
        View.homeContent();
    }
}


