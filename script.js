document.getElementById('registerForm')
.addEventListener('submit', function (event) {
    event.preventDefault()
    validateForm()
})

function validateForm() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirmPassword').value

    let isValid = true

    if (name.length < 3) {
        showError('nameFeedback', 'Name must be at least 3 characters')
        isValid = false
    } else {
        showSuccess("nameFeedback", `Hello, ${name}`)
    }

    if(!validateEmail(email)) {
        showError('emailFeedback', "Invalid email address")
        isValid = false
    } else {
        showSuccess('emailFeedback', "Email looks good")
    }

    if(password.length < 6) {
        showError('passwordFeedback', 'Password must be at least 6 characters')
        isValid = false
    } else {
        showSuccess('passwordFeedback', "Password is strong")
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordFeedback', "Passwords do not match")
        isValid = false
    } else {
        showSuccess("confirmPasswordFeedback", "passwords match")
    }


    if(isValid) {
        alert('Form submitted successfully')
    }
}

function showError(elementId, message) {
    const element = document.getElementById(elementId)
    element.className = "error"
    element.innerText = message
}

function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    element.className = "success"
    element.innerText = message
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    return re.test(email)
}