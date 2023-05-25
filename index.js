const user = document.getElementById('username');
const avatar = document.getElementById('url-input');
const comment = document.querySelector('.comment-area');
const chat = document.querySelector('.chat');
const button = document.querySelector('.button');

//https://i.pinimg.com/280x280_RS/ce/2c/e3/ce2ce3388fb2fd6d3687b41a558d9ad8.jpg

user.addEventListener('input', function () {
    capitalize(this);
});

function capitalize(user){
    user.value = user.value.replace(/(^|\s)\S/g,
    function(a) {return a.toUpperCase()});
};

function checkSpam() {
    chat.innerHTML = comment.value.replace(/Viagra/i, "***");
};

function addNewMessage () {
    chat.innerHTML = `<div class="container">
    <img src="${avatar.value}" alt="лицо" class="userimage">
    <p class="username">${user.value}</p>
    <p class="message" >${comment.value.replace(/Viagra/i, "***")}</p>
</div>`};

button.addEventListener('click', addNewMessage);




