// Send message
let formContact = document.getElementById('form-contact');
let spinner = document.getElementById('spinner');
let progress = `
                <div class="spinner-border text-info" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            `;
let success = `
                <div class="alert alert-success" role="alert">
                    Send Success
                </div>
            `;

formContact.addEventListener('submit', (e) => {
    e.preventDefault();

    spinner.innerHTML = progress;

    let name = document.getElementById('input-name');
    let email = document.getElementById('input-email');
    let message = document.getElementById('input-message');

    let params = {
        "name": name.value,
        "email": email.value,
        "message": message.value,
    }

    emailjs.send('service_suomcgj', 'template_i63ftmc', params)
        .then(() => {
            spinner.innerHTML = success;
            setTimeout(() => {
                spinner.innerHTML = '';
            }, 3000);
            name.value = '';
            email.value = '';
            message.value = '';
        }, function (err) {
            spinner.innerHTML = '';
            alert("Send email failed!\r\n Response:\n " + JSON.stringify(err))
        });
});