let chrono = document.querySelector('.days')

// Get the user's birthdate from the input
const birthDateInput = new Date(document.getElementById('birthDate').value);
let currentDate = birthDateInput;
function inChrono() {
    chrono.innerHTML = parseFloat(chrono.innerHTML) + 1
    currentDate.setDate(birthDateInput.setDate()+1);
}

// If no birthdate is selected, show an alert
if (!birthdateInput) {
    alert('Please enter your birthdate.');
    return;
}
