//****************************variables
var myEmail = "jonathan@aol.com";
var mySite = "https://jonathan.com/something";
var myDigits = "928-261-3275";

//****************************functions
var checkEmail = function (email){  //validates the format of an email address

	var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return reEmail.test(email); // return true if format matches

}

var checkURL = function (url){
	var reURL = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i; // this won't accept bitly or shortened links
	return reURL.test(url);
}

var phoneCheck = function (yoNumba){
	var reNumber = /^(\d{3})[-](\d{3})[- ](\d{4})$/;
	return reNumber.test(yoNumba);
}

//****************************Proof that I'm a programming ninja

//Email check
if (checkEmail(myEmail)){console.log("email is valid")}
else{console.log("HACKER ALERT!  You suck as a hacker, you entered the wrong format")};
//URL check
if (checkURL(mySite)){console.log("Web Page is most likely valid")}
else{console.log("Your webpage isn't real, get out of here.")};
//
if (phoneCheck(myDigits)){console.log("It's for real y'all")}
else{ console.log("She's playin you man..  It ain't real")};