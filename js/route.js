document.querySelector('nav').addEventListener('click', function(e){
    if(e.target.classList.contains('github')){
        Controller.githubRoute();
    }else if(e.target.classList.contains('movie')){
        Controller.movieRoute();
    }else{
        Controller.homeRoute();
    }
})