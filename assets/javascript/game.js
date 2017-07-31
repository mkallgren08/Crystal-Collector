// Starting ready-function to ensure smooth running
$(document).ready(function() {

	// Declare global variables here:
	//--------------------------------------------------------
	var currentAmount = 0
	var targetAmount =0
	var winExped = 0
	var loseExped = 0
	var unitType = ["kg", "lbs", "x 10^12 nanograms", "$ (thousands)", "buttloads", "pounds. Sterling. Like 'Doctor Who' money"]
	var emeraldVal = 0
	var rubyVal = 0
	var sapphireVal = 0
	var diamondVal = 0
	var crystalValArray = []
	var indexArrayVal = ""

	resetGame();

	$("#wins").html(winExped);
	$("#losses").html(loseExped);
	$("#score-actual").html(currentAmount);
	$("#score-goal").html(targetAmount);
	// Defines one of two losing scenarios - the other is defined in the "camp return" button
	function loseCheck(){
		if (currentAmount > targetAmount){
			alert("Boss: I heard that the equipment broke down after getting overloaded. We'll try again - don't overload the gear next time!");
			 loseExped++;
			 $("#losses").html(loseExped);
			 resetGame();
		}
	};
	//--------------------------------------------------------
	function resetGame(){
		crystalValArray = [];
		currentAmount = 0;
		$("#score-actual").html(currentAmount);
		generateTargetVal();
		generateUnit();
		generateCrystalVal(emerald);
		generateCrystalVal(sapphire);
		generateCrystalVal(ruby);
		generateCrystalVal(diamond);	
	}
	// -------------------------------------------------------
	// Functions for generating random values - considering using "this" to make a generic case! :) 
	//--------------------------------------------------------
	function generateCrystalVal(crystal){
		var generatedVal= Math.floor(Math.random() * 12) + 1;
		if (crystal === emerald){
			emeraldVal = generatedVal
			crystalValArray.push(emeraldVal);
			console.log("Emerald: "+emeraldVal);

		} else if (crystal === sapphire){
			sapphireVal = generatedVal
			crystalValArray.push(sapphireVal);
			console.log("Sapphire: "+sapphireVal);

		} else if (crystal === ruby){
			rubyVal = generatedVal;
			crystalValArray.push(rubyVal);
			console.log("Ruby: "+rubyVal);	
		
		} else if (crystal === diamond){
			diamondVal = generatedVal;
			crystalValArray.push(diamondVal);
			console.log("Diamond: "+diamondVal);	
		}
	console.log(crystalValArray)
	};

	function generateTargetVal(){
		var generatedVal = Math.floor(Math.random() * 120) + 1;
		if (generatedVal < 19){
			generatedVal = generatedVal +18
		}
		targetAmount = generatedVal;
		console.log("Target Amount = "+targetAmount);
		//console.log("Generated Value = "+generatedVal)
		$("#score-goal").html(targetAmount);
	};

	function generateUnit(){
		var k = Math.floor(Math.random() * unitType.length);
		console.log(k)
		var generatedUnit = unitType[k];
		console.log("Units = "+ generatedUnit);
		$(".unit-value").html(generatedUnit);
	};

	//--------------------------------------------------------
	// On-click functions for buttons
	//--------------------------------------------------------
	function collectGem(crystal){		
		if (crystal === "emerald"){
			indexArrayVal = 0;
		} else if (crystal === "ruby"){
			indexArrayVal = 1;
		} else if (crystal === "sapphire"){
			indexArrayVal = 2;
		} else if (crystal === "diamond"){
			indexArrayVal = 3;
		};
		var collectVal = crystalValArray[indexArrayVal]
		console.log(crystal + ": " + collectVal);
		currentAmount = currentAmount + collectVal;
		$("#score-actual").html(currentAmount);
	}

	$(".crystal-btn").on("click", function(){
		crystal = $(this).attr("id");
		console.log(crystal);
		collectGem(crystal);
		loseCheck();

		//collectGem(crystal);
	});	
	 
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
		resetGame(); 		 	
		 	
		 };
	}); // End of Return-to-Camp Function

}); // ---End of ready-function
