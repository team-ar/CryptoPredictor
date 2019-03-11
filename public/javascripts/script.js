document.addEventListener('DOMContentLoaded', () => {

  const login = document.getElementById("login")
  const signup = document.getElementById("signup")

  const loginBox = document.getElementById("login-box")
  const signupBox = document.getElementById("signup-box")



  login.onclick = e => {
    if(loginBox.style.display === "block") loginBox.style.display = "none"
    else loginBox.style.display = "block"
      
    signupBox.style.display = "none"
  }

  signup.onclick = e => {
    if(signupBox.style.display === "block") signupBox.style.display = "none"
    else signupBox.style.display = "block"
    
    loginBox.style.display = "none"
  }



  




}, false);
