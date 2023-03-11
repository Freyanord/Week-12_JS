const user = document.getElementById('username');
const avatar = document.querySelector('.avatar');
const comment = document.querySelector('.comment-area');
const chat = document.querySelector('.chat');


function capitalize(user){
    user.value = user.value.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()});
}
user.addEventListener('input', function (){
    capitalize(this);
});


button.addEventListener('click', total());

function total (){
    chat.textContent = document.querySelector('.comment-area').value
    avatar.value = document.querySelector('.avatar').src
}







//document.querySelector('.chat').addEventListener

/*chat.addEventListener('click', () => {
    document.getElementById('#comment-area').textContent
});*/

/*function capitalize(userName) {
    return userName.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()})
}

//userName.addEventListener

/*function total() {
    
}*/

//button.addEventListener('click', total);

/*document.getElementById('comment-add').onclick = function() {
    let commentName = document.getElementById('username');
    let userPhoto = document.getElementById('avatar');
    let commentBody = document.getElementById('comment');
}*/

//document.getElementById('comment-add').onclick = myClick