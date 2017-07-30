// Declare global variables here:
//--------------------------------------------------------
var currentAmount = 100;
var targetAmount= 100;
var winExped = 0;
var loseExped = 0; 
var unitType = ["kg", "lbs", "x 10^12 nanograms", "$ (thousands)", "buttloads"]

//--------------------------------------------------------


// Starting ready-function to ensure smooth running
$(document).ready(function() {

	// -------------------------------------------------------
	// Functions for generating random values - considering using "this" 
	// to make a generic case! :) 
	//--------------------------------------------------------


	//--------------------------------------------------------
	// On-click functions for buttons - see above about using "this" 
	//for a geenric case, possibly using the crystal-btn class! 
	//--------------------------------------------------------

	 
	//--------------------------------------------------------
	// On-click function for return to camp - include elifs for the following:
	//--------------------------------------------------------
	$(".return-btn").on("click", function(){
		console.log(targetAmount);
		console.log(currentAmount);
		if (currentAmount < targetAmount*0.85){
			alert("Boss: I'm glad you're back, but we'll hardly make anything on this haul - I'm sorry, we need to do better.");
		 	loseExped++;
		 	$("#losses").html(loseExped);
			
		 } else {
			if (targetAmount*0.85 <= currentAmount && currentAmount < targetAmount*0.93){
				alert("Boss: Good to see you back. This is an acceptable haul, but try to get a little closer to our quota next time, okay?");
				winExped++;
				$("#wins").html(winExped);
				
			} else if (targetAmount*0.93 < currentAmount && currentAmount < targetAmount){
				alert("Boss: Good job! You didn't get all you could, but I respect you for not wanting to overload yourself and risk breaking equipment - or yourself!");
				winExped++;
				$("#wins").html(winExped);

			} else if (currentAmount = targetAmount){
				alert("Boss: You did a great job! You took literally all you could - enjoy a few days extra paid vacation this year.");
				winExped++;
				$("#wins").html(winExped);	
			}; 		 	
		 	
		 };
	}); // End of Return-to-Camp Function

}); // ---End of ready-function
