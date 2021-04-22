let form = document.querySelector('.formWithValidation')
let validateBtn = form.querySelector('.validateBtn')
let from = form.querySelector('.from')
let password = form.querySelector('.password')
let passwordConfirmation = form.querySelector('.passwordConfirmation')
let where = form.querySelector('.where')
let message = form.querySelector('.message')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
    let fields = form.querySelectorAll('.field')
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
            var error = document.createElement('div')
            error.className = 'error'
            error.style.color = 'red'
            error.innerHTML = 'Cannot be blank'
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
})



