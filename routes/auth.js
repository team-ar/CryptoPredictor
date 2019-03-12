const express = require("express");
const router = express.Router();


const User = require("../models/User");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// Randerizar formulario SIGNUP

// router.get("/signup", (req, res) => res.render("auth/signup"))

// Registrar datos formulario SIGNUP
router.post("/signup", (req, res, next) => {

  const { name, email, password } = req.body

  if (name.length === 0 || password.length === 0) {

    res.render('auth/signup', { errorMsg: 'Enter both email and password to sign up.' })
    return
  }

  User.findOne({ email }, `_id` )

    .then(userEmail => {

      if (userEmail !== null) {
        res.render("auth/signup", {
          errorMsg: `The email ${email} is already in use.`
        })
        return
      }
    })

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    User.create({ name, email, password: hashPass })

      .then(() => res.redirect("/"))
      .catch(error => {

        res.render("auth/signup", {errorMsg: 'Something went wrong. Try again later.'})
        console.log(error)
      
      })
      
})


// Randerizar formulario LOGIN

// router.get("/login", (req, res) => res.render("auth/login"))


router.post("/login", (req, res, next) => {

  console.log(req.body)

  const theEmail = req.body.email;
  const thePassword = req.body.password;

  if (theEmail === "" || thePassword === "") {
      res.render("auth/login", {
          errorMsg: "Please enter both, username and password to sign up."
      });
      return;
  }
  

  User.findOne({ "email": theEmail })
  .then(theUser => {
      if (!theUser) {
        res.render("auth/login", {
          errorMsg: `There isn't an account with email ${theEmail}.`
        })
        return
      }
      if (bcrypt.compareSync(thePassword, theUser.password)) {
        // Save the login in the session!
        req.session.currentUser = theUser;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          errorMsg: "Incorrect password"
        });
      }
  })
  .catch(error => next(error))

  
});


//LOGOUT

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});




module.exports = router;