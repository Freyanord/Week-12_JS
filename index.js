const user = document.getElementById('username');
const avatar = document.getElementById('url-input');
const comment = document.querySelector('.comment-area');
let chat = document.querySelector('.chat');
const button = document.querySelector('.button');

//https://i.pinimg.com/280x280_RS/ce/2c/e3/ce2ce3388fb2fd6d3687b41a558d9ad8.jpg

function capitalize(user){
    user.value = user.value.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()});
};

user.addEventListener('input', function () {
    capitalize(this);
});

function checkSpam() {
    chat.innerHTML = comment.value.replace(/(xxx|viagra)/gi,"***");
};

function addNewMessage () {
    chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="лицо" class="userimage">
    <p class="username">${user.value}</p>
    <p class="message" >${comment.value.replace(/(xxx|viagra)/gi, "***")}</p>
</div>`}; 

button.addEventListener('click', addNewMessage);




