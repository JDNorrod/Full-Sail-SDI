//  SDI Project 2 Functions and What not
//  Jay Norrod
//  SDI January 2012

//********************Variables
var a_pilots = ["Chad", "Barb", "Jon"];
var a_helicopter = ["183CB", "856BP", "376HS"];
var discExists = true;
var discPriority = 2;
var a_discrepancies = ["landing light", "bird strike", "Comm 2"];
var canFlyNights = true;
var isGrounded = false;

//********************methods (or functions whatever you want to call them)
var hasLanded = function (helicopter){  			// Procedure
	console.log("Well it's just about the end of shift, let's check on the helicopters so we can leave a good passdown");
	if (helicopter === "856BP"){
		console.log("856BP is scheduled for tonight, let's find the pilot to see if there are any problems.");
	}
	else{
		console.log("This is an EC120, which isn't scheduled for tonight.");
	}
	return;
}

var isBroken = function (pilot, discrepancy){ 		// Boolean Function
	console.log("We need to find out if anything is broken on the helicopter, let's ask the pilot " + pilot + ".");
	if (discrepancy){
		console.log("We'll need to do some troubleshooting, there's some kind of problem.");
		return discrepancy;
	}
	else{
		console.log("Everything seems to be in working order, let's go home.");
		return discrepancy;
	}
}

var mechsAvailable = function (priority){ 			// Number function
	var availableWorkers = 0;
	
	while (availableWorkers < priority){
		console.log("We need to find more workers..  Excuse me, can anyone help me with this?");
		console.log("I have a priority " + priority + " discrepancy and need " + (priority - availableWorkers) + " more people to help.");
		availableWorkers++;							
	}
	console.log("Thanks, that's all the workers I'll need.");
	
	return availableWorkers;
}

var orderPart = function (helicopter, part){ 			// string function
	var heliType = "AS350";
	var faaCode = 34;
	var reference = "Maintenance Manual";
	
	var orderForm = "We need an " + helicopter + part + " which can be referenced from the " + reference + " under FAA code #" + faaCode + ".";
	
	return orderForm;
}

var notifyPilots = function (priority, a_pilots){ 	// array function
	//I think the compiler is ignoring all my comments
	var maintHours = 7;
	var waitForParts = 3;
	var prepTime = 1;
	var message = "";
	var a_pilotsNotified = [];
	
	for (var i = 0; i < a_pilots.length; i++){
		console.log("Excuse me, " + a_pilots[i] + ", I wanted to let you know that the helicopter will be down for about " +
		(maintHours + waitForParts + prepTime) + " hours.");
		a_pilotsNotified.push(a_pilots[i]);
	}
	return a_pilotsNotified;
}


//******************** "The Code"

//if you delete this comment the program won't work right

var scenario1 = 1;
var a_pilotsNotified = 

hasLanded(a_helicopter[scenario1]);
isBroken(a_pilots[scenario1], discExists);
mechsAvailable(discPriority);
orderPart(a_helicopter[scenario1], a_discrepancies[scenario1]);
var a_pilotsNotified = notifyPilots(discPriority, a_pilots);
for (i = 0; i < a_pilotsNotified.length; i++){
	console.log(a_pilotsNotified[i] + ", ");
}
console.log("have been notified of the maintenance we will be doing, let's get to work!");
