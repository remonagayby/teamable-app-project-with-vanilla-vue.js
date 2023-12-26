<template>
    <div id="display-view">
        <h1>User Profile</h1>
        <img :src="image" alt="">

        <span>Name: </span><b>Anna Smith</b>
        <hr>

        <span>Email: </span><b>anna.smith@example.com</b>
        <hr>

        <span>Interests: </span><b>coding</b>
        <hr>

        <span>Birthday Date: </span><b></b>
        <hr>

        <button onclick="handleEditProfile()">Edit Profile</button>
    </div>

    <div id="edit-view">
        <h1>User Profile</h1>
        <img :src="image" alt="">

        <span>Name: </span>
        <input type="text" placeholder="Anna Smith">
        <hr>

        <span>Email: </span>
        <input type="email" placeholder="anna.smith@example.com">
        <hr>

        <span>Interests: </span>
        <input type="text" placeholder="coding">
        <hr>

        <span>Birthday Date: </span>
        <input type="text" id="birthday">
        <hr>

        <button onclick="handleUpdateProfile()">Update Profile</button>
    </div>
</template>

<script>
    import image from "./image.jpeg"
    export default {
        name: "App",
        data() {
            return {
                image: image
            }
        },
        methods: {
            handleEditProfile() {

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
            },

            handleUpdateProfile() {

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
        }
    }
</script>

<style>
    img {
        width: 400px;
        height: 300px;
        display: block;
        margin-bottom: 40px;
    }

    div {
        width: 50%;
        margin: auto;
    }

    hr {
        width: 400px;
        margin: 25px 0;
    }

    button {
        width: 160px;
        height: 45px;
        font-size: 15px;
        border-radius: 5px;
    }

    button:hover {
        cursor: pointer;
    }

    input {
        width: 200px;
        font-size: 15px;
        padding: 10px;
    }

    #edit-view {
        display: none;
    }
</style>