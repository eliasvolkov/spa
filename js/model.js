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
        return fetch(`http://www.omdbapi.com/?apikey=f0d54359&s=${movie}`)
            .then(res => res.json())
            .then(data => data)
            .catch(err => err)
    }


    
}

