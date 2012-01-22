//****************************variables
var myEmail = "jonathan.@aol.com";


//****************************functions
var checkEmail = function (email){  //validates the format of an email address
	var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return reEmail.test(email); // return true if format matches
}





//****************************Proof that I'm a programming ninja

if (checkEmail(myEmail)){
	console.log("email is valid");
}
else{
	console.log("HACKER ALERT!  You suck as a hacker, you entered the wrong format");
}

