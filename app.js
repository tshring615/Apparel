
const submitButton = document.getElementById('submit');
const errorMsg = document.getElementById('error-msg');
const errorIcon = document.getElementById('error-icon');
const email = document.getElementById('email');

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


submitButton.addEventListener('click', e => {
    e.preventDefault();

    if (!email.value.match(pattern) || isEmpty(email.value)) {
        errorIcon.classList.add('show__error');
        errorMsg.classList.add('show__error');
        email.classList.add('input__error')
    }
})

errorIcon.addEventListener('click', () => {
    errorIcon.classList.remove('show__error');
        errorMsg.classList.remove('show__error');
        email.classList.remove('input__error');
        email.value = "";
        email.focus();
})

