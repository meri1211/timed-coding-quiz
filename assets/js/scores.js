// grabbing the elements with js
let highscoresOl = document.getElementById('highscores');
let userInitials = document.createElement('li');
userInitials.textContent = localStorage.getItem('userInfo');
highscoresOl.appendChild(userInitials);
let clearScoresBttn = document.querySelector('#clear');

//clearing the highscores by setting the innerHtml of the li to empty string.
clearScoresBttn.addEventListener('click', function(){
    userInitials.innerHTML = "";
})
