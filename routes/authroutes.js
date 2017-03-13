var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");
var middleware = require("../middleware");


router.get("/", function(req, res){
	res.render("home");
})



router.get("/register", function(req, res){
	res.render("register");
});

// handles sign up logic
router.post("/register", function(req, res){
	var newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, function(err, user){
		if(err){
			req.flash("error", err.message);
			return res.redirect("/register");
		}
		passport.authenticate("local")(req, res, function(){
			req.flash("success", "Welcome to Book Review "+ user.username);
			res.redirect("/books");
		});
	});
});

// login logic

router.get("/login", function(req, res){
	res.render("login");
});

router.post("/login", passport.authenticate("local",
	{
		successRedirect: "/books",
		failureRedirect: "/login"
	}), function(req, res){});

// logout

router.get("/logout", function(req, res){
	req.logout();
	req.flash("success", "Logged you out!!")
	res.redirect("/books");
});


module.exports = router;