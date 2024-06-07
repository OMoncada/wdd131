document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            saveToLocalStorage();
            window.location.href = 'thankyou.html'; // Redirige al usuario a thankyou.html
        }
    });
});

function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const postalCode = document.getElementById('postalCode').value;
    const email = document.querySelector('input[type="email"]').value;
    const textFields = document.querySelectorAll('input[pattern]');

    // Password validation
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    // Postcode validation (numbers only)
    if (!/^\d+$/.test(postalCode)) {
        alert('El código postal debe contener solo números.');
        return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Validation of text fields (letters and spaces only)
    for (const field of textFields) {
        const pattern = new RegExp(field.getAttribute('pattern'));
        if (!pattern.test(field.value)) {
            alert(`Por favor, ingrese un valor válido para el campo ${field.previousElementSibling.textContent}.`);
            return false;
        }
    }

    return true;
}

function saveToLocalStorage() {
    const formData = new FormData(document.getElementById('registrationForm'));
    const user = {};

    formData.forEach((value, key) => {
        user[key] = value;
    });

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function showThankYouMessage() {
    const registrationContainer = document.getElementById('registrationContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');

    // Ocultar el formulario y mostrar el mensaje de agradecimiento
    registrationContainer.style.display = 'none';
    thankYouMessage.style.display = 'block';
}

function resetForm() {
    document.getElementById('registrationForm').reset();
}