const form = document.getElementById('form');
const nume = document.getElementById('nume');
const email = document.getElementById('email');
const prenume = document.getElementById('prenume');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const numeValue = nume.value.trim();
    const emailValue = email.value.trim();
    const prenumeValue = prenume.value.trim();
    

    if(numeValue === '') {
        setError(nume, 'Numele este necesar');
    } else {
        setSuccess(nume);
    }

    if(emailValue === '') {
        setError(email, 'Email-ul este necesar');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Email-ul nu are structura necesara');
    } else {
        setSuccess(email);
    }

    if(prenumeValue === '') {
        setError(prenume, 'Prenumele este necesar');
    }  else {
        setSuccess(prenume);
    }
};
