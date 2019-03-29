const Controller = {
    githubRoute (){
        View.inputUser();
    
        document.querySelector('#searchUser').addEventListener('keyup', function (e){
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
    }
}

document.querySelector('#movie').addEventListener('click', function (){
    View.inputMovie();

    const movieTitle = document.querySelector('#searchUser');

    document.querySelector('#search').addEventListener('click', function(e){

        
        Model.getMovies(movieTitle.value)
            .then(data =>{
                
                View.showMoviePoster(data.Search);
                const movies = document.querySelector('.movie');
                return movies;
            })
            .then(movies =>{
                movies.addEventListener('click', function (e){

                    if(e.target.parentElement.classList.contains('movie-poster')){

                        const movieTitle = e.target.parentElement.textContent.trim();
                        
                        Model.getMovie(movieTitle)
                            .then(data => console.log(data.Genre))
                    }
                })
            })
    })
})

