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


const events = [
    {
        date: new Date('2001-09-11'),  // Example: 9/11
        event: 'The 9/11 attacks occurred.'
    },
    {
        date: new Date('2004-02-04'),  // Example: Facebook launched
        event: 'Facebook was launched.'
    },
    {
        date: new Date('2008-11-04'),  // Example: Barack Obama elected
        event: 'Barack Obama was elected President of the United States.'
    },
    {
        date: new Date('2020-03-11'),  // Example: COVID-19 pandemic declared
        event: 'COVID-19 pandemic was declared by WHO.'
    },



];
