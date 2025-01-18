document.getElementById('birthDate').addEventListener('click', function () {
    // Get the user's birthdate from the input
    const birthdateInput = document.getElementById('birthDate').value;

    // If no birthdate is selected, show an alert
    if (!birthdateInput) {
        alert('Please enter your birthdate.');
        return;
    }

    // Convert the birthdate string into a Date object
    const birthdate = new Date(birthdateInput);

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in time (milliseconds)
    const timeDifference = currentDate - birthdate;

    // Convert milliseconds into days
    const daysLived = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display the number of days lived
    document.getElementById('daysLived').textContent = `Days lived: ${daysLived}`;

    // Historical events and their corresponding dates (as Date objects)
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

    // Check if it is user's birthday
    let userEvent = 'No significant events yet!';
    if (daysLived==365){
        //console.log("Happy Birthday");
    }
    }

    // Display the relevant event
    //document.getElementById('event').textContent = `Event: ${userEvent}`;


 
   
);
