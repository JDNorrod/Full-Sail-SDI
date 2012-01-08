//  SDI Project 2 Functions and What not
//  Jay Norrod
//  SDI January 2012

//********************Variables
var a_pilots["Chad", "Barb", "Jon"];
var a_helicopter["183CB", "856BP", "376HS"];
var discExists = true;
var discPriority = 0;
var a_discrepancies["landing light", "bird strike", "Comm 2"];
var canFlyNights = true;
var isGrounded = false;
var airCraftStatus[];


//********************methods (or functions whatever you want to call them)
var hasLanded = function (helicopter){  			// Procedure
	console.log("Well it's just about the end of shift, let's check on the helicopters so we can leave a good passdown");
	if (helicopter === "856BP"){
		console.log("856BP is scheduled for tonight, let's find the pilot to see if there are any problems");
	}
	else{
		console.log("This is an EC120, which isn't scheduled for tonight.");
	}
}

var isBroken = function (pilot, discrepancy){ 		// Boolean Function
	console.log("We need to find out if anything is broken on the helicopter, let's as the pilot " + pilot + ".");
	if (discrepancy){
		console.log("We'll need to do some troubleshooting, there's some kind of problem.");
		return discrepancy;
	}
	else{
		console.log("Everything seems to be in working order, let's go home");
		return discrepancy;
	}
}
var checkPriority = function (priority); 			// Number function
var orderPart = function (priority, part); 			// string function
var notifyPilots = function (priority, a_pilots[]); // array function


//******************** "The Code"

//if you delete this comment the program won't work right

