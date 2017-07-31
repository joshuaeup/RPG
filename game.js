$(document).ready(function() {
	var chosenCharacter;
	var chosenOpponent;
	var heroHp;
	var heroHealth;
	var oppHp;
	var oppHealth;
	var opponentArr = [];
	

	
	

	$(".image-two").hide();
	$(".arena").hide();
	$("#attack-button").hide();
	$("#next-opponent").hide();
	$(".center").hide();
	$("#newGame").hide();
	$(".actions").hide();


	function randomHigh() {
		var addRandom = Math.floor(Math.random() * 9) + 1;
		return addRandom * 10;
	}

	function randomLow() {
		var addRandom = Math.floor(Math.random() * 3) + 1;
		return addRandom * 10;
	}

	var supermanObj = {
		hp : randomHigh(),
	
		health : 490
	};

	$("#superman").on("click", function(){
		chosenCharacter = "superman";

		

		chosenHero();
		
		
	});

	var batmanObj = {
		hp : randomLow(),
		health : 500
	};


	$("#batman").on("click", function(){
		chosenCharacter = "batman";
		
		
		chosenHero();
	
		
	});

	var wonderWomanObj = {
		hp : randomHigh(),
		health : 350
	};


	$("#wonder-woman").on("click", function(){
		chosenCharacter = "wonder-woman";
	
		chosenHero();
	
		
	});

	var flashObj = {
		hp : randomLow(),
		health : 400
	};


	$("#flash").on("click", function(){
		chosenCharacter = "flash";
	
		chosenHero();
	

		
	});
	$(".power-one").append(" " + supermanObj.hp);
	$(".power-two").append(" " + batmanObj.hp);
	$(".power-three").append(" " + wonderWomanObj.hp);
	$(".power-four").append(" " + flashObj.hp);

	$(".health-one").append(" " + supermanObj.health);
	$(".health-two").append(" " + batmanObj.health);
	$(".health-three").append(" " + wonderWomanObj.health);
	$(".health-four").append(" " + flashObj.health);

	function chosenHero() {
		heroHp = 10;
		if (chosenCharacter == "superman") {
			heroHealth = supermanObj.health;

			
			$("#superman-op").hide();
			
			var heroImg1 = 'https://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125';
			$("#arena-one").attr("src", heroImg1);
		
		}

		else if(chosenCharacter == "batman") {
			heroHealth = batmanObj.health;

			$("#batman-op").hide();

			var heroImg2 = 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg';
			$("#arena-one").attr("src", heroImg2);
			
		}

		else if(chosenCharacter == "wonder-woman") {
			heroHealth = wonderWomanObj.health;

			$("#wonder-woman-op").hide();

			var heroImg3 = 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/06/06-wonder-woman.w710.h473.jpg';
			$("#arena-one").attr("src", heroImg3);
		
		}

		else if(chosenCharacter == "flash") {
			heroHealth = flashObj.health;

			$("#flash-op").hide();

			var heroImg4 = 'http://cdn.playbuzz.com/cdn/0cf0c5c0-371a-4299-abf9-6a4daa4ab320/42b43452-95b0-462e-8e94-8a84a5bdf6ef.png';
			$("#arena-one").attr("src", heroImg4);
			
		}
		
		$(".image").hide();
		$("#choose-text").html("Choose Your Opponent");
		$(".image-two").show();
		
			
	}

	$("#superman-op").on("click", function(){
		chosenOpponent = "superman";
	
		var hp = 25; 
		var health = 150;
		
		chosenOpp();
		
	});

	$("#batman-op").on("click", function(){
		chosenOpponent = "batman";
	
		var hp = 20; 
		var health = 110;
	
		chosenOpp();
		
	});

	$("#wonder-woman-op").on("click", function(){
		chosenOpponent = "wonder-woman";
	
		var hp = 30; 
		var health = 120;
	
		chosenOpp();
		
	});

	$("#flash-op").on("click", function(){
		chosenOpponent = "flash";
	
		var hp = 25; 
		var health = 100;
		
		chosenOpp();

		
	});
	$(".oppower-one").append(" " + supermanObj.hp);
	$(".oppower-two").append(" " + batmanObj.hp);
	$(".oppower-three").append(" " + wonderWomanObj.hp);
	$(".oppower-four").append(" " + flashObj.hp);

	$(".ophealth-one").append(" " + supermanObj.health);
	$(".ophealth-two").append(" " + batmanObj.health);
	$(".ophealth-three").append(" " + wonderWomanObj.health);
	$(".ophealth-four").append(" " + flashObj.health);

	function chosenOpp() {
			if (chosenOpponent == "superman") {
				opponentArr += chosenOpponent;
				$("#superman-op").hide();
				oppHp = supermanObj.hp;
				oppHealth = supermanObj.health;

				var opImg1 = 'https://vignette3.wikia.nocookie.net/superman/images/2/27/Superman-dcuo.jpg/revision/latest?cb=20110901025125';
				$("#arena-two").attr("src", opImg1);
			
			}

			else if(chosenOpponent == "batman") {
				opponentArr += chosenOpponent;
				$("#batman-op").hide();
				oppHp = batmanObj.hp;
				oppHealth = batmanObj.health;

				var opImg2 = 'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg';
				$("#arena-two").attr("src", opImg2);
			
			}

			else if(chosenOpponent == "wonder-woman") {
				opponentArr += chosenOpponent;
				$("#wonder-woman-op").hide();
				oppHp = wonderWomanObj.hp;
				oppHealth = wonderWomanObj.health;

				var opImg3 = 'https://pixel.nymag.com/imgs/daily/vulture/2017/06/06/06-wonder-woman.w710.h473.jpg';
				$("#arena-two").attr("src", opImg3);
			
			}

			else if(chosenOpponent == "flash") {
				opponentArr += chosenOpponent;
				$("#flash-op").hide();
				oppHp = flashObj.hp;
				oppHealth = flashObj.health;


				var opImg4 = 'http://cdn.playbuzz.com/cdn/0cf0c5c0-371a-4299-abf9-6a4daa4ab320/42b43452-95b0-462e-8e94-8a84a5bdf6ef.png';
				$("#arena-two").attr("src", opImg4);
				
				
			}
			
			$(".image-two").hide();
			$("#choose-text").hide();
			$(".arena").show();
			$("#attack-button").show();
			


			console.log("character: " + chosenCharacter);
			console.log("opponent: " + chosenOpponent);
			$("#img-holder-one").show();
				$("#img-holder-two").show();
				$(".heroHealthBar").html(heroHealth);
				$(".oppHealthBar").html(oppHealth);
		}
			arena();
			

			function newOpponent() {
					
					alert(chosenOpponent + " has been taken down");
					$("#firstDisplay").hide();
					$("#secondDisplay").hide();
					$("#img-holder-two").hide(1500);
					$("#attack-button").hide();
					$("#next-opponent").show();

					$("#next-opponent").on("click", function() {
						$("#img-holder-one").hide();
						$(".image-two").show();
						$("#next-opponent").hide();
						$("#attack-button").hide();		
					});
				
		}

		function gameOver() {
			$("#img-holder-one").hide();
			$("#img-holder-two").hide();
			$("#attack-button").hide();
			$(".center").show(2000);
			$("#newGame").show(4000);
			
			$("#newGame").on("click", function() {
				 location.reload();
			});
		}



		function completion() {
			$("#firstDisplay").hide();
			$("#secondDisplay").hide();
			$("#attack-button").hide();
			$("#next-opponent").hide();
			$("#img-holder-one").hide();
			$("#img-holder-two").hide();
			
			$("#newGame").show();
			$("#newGame").on("click", function() {
				 location.reload();
			});
			
			

			setTimeout(function(){
				$("body").css("background-image","url(http://cdn2-www.gamerevolution.com/assets/uploads/2015/10/file_11861_batmanarkhamknight4.jpg)");
				$("#newGame").show();

			    $(".center").html("Welcome to the Justice League");
			}, 3000);
			
			$("body").css("background-image","url(https://static.giantbomb.com/uploads/original/0/30/2762035-bak_sshot130.jpg)");
			$(".center").attr("style", "color:red");

			$("#newGame").attr("style", "color:blue");
			$("#newGame").attr("style", "color:yellow");

			$(".center").html("Congradulations");
			$("#newGame").hide();

		
					}


			function arena() {
				

				$("#img-holder-one").show();
				$("#img-holder-two").show();
				
				$("#attack-button").on("click", function() {

				
				$(".heroHealthBar").html(heroHealth);
				$(".oppHealthBar").html(oppHealth);

				$("#firstDisplay").show();
				$("#secondDisplay").show();
				$(".actions").show();

				$("#firstDisplay").html("<h3>You've attacked " + chosenOpponent + " and did " + heroHp + " damage.</h3>");
				$("#secondDisplay").html("<h3>You've been hit by " + chosenOpponent + " and recieved " + oppHp + " damage</h3>");

					oppHp = randomHigh();
					oppHealth = oppHealth - heroHp;
					heroHealth = heroHealth - oppHp;
					heroHp += 27;

					
					
					if(heroHealth <= 0) {
						gameOver();

					} 

					else if(oppHealth <= 0) {
						newOpponent();
						

					 } 
					else if (opponentArr.length >= 23) {
						completion();
					}
					
					
				});	
			}	
});