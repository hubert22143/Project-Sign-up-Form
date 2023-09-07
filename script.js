document.addEventListener('DOMContentLoaded', () => {
const nameInput = document.getElementById("first-name");
const surnameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone-number-input");
const passwordInput = document.getElementById("password");
const submitPasswordInput = document.getElementById("submit-password");
const inputElements = document.querySelectorAll('input[id]');



const criteriaDivs = {
    'first-name': document.getElementById('thename'),
    'last-name': document.getElementById('thelastname'),
    'email': document.getElementById('theemail'),
    'phone-number-input': document.getElementById('thephone'),
    'password': document.getElementById('thepassword'),
    'submit-password': document.getElementById('thesubmitpassword')
};

const patterns = {
    'first-name': /^[A-Za-z]{4,}$/,
    'last-name': /^[A-Za-z]+$/,
    'email': /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
    'phone-number-input': /^\+\(\d{2}\)\d{9}$/,
    'password': /^.{6,}$/,
};

const inputIds = [
    'first-name',
    'last-name',
    'email',
    'phone-number-input',
    'password',
    'submit-password'
];
inputElements.forEach((inputElement) => {
    let timeoutId; // Variable to store the timeout ID
    inputElement.addEventListener('input', () => {
        const inputId = inputElement.getAttribute('id');
        const associatedDiv = document.querySelector(`.cryteria[data-input-id="${inputId}"]`);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            if (associatedDiv) {
                if (inputElement.classList.contains('valid')) {
                    associatedDiv.classList.add('valid');
                    associatedDiv.classList.remove('invalid');
                } else {
                    associatedDiv.classList.remove('valid');
                    associatedDiv.classList.add('invalid');
                }
            }
        }, 300); // Adjust the delay as needed
    });
});
inputIds.forEach(idInput => {
    const inputElement = document.getElementById(idInput);
    if (inputElement) {
        inputElement.addEventListener('input', () => {
            validateInput(inputElement, idInput);
        });
    }
});
function validateInput(inputElement,patternKey){
    const pattern = patterns[patternKey];
    const inputValue = inputElement.value;
    if(pattern.test(inputValue)){
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid')
    }else{
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
}

const inputsArray = [nameInput,surnameInput,emailInput,phoneInput,passwordInput,submitPasswordInput];

inputsArray.forEach((input) => {
    input.addEventListener('click', () => {
        const inputId = input.id;
        for (const key in criteriaDivs) {
            criteriaDivs[key].style.visibility = 'hidden';
        }

        if (criteriaDivs[inputId]) {
            criteriaDivs[inputId].style.visibility = "visible";
        }
    });
});
submitPasswordInput.addEventListener('input', passwordsMatch);
const submitPasswordDiv = criteriaDivs['submit-password'];
function passwordsMatch() {
    const passwordInput = document.getElementById("password");
    const submitPasswordInput = document.getElementById("submit-password");

    const passwordValue = passwordInput.value;
    const submitPasswordValue = submitPasswordInput.value;

   if(passwordValue===submitPasswordValue){
    submitPasswordDiv.style.color= "green";
    return true;
   }else{
    submitPasswordDiv.style.color= "red";
    return false;
   }
}
document.querySelector("form").addEventListener("submit", function (event) {
    if (!passwordsMatch()) {
        event.preventDefault();
        alert("Passwords do not match. Please re-enter them.");
    }
    let isAnyInputInvalid = false;
    inputElements.forEach((inputElement) => {
        if (inputElement.classList.contains('invalid')) {
            isAnyInputInvalid = true;
        }
    });

    if (isAnyInputInvalid) {
        event.preventDefault();
        alert("Please fill out all fields correctly.");
    }
});

});