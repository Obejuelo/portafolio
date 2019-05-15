// Send message
let formContact = document.getElementById('form-contact');
let spinner = document.getElementById('spinner');
const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let progress = `
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `;
let success = `
                <div class="alert alert-success" role="alert">
                    Send Success
                </div>
            `

formContact.addEventListener('submit', (e) => {
    e.preventDefault();

    spinner.innerHTML = progress;

    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let message = document.getElementById('input-message').value;

    let params = {
        "name": name,
        "email": email,
        "message": message,
    }

    emailjs.send('gmail_service', 'website_template', params)
        .then(() => {
            spinner.innerHTML = success;
            setTimeout(() => {
                spinner.innerHTML = '';
            }, 3000);
            name.value = '';
            email.value = '';
            message.value = '';
        }, function (err) {
            console.log("Send email failed!\r\n Response:\n " + err);
        });
});