const email = document.getElementById('email');

const country = document.getElementById('country');

const zip = document.getElementById('zip');

const password = document.getElementById('password');

const passwordConfirm = document.getElementById('password-confirm');

const button = document.querySelector('button');

email.addEventListener('focus', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Invalid Email address');
    } else {
        email.setCustomValidity('');
    };
});

passwordConfirm.addEventListener('input', (e) => {
    if (passwordConfirm.value !== password.value) {
        passwordConfirm.setCustomValidity('Password does not match');
    } else {
        passwordConfirm.setCustomValidity('');
    };
});

