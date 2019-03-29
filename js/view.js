const View = {

    inputUser(){
        const content = document.querySelector('.content');
        content.innerHTML = `
        <div class="search card card-body mt-5">
            <h1>Search GitHub Users</h1>
            <p class="lead">Enter a username to fetch a user profile and repos</p>
            <input type="text" id="searchUser" class="form-control" placeholder="GitHub Username...">
         </div>
         <div class="user"></div>`
    },

    showUser(user){
        const content = document.querySelector('.user');
        content.innerHTML = `
			<div class="card card-body mt-5">
			<div class="row">
			<div class="col-md-3">
					<img src="${user.avatar_url}" class="img-fluid mb-2" alt="userAvatar">
					<a href="${user.html_url}" class="btn btn-primary btn-block mt-4" style="weight: 100%">View profile</a>
			</div>
			<div class="col-md-9">
					<div class="card-body">
							<span class="badge badge-primary">Public repos: ${user.public_repos}</span>
							<span class="badge badge-secondary">Followers: ${user.followers}</span>
							<span class="badge badge-success">Following: ${user.following}</span>
						<ul class="list-group mt-3">
							<li class="list-group-item ">Username: ${user.login}</li>
							<li class="list-group-item">Bio: ${user.bio}</li>
							<li class="list-group-item">Location: ${user.location}</li>
							<li class="list-group-item">Member since: ${user.created_at}</li>
						</ul>
					</div>
			</div>
			</div>
		</div>
			`;
    },

    inputMovie(){
        const content = document.querySelector('.content');
        content.innerHTML = `
        <div class="search card card-body mt-5">
                  <h1>Search Movie</h1>
                  <p class="lead">Enter a movie title to fetch a movie</p>
                <div class="row">
                  <div class="col-sm-9">
                      <input type="text" id="searchUser" class="form-control" placeholder="Movie title">
                  </div>
                  <div class="col-sm-3">
                      <button type="button" id="search" class="btn btn-success">Success</button>
                  </div>
                </div>
            </div>
            <div class="movie row p-2 pt-5"></div>`
    },
    showMoviePoster(movies){
        const content = document.querySelector('.movie');
        let output = '';
        movies.forEach(movie =>{
             output += `
                <div class="col-md-2">
                    <div class="movie-poster">
                        <img id="img" src="${movie.Poster}" style="width = 100%;">
                        <p>${movie.Title}</p>
                    </div>
                </div> 
            `
            content.innerHTML = output;
        });
        
    },

    showAlert(textAlert){
        const userField = document.querySelector('.user');
        userField.innerHTML =`
          <div class="alert alert-danger mt-5" role="alert">
            ${textAlert}
          </div>`;
      }
}