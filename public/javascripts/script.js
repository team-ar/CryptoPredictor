//////                            Sing In Variable


document.addEventListener('DOMContentLoaded', () => {

    const login = document.getElementById("login")
    const singup = document.getElementById("signup")
  
        // const singup2 = document.getElementById("singup2")

    const loginBox = document.getElementById("login-box")
    const signupBox = document.getElementById("signup-box")


    if (login !== null) {

        login.onclick = e => {

            //loginBox.style.transform = "translateX(-400px)"
            
            if (loginBox.style.transform === "translateX(-400px)") {
                loginBox.style.transform = "translateX(400px)"
            } else {
                loginBox.style.transform = "translateX(-400px)"
            }
           
            console.log(loginBox.style)
        }
    }



    const singupEvent = e => {

        signupBox.style.transform = "translateX(-400px)"
            
            if (signupBox.style.right === "400px") {
                signupBox.style.transform = "translateX(400px)"
            }
           
            console.log(signupBox.style)
        
        
    }

    if (singup !== null) {

        singup.onclick = singupEvent
    }

    // singup2.onclick = singupEvent


    singup.onclick = singupEvent
    // singup2.onclick = singupEvent



}, false);

