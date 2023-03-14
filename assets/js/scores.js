// grabbing the elements with js
let highscoresOl = document.getElementById('highscores');
let userInitials = document.createElement('li');
userInitials.textContent = localStorage.getItem('userInfo');
highscoresOl.appendChild(userInitials);
let clearScoresBttn = document.querySelector('#clear');