const Model  = {
    
    // Methods For Github
    getUser(user){
        const clientID = 'cd1928775dffeab9ceb1';
        const clientSecret = 'cb8b17b979a6168ccdd20ab27328e8356a77e508';
        return fetch(`https://api.github.com/users/${user}?client_id=${clientID}&client_secret=${clientSecret}`)
            .then(res => res.json())
            .then(user => user)
            .catch(err => err);
    },

    getMovie(movie){
        const movieKey = 'c5caa3fa735c6527a5756cea29cb17f3';
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${movieKey}&query=${movie}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    }


    
}

