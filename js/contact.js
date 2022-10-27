(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('IbenpzMbi8ur27YY5');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_5u4xa2u', 'template_5oo37pj', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function ValidarEmail() {
    var emailadress= document.getElementById('email-2')
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validRegex.test(emailadress.value)) {
        Swal.fire({
            icon: 'success',
            title: 'Thank you',
            text: 'Pronto nos pondremos en contacto!',
            
        });
        document.form.email.focus();
        reset()
        return true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hay un error en los datos ingresados, por favor corrobore los mismos y reintente',
            
        });

        document.getElementById("email-2").focus();
        return false;
    }
}

function reset() {
    document.getElementById("contact-form").reset();
    }
