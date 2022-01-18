//to open login
var btn = document.getElementById('show-login-btn');
var logIn = document.getElementById('log-in-form');
btn.addEventListener('click', () => {
    logIn.style.visibility = 'visible';
});
//close login
function closenmenu() {
    logIn.style.width = '0';
}
//to open sigin up
var btnsign = document.getElementById('show-sign-btn');
var sign = document.getElementById('y-sigin-in-form');
btnsign.addEventListener('click', openSign);

function openSign() {

    sign.style.visibility = 'visible';
}
//close siginup
function closenmenu2() {
    window.history.back();
}