const View = {
    homeContent(){
        const content = document.querySelector('.content');
        content.innerHTML = `
            <div class="jumbotron mt-5">
                    <h1 class="display-3">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4">
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            </div>
        `;
    },

    inputUser(){
        const content = document.querySelector('.content');
        content.innerHTML = `
        <div class="search card card-body mt-5">
            <h1>Search GitHub Users</h1>
            <p class="lead">Enter a username to fetch a user profile and repos</p>
            <input type="text" id="searchInput" class="form-control" placeholder="GitHub Username...">
         </div>
         <div class="responce-fild"></div>`
    },

    showUser(user){
        const content = document.querySelector('.responce-fild');
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
                      <input type="text" id="searchInput" class="form-control" placeholder="Movie title">
                  </div>
                  <div class="col-sm-3">
                      <button type="button" id="search" class="btn btn-success">Success</button>
                  </div>
                </div>
            </div>
            <div class="responce-fild row p-2 pt-5"></div>`
    },
    showMovies(movies){
        const content = document.querySelector('.responce-fild');
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

    showMovieDescr(movie){
        const content = document.querySelector('.responce-fild');
        const div = document.createElement('div');
        div.className = 'modal-movie';

        div.innerHTML = `
            <div class="row">
                <div class="card movie-descr col-md-8">
                    <span class="close">&times;</span>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <div class="movie-descr__img">
                                <img src="${movie.Poster}" class="card-img " alt="poster">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title text-muted">${movie.Title}</h3>
                            <div class="card-text ml-3 mb-2 text-success">
                                <i class="fa fa-clock-o mr-1"></i>
                                ${movie.Runtime}
                            </div>
                            <p class="card-text text-muted"><em>${movie.Plot}</em></p>
                            <p class="card-text text-muted">Actors: ${movie.Actors}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        content.appendChild(div);
        window.addEventListener('click', closeModal);

        function closeModal(e) {
            if(e.target.className == 'modal-movie' || e.target.className == 'close' ){
                content.removeChild(div);  
            }
        }
    },

    showAlert(textAlert){
        const content = document.querySelector('.responce-fild');
        content.innerHTML =`
          <div class="alert alert-danger mt-5" role="alert">
            ${textAlert}
          </div>`;
      },
    clearFields(){
        document.querySelector('#searchInput').value = '';
    }
}