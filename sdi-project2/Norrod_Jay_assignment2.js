//  SDI Project 2 Functions and What not
//  Jay Norrod
//  SDI January 2012

//********************Variables
var a_pilots[];
var a_helicopter[];
var discExists = false;
var discPriority = 0;
var a_discrepancies["landing light", "bird strike", "Comm 2"];
var canFlyNights = true;
var isGrounded = false;


//********************methods (or functions whatever you want to call them)
var hasLanded = function (helicopter); 				// Procedure
var isBroken = function (pilot, discrepancy); 		// Boolean Function
var checkPriority = function (priority); 			// Number function
var orderPart = function (priority, part); 			// string function
var notifyPilots = function (priority, a_pilots[]); // array function


//******************** "The Code"

