//////                            Sing In Variable


document.addEventListener('DOMContentLoaded', () => {

    const login = document.getElementById("login")
    const signup = document.getElementById("signup")
    const signup2 = document.getElementById("signup2")

console.log(signup)

    const loginBox = document.getElementById("login-box")
    const signupBox = document.getElementById("signup-box")

    const cryptoCards = document.getElementsByClassName("crypto-cards")


    for(var i = 0; i < cryptoCards.length; i++) {
        cryptoCards[i].addEventListener("mouseenter", function( event ) {
           
            if(event.target.style.backgroundColor === "rgb(5, 132, 132)") event.target.style.backgroundColor = "rgb(3, 99, 99)"
            else event.target.style.backgroundColor = "rgb(160, 57, 59)"
        })
        cryptoCards[i].addEventListener("mouseleave", function( event ) {

            if(event.target.style.backgroundColor === "rgb(160, 57, 59)") event.target.style.backgroundColor = "rgb(241,86,89)"
            else event.target.style.backgroundColor = "rgb(5, 132, 132)"
        })
        
    }
        
 

    var interruptor = true
    var interruptor2 = true


    if (login !== null) {

        login.onclick = e => {

        if(interruptor){

            if (loginBox.style.transform === "translateX(-400px)") {
                loginBox.style.transform = "translateX(400px)"
                console.log('Cierro Login')
                interruptor2 = true
        
            } else if(interruptor) {
                console.log('Abro login')
                interruptor2 = false
                loginBox.style.transform = "translateX(-400px)"
            }

        }

           
        }
    }


    if( signup !== null ) {

        signup.onclick = e => {

            if (signupBox.style.transform === "translateX(-400px)") {
                signupBox.style.transform = "translateX(400px)"
                console.log('cierro Signup')
                interruptor = true
            } else if(interruptor2) {
                console.log('Abro Signup')
                interruptor = false
                signupBox.style.transform = "translateX(-400px)"
              
            }
    
        }

    }

    if( signup2 !== null ) {

        signup2.onclick = e => {
            console.log("hola")

            if (signupBox.style.transform === "translateX(-400px)") {
                signupBox.style.transform = "translateX(400px)"
                console.log('cierro Signup')
                interruptor = true
            } else if(interruptor2) {
                console.log('Abro Signup')
                interruptor = false
                signupBox.style.transform = "translateX(-400px)"
              
            }
    
        }

    }



    // if (singup !== null) {

    //     singup.onclick = singupEvent
    // }

    // singup.onclick = singupEvent
    // singup2.onclick = singupEvent



}, false);

