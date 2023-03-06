//This is for email validation. Ensures format is correct
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//Accessing name
let nm = document.getElementById('name');

//Accessing email
let em = document.getElementById('email');

//Accessing message 
let msg = document.getElementById('message');

// Accessing event target object
let sb = document.getElementById('submit-btn');

// Creating event handler
function formValidate() {
    
//Creating an empty bucket to store data 
    let data = {};

//Creating a bucket for errors (array)
    let errors = [];

//Validating name
// if name entered is white space or empty, give error message
    if (nm.value === ''|| nm.value == null) {
        errors.push('Full name is missing');
    } else {
        //otherwise, collect data
        data.name = nm.value;
    }

//Validating email
//1. if email entered does not match pattern, give incorrect format error 2. if email is not entered at all, give missing field error
    if (em.value) {
        if(pattern.test(em.value)) {
            data.email = em.value;
        } else {
            errors.push('Invalid email');
        }
    } else {
        errors.push('Email is missing');
    }

//Validate message
// if message entered is white space or empty, give error message
    if (msg.value === '' || msg.value == null) {
        errors.push('Message is missing');
    } else {
        //otherwise, collect data
        data.message = msg.value;
    }

//Print data OR errors.
    if (errors.length === 0) {
        console.log(data);
    } else {
        console.log(errors);
    }
}

// Registering button for click event 
sb.addEventListener('click', formValidate);
