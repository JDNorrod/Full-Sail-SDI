//  SDI Project 3 Objects, Mutators and some guy named JSON
//  Jay Norrod
//  SDI January 2012

//********************Global Variables
var a_pilots = ["Chad", "Barb", "Jon"];
var a_helicopter = ["183CB", "856BP", "376HS"];
var discExists = true;
var discPriority = 2;
var a_discrepancies = ["landing light", "Master Blade", "Comm 2"];
var canFlyNights = true;
var isGrounded = false;

//********************Objects
var theSupervisors = [	
	supv1 = {vacation: false, shiftLeader: "Chuck", days: ["mon", "tues", "weds"]},
	supv2 = {working: false, shiftLeader: "Kelly", days: ["thurs", "fri", "sat"]}];
var maintReport = function (item) { //construct end object

	var tailNumber = "";
	var setTail = function (num){  //sets the tail number of the helicopter
		tailNumber = num;
		return tailNumber;
	}
	
	var status = "";
	var setStatus = function (newStatus) {  //set the up/down status
		status = newStatus;
		return status;
	}
	
	var hours = 356;
	var addHours = function (addHours){	//add hours to the current hour total and return new value
		return (hours + addHours);
	}
	
	var getFlier = function (){		//return day/night flier
		return "day";
	}
	
	var lastReport = function (json) {	//json info should be passed in from main function, print yesterdays report
		for (var i = 0; i < json.allHelicopters.length; i++){
			var copter = json.allHelicopters[i]; //here copter == each object within the allHeli array...
			console.log("Tail Number: " + copter.tailNumber + " can fly: " + copter.typeFlier + " has " + copter.hours
			+ " flight hours and is currently " + copter.status + ".");
		}
	}
	
/*	var handleData = function (json) {
	for (var i = 0; i < json.allHelicopters.length; i++){
		var copter = json.allHelicopters[i]; //here copter == each object within the allHeli array...
		console.log("Tail Number: " + copter.tailNumber + " can fly: " + copter.typeFlier + " has " + copter.hours
		+ " flight hours and is currently " + copter.status + ".");
	}
}*/
	
	return {
		"addHours":		addHours,
		"setStatus":	setStatus,
		"getFlier": 	getFlier,
		"lastReport":	lastReport,
		"setTail":		setTail,
//		"handleData":	handleData
	}
};			
				
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
	
	var heliType;
	var faaCode = 34;
	var reference = "Maintenance Manual";
	
	if (helicopter === "856BP") { 
		heliType = "AS350"; 
	}
	else {
		heliType = "EC120"; 
	}
	
	var orderForm = "We need an " + heliType + " " + part + " which can be referenced from the " + reference + " under FAA code #" + faaCode + ".";
	
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

var checkShift = function (supervisor, day){ //pass in object to compare to the day
	
	for(var i = 0; i < supervisor.length; i++){ //for each obj (or index) in the array...
		console.log("Checking the Calendar...");
		var daysArray = supervisor[i].days;    
		for (var j = 0; i < daysArray.length; j++){ //for each string in the "days" array...
			console.log("Referencing shifts...");
			if (daysArray[j] === "mon"){ //look for "mon"
				console.log("Looking up Employee ID...");
				return supervisor[i];
			}
		}
	}
};

/*(var handleData = function (json) {
	for (var i = 0; i < json.allHelicopters.length; i++){
		var copter = json.allHelicopters[i]; //here copter == each object within the allHeli array...
		console.log("Tail Number: " + copter.tailNumber + " can fly: " + copter.typeFlier + " has " + copter.hours
		+ " flight hours and is currently " + copter.status + ".");
	}
}*/
//******************** "The Code"

//if you delete this comment the program won't work right

var scenario1 = 1;
var a_pilotsNotified = [];
var currentDay = "mon";
hasLanded(a_helicopter[scenario1]);

if (isBroken(a_pilots[scenario1], discExists)) {  // if the helicopter is broken
	console.log("Let's see who's the shift leader monday...");
	if (currentDay === "mon"){
		var currentSupv = checkShift(theSupervisors, currentDay);
		console.log(currentSupv["shiftLeader"] + " is the supervisor for today.  I'll let them know.");
	}
}

console.log("We have " + mechsAvailable(discPriority) + " mechanics to help work on this.");
console.log(orderPart(a_helicopter[scenario1], a_discrepancies[scenario1]));
a_pilotsNotified = notifyPilots(discPriority, a_pilots);
for (i = 0; i < a_pilotsNotified.length; i++){
	console.log(a_pilotsNotified[i] + ", ");
}
console.log("have been notified of the maintenance we will be doing, let's get to work!");
console.log("Now that the maintenance is finished, let's update the report...");

console.log("Changes to the report are as follows: ");
var mondayReport = maintReport(json2);
console.log(mondayReport.setTail("856BP") + " now has " + mondayReport.addHours(11) + " hours, is a "  + mondayReport.getFlier() +
" flier but it is currently " + mondayReport.setStatus("down") + ".");
console.log("Yesterday's report was: ");
mondayReport.lastReport(json2);
//mondayReport.handleData(json2);