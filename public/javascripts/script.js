//////                            Sing In Variable


document.addEventListener('DOMContentLoaded', () => {

    const login = document.getElementById("login")
    const singup = document.getElementById("signup")
    const singup2 = document.getElementById("singup2")

    const loginBox = document.getElementById("login-box")
    const signupBox = document.getElementById("signup-box")

    login.onclick = e => {
        if (loginBox.style.display === "block") loginBox.style.display = "none"
        else loginBox.style.display = "block"

        signupBox.style.display = "none"
    }


    const singupEvent = e => {
        if (signupBox.style.display === "block") signupBox.style.display = "none"
        else signupBox.style.display = "block"

        loginBox.style.display = "none"
    }

    singup.onclick = singupEvent
    singup2.onclick = singupEvent



}, false);


//                        Original Variable

// document.addEventListener('DOMContentLoaded', () => {

//     const login = document.getElementById("login")
//     const signup = document.getElementById("signup")

//     const loginBox = document.getElementById("login-box")
//     const signupBox = document.getElementById("signup-box")

//     login.onclick = e => {
//         if (loginBox.style.display === "block") loginBox.style.display = "none"
//         else loginBox.style.display = "block"

//         signupBox.style.display = "none"
//     }

//     signup.onclick = e => {
//         if (signupBox.style.display === "block") signupBox.style.display = "none"
//         else signupBox.style.display = "block"

//         loginBox.style.display = "none"
//     }

// }, false);


/////                           Log In Variable


// document.addEventListener('DOMContentLoaded', () => {

//     const login = document.getElementById("login")
//     const login2 = document.getElementById("login2")
//     const signup = document.getElementById("signup")

//     const loginBox = document.getElementById("login-box")
//     const signupBox = document.getElementById("signup-box")

//     const loginEvent = e => {
//         if (loginBox.style.display === "block") loginBox.style.display = "none"
//         else loginBox.style.display = "block"

//         signupBox.style.display = "none"
//     }

//     login.onclick = loginEvent
//     login2.onclick = loginEvent

//     signup.onclick = e => {
//         if (signupBox.style.display === "block") signupBox.style.display = "none"
//         else signupBox.style.display = "block"

//         loginBox.style.display = "none"
//     }


// }, false);