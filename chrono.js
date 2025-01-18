let chrono = document.querySelector('.days')

// Get the user's birthdate from the input
let birthDateInput = new Date(document.getElementById('birthDate').value);
let currentDate = birthDateInput;
let msg = "There is no important event today";

function inChrono() {
    chrono.innerHTML = parseFloat(chrono.innerHTML) + 1;
    currentDate.setDate(birthDateInput.setDate()+1);
}

const events = [
    {
        date: new Date('2001-09-11'),  // Example: 9/11
        e: 'The 9/11 attacks occurred.'
    },
    {
        date: new Date('2004-02-04'),  // Example: Facebook launched
        e: 'Facebook was launched.'
    },
    {
        date: new Date('2008-11-04'),  // Example: Barack Obama elected
        e: 'Barack Obama was elected President of the United States.'
    },
    {
        date: new Date('2020-03-11'),  // Example: COVID-19 pandemic declared
        e: 'COVID-19 pandemic was declared by WHO.'
    },

]

for (const ev in events){
    if (currentDate==ev[date]){
        msg = ev[e];
    } else if (currentDate.getMonth() == birthDateInput.getMonth() && currentDate.getDay() == birthDateInput.getDay() ){
        msg = "Happy Birthday!"
    }
}






