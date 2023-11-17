
let lbtn = document.getElementById('logIn');

lbtn.addEventListener('click', validateLoginForm);

function validateLoginForm() {
    lbtn.innerHTML = 'Processing';
    lbtn.disabled = true;

    window.location.href = 'dashboard.html';
}

let btn = document.getElementById('register');

btn.addEventListener('click', validateForm);

function validateForm() {
    btn.innerHTML = 'Processing';
    btn.disabled = true;

    window.location.href = 'dashboard.html';
}
