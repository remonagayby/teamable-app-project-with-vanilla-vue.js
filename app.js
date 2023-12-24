const datepicker = require("Datepicker.js")

function handleEditProfile() {

    new Datepicker('#birthday')

    var name = document.getElementsByTagName("b")[0].textContent
    var inputName = document.getElementsByTagName("input")[0]
    inputName.value = name

    var email = document.getElementsByTagName("b")[1].textContent
    var inputEmail = document.getElementsByTagName("input")[1]
    inputEmail.value = email

    var interests = document.getElementsByTagName("b")[2].textContent
    var inputInterests = document.getElementsByTagName("input")[2]
    inputInterests.value = interests

    var birthDay = document.getElementsByTagName("b")[3].textContent
    var inputBirthDay = document.getElementsByTagName("input")[3]
    inputBirthDay.value = birthDay

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {

    var updatedName = document.getElementsByTagName("input")[0].value
    var name = document.getElementsByTagName("b")[0]
    name.textContent = updatedName

    var updatedEmail = document.getElementsByTagName("input")[1].value
    var email = document.getElementsByTagName("b")[1]
    if (validator.isEmail(updatedEmail))
        email.textContent = updatedEmail
    else
        alert("wrong email format")

    var updatedInterests = document.getElementsByTagName("input")[2].value
    var interests = document.getElementsByTagName("b")[2]
    interests.textContent = updatedInterests

    var updatedBirthDay = document.getElementsByTagName("input")[3].value
    var birthDay = document.getElementsByTagName("b")[3]
    birthDay.textContent = updatedBirthDay

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}