const user = document.getElementById('username');
const avatar = document.getElementById('url-input');
const comment = document.querySelector('.comment-area');
const chat = document.querySelector('.chat');

user.addEventListener('input', function (){
    capitalize(this);
});

function capitalize(user){
    user.value = user.value.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()});
}

button.addEventListener ('click', () => {
    chat.textContent = chat.textContent.replace(/Viagra/g, "***");
    
    chat.textContent = (user.value + ':' comment.value);
});


/*function checkSpam() {
    chat.textContent = chat.textContent.replace(/Viagra/g, "***");
 }

//button.addEventListener('click', total);

/*button.addEventListener('click', checkSpam);
button.addEventListener('click', addUser);
//button.addEventListener('click', showAvatar);

function total () {
    chat.textContent = document.querySelector('.comment-area').value;
}

 
function addUser () {
    chat.textContent = document.getElementById('username').value;
}


 /*function showAvatar () {
    chat.textContent = document.getElementById('url-input').value;
 }*/

//document.querySelector('.chat').addEventListener

/*chat.addEventListener('click', () => {
    document.getElementById('#comment-area').textContent
});*/

/*function capitalize(userName) {
    return userName.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()})
}


/*function total() {
    
}*/

//button.addEventListener('click', total);

/*document.getElementById('comment-add').onclick = function() {
    let commentName = document.getElementById('username');
    let userPhoto = document.getElementById('avatar');
    let commentBody = document.getElementById('comment');
}*/

//document.getElementById('comment-add').onclick = myClick