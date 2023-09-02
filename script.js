document.addEventListener('DOMContentLoaded', () => {
const nameInput = document.getElementById("first-name");
const surnameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const submitPasswordInput = document.getElementById("submit-password");

const criteriaDivs = {
    'first-name': document.getElementById('thename'),
    'last-name': document.getElementById('thelastname'),
    'email': document.getElementById('theemail'),
    'phone-number': document.getElementById('thephone'),
    'password': document.getElementById('thepassword'),
    'submit-password': document.getElementById('thesubmitpassword')
};

const inputsArray = [nameInput,surnameInput,emailInput,phoneInput,passwordInput,submitPasswordInput];
inputsArray.forEach((input) => {
    input.addEventListener('click', () => {
        const inputId = input.id;
        for (const key in criteriaDivs) {
            criteriaDivs[key].style.visibility = 'hidden';
        }

        // Show the corresponding criteria div
        if (criteriaDivs[inputId]) {
            criteriaDivs[inputId].style.visibility = "visible";
        }
    });
});
});