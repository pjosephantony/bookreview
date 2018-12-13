var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
	text: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	}
});

module.exports = mongoose.model("Comment", commentSchema);

//EMBED METHOD
// var postSchema = mongoose.Schema({
// 		title: String,
// 		description: String
// });
// var Post = mongoose.model("Post", postSchema);
//
// var userSchema = mongoose.Schema({
// 	name: String,
// 	email: String,
// 	posts: [postSchema]
// });
// var User = mongoose.model('User', userSchema);
//
// var newUser = new User({
// 	name: "joseph antony",
// 	email: "antony.j@husky.neu.edu"
// });
//
// newUser.posts.push({
// 	title: "kfkjkjd",
// 	description: "kjkjskjksjksjkj"
// });
//
// newUser.save();

//REFERENCE METHOD
// var userSchema = mongoose.Schema({
// 	name: String,
// 	email: String,
// 	posts: [{
// 	type: mongoose.Schema.Types.ObjectId,
// 	ref: Post
// }]
// });

// Post.create({
// 	title: "jjjkjljj",
// 	description: "dkjkjskjskj"
// }, function(err, post){
// 	if(err){
// 		console.log("err");
// 	} else {
// 		User.find({name: "bob"}, function(err, foundUser){
// 			if(err){
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(post);
// 				foundUser.save(function(err, user){
// 					if(err){
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				})
// 			}
// 		})
// 	}
// })


//ACCESSING THE REFERENCE ASSOCIATION FROM User
// User.findOne({name: "bob"}).populate('posts').exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log(user);
// 	}
// });
