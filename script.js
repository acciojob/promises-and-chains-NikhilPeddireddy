//your JS code here. If required.
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission
    
    const ageInput = document.getElementById('age').value;
    const nameInput = document.getElementById('name').value;
    
    if (!ageInput || !nameInput) {
        alert('Please fill out all fields.');
        return;
    }
    
    const age = parseInt(ageInput);
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${nameInput}. You can vote.`);
            } else {
                reject(`Oh sorry ${nameInput}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });
    
    promise.then(message => {
        alert(message);
    }).catch(error => {
        alert(error);
    });
});