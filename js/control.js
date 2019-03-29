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


