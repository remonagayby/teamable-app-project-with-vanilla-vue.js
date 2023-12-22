function handleEditProfile() {

    var name = document.getElementsByTagName("b")[0].textContent
    var inputName = document.getElementsByTagName("input")[0]
    inputName.value = name

    var email = document.getElementsByTagName("b")[1].textContent
    var inputEmail = document.getElementsByTagName("input")[1]
    inputEmail.value = email

    var interests = document.getElementsByTagName("b")[2].textContent
    var inputInterests = document.getElementsByTagName("input")[2]
    inputInterests.value = interests

    document.getElementById("edit-view").style.display = "block"
    document.getElementById("display-view").style.display = "none"
}

function handleUpdateProfile() {

    var updatedName = document.getElementsByTagName("input")[0].value
    var name = document.getElementsByTagName("b")[0]
    name.textContent = updatedName

    var updatedEmail = document.getElementsByTagName("input")[1].value
    var email = document.getElementsByTagName("b")[1]
    email.textContent = updatedEmail

    var updatedInterests = document.getElementsByTagName("input")[2].value
    var interests = document.getElementsByTagName("b")[2]
    interests.textContent = updatedInterests

    document.getElementById("edit-view").style.display = "none"
    document.getElementById("display-view").style.display = "block"
}