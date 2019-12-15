var title = document.getElementById("title");
var story = document.getElementById("description");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var container = document.getElementById("game-container");
var item = document.getElementById("inventoryItem");
var body = document.getElementsByTagName("BODY")[0];
var items = {vingerafdruk:false, phone:false, alarm:false};

title.innerHTML = "test";
story.innerHTML = "test";


//standaard opmaak
body.style.color = "#0c04e0";
button1.style.position = "absolute";
button1.style.left = "200px";
button1.style.top = "200px";
button1.style.width = "230px";
button1.style.height = "75px";
button1.style.fontSize = "20px";

button2.style.position = "absolute";
button2.style.bottom = "200px";
button2.style.left = "200px";
button2.style.width = "230px";
button2.style.height = "75px";
button2.style.fontSize = "20px";

button3.style.position = "absolute";
button3.style.bottom = "200px";
button3.style.right = "200px";
button3.style.width = "230px";
button3.style.height = "75px";
button3.style.fontSize = "20px";

title.style.marginLeft = "200px";
title.style.fontSize = "50px";

story.style.marginLeft = "200px";
story.style.fontSize = "25px";

//einde standaard opmaak
//failed function
function failed(failedstory) {
	title.innerHTML = "Mission failed";
	title.style.left = "1%";
	title.style.top = "1%";
	title.style.color = "#FFF";
	title.style.visibility = "visible";

	story.style.visibility = "visible";
	story.style.color = "#FFF";
	story.innerHTML = failedstory;

	body.style.backgroundColor = "#000";
	body.style.backgroundImage = "none";

	button1.style.visibility = "hidden";

	button2.style.visibility = "visible";
	button2.style.left = "74%";
	button2.style.top = "68%";
	button2.innerHTML = "Try again";
	button2.onclick = function() {
		location.reload();
	}

	button3.style.visibility = "hidden";

	item.style.visibility = "hidden";
}
//

function start() {
	
	title.style.visibility = "visible";
	title.innerHTML = "Rob the robber";

	story.style.visibility = "hidden";

	item.style.visibility = "hidden";

	body.style.backgroundImage = "url(img/robber.jpg)";
	body.style.backgroundSize = "cover";

	button1.style.left = "43%";	
	button1.innerHTML = "Start game";
	button2.style.visibility = "hidden";
	button3.style.visibility = "hidden";
	button1.onclick = function() {
		gameStory();
	}
}

function gameStory() {
	title.style.visibility = "visible";
	title.innerHTML = "Game story";

	story.style.visibility = "visible";
	story.innerHTML = "In deze game ben je een uitvinder die een nieuw vliegtuig heeft ontworpen, maar nu is je disign gestolen uit je appartement.<br>Om het ontwerp terug te krijgen ga je op zoek naar de dader en ga je het ontwerp terug stelen.";

	item.style.visibility = "hidden";
	item.style.position = "absolute";
	// item.style. = "";
	// item.style. = "";
	// item.src = "";

	body.style.backgroundImage = "url(img/robber.jpg)";
	body.style.backgroundSize = "cover";

	button1.innerHTML = "";
	button1.style.visibility = "hidden";
	
	button2.innerHTML = "";
	button2.style.visibility = "hidden";

	button3.innerHTML = "Volgende -->";
	button3.style.visibility = "visible";
	button3.disabled = false;
	button3.onclick = function() {
		appartement();
	}

}

function appartement() {
	title.style.visibility = "visible";
	title.innerHTML = "Appartement";

	story.style.visibility = "visible";
	story.innerHTML = "Zoek voor een manier om de inbreker te identificeren";

	body.style.backgroundImage = "url(img/backgroundappartement.jpg)";
	body.style.backgroundSize = "cover";


	button1.innerHTML = "";
	button1.style.visibility = "hidden";

	button2.style.visibility = "visible";
	button2.innerHTML = "<-- Terug";
	button2.onclick = function() {
		 gameStory();
	}

	button3.innerHTML = "Volgende kamer";
	if (items["vingerafdruk"] == false) {
		button3.disabled = true;
	}
	else {
		button3.disabled = false;
	}
	button3.onclick = function(){
		slaapkamer();
	}

	if (items["vingerafdruk"] == false) {
		item.style.visibility = "visible";
	}
	else {
		item.style.visibility = "hidden";
	}
	
	item.style.position = "absolute";
	item.style.left = "46%";
	item.style.top = "67%";
	item.style.width = "1.5%";
	item.style.opacity = "0.4";
	item.src = "img/fingerprint.webp";
	item.onclick = function() {
		item.style.visibility = "hidden";
		items["vingerafdruk"] = true;
		button3.disabled = false;
	}
}

function slaapkamer() {
	title.innerHTML = "Slaapkamer";
	title.style.visibility = "visible";
	title.style.color = "#0c04e0";

	body.style.color = "#0c04e0";

	story.innerHTML = "Zoek je mobiel";
	story.style.visibility = "visible";
	
	if (items["phone"] == false) {
		item.style.visibility = "visible";
	}
	else {
		item.style.visibility = "hidden";
	}		
	item.style.left = "90%";
	item.style.top = "76%";
	item.src = "img/phone.png";
	item.onclick = function() {
		item.style.visibility = "hidden";
		items["phone"] = true;
		button3.disabled = false;
	}

	body.style.backgroundImage = "url(img/backgroundslaapkamer.jpg)";

	button1.innerHTML = "";
	button1.style.visibility = "hidden";

	button2.innerHTML = "<-- Terug";
	button2.onclick = function() {
		appartement();
	}
	button2.style.visibility = "visible";
	button2.style.bottom = "200px";
	button2.style.right = "200px";

	

	button3.innerHTML = "open je telefoon";
	button3.style.visibility = "visible";
	if (items["phone"] == false) {
		button3.disabled = true;
	}
	else {
		button3.disabled = false;
	}
	button3.onclick = function() {
		phone();
	}
	button3.style.top = "70.7%";
	button3.style.left = "77.6%";
}

function phone() {
	title.innerHTML = "Telefoon";
	title.style.color = "#FFF";
	title.style.visibility = "visible";

	story.style.visibility = "hidden";

	body.style.backgroundImage = "url(img/backgroundphone.png)";

	button1.style.left = "43.5%";
	button1.style.top = "28%";
	button1.innerHTML = "Politie";
	button1.style.visibility = "visible";
	button1.onclick = function () {
		failed("De dief is opgepakt, maar nu wordt jou disign ook vrijgegeven als bewijs waardoor het niks meer waard is.");
	}

	button2.innerHTML = "<-- Terug";
	button2.style.visibility = "visible";
	button2.onclick = function() {
		slaapkamer();
	}
	
	button3.style.left = "43.5%";
	button3.style.top = "40%";
	button3.innerHTML = "Prive detective";
	button3.style.visibility = "visible";
	button3.onclick = function() {
		startrob();
	}
}

function startrob() {
	title.style.visibility = "hidden";

	story.style.visibility = "visible";
	story.innerHTML = "De detective heeft het adress van de dader gevonden (daar ben je nu). Ga nu jou design terugstelen";

	body.style.backgroundImage = "url(img/backgroundvoordeur.png)";
	body.style.backgroundSize = "cover";

	item.style.visibility = "hidden";
	item.style.opacity = "1";
	item.src = "img/knop-rood.png";
	if (items["alarm"] == false) {

		button3.style.visibility = "visible";
		
		item.onclick = function (){
			item.src = "img/knopgroen.png";
			items["alarm"] = true;

		}
		button3.onclick = function() {
			button3.style.visibility = "hidden";
			item.style.visibility = "visible";
		}
	}
	else {
		button3.style.visibility = "hidden";
		item.src = "img/knopgroen.png";
		item.style.visibility = "visible";
	}
	
	item.style.left = "84%";
	item.style.top = "86%";

	button1.style.visibility = "visible";
	button2.style.visibility = "visible";
	

	button1.innerHTML = "Probeer de deur open te maken";
	button1.onclick = function() {
		if (items["alarm"] == false) {
			failed("Er stond nog een alarm op de deur. (tip: zoek het uitknop van het alarm systeem)");
		}
		else {
			deurenkeuzeeen();
		}
		
	}

	button2.style.left = "9%";
	button2.style.bottom = "8%";
	button2.onclick = function () {
		phone();
	}

	button3.style.left = "79%";
	button3.style.top = "84%";
	button3.innerHTML = " ";

}

function deurenkeuzeeen() {
	title.style.visibility = "visible";
	title.innerHTML = "3";

	body.style.backgroundImage = "url(img/backgrounddeur.jpg)";
	body.style.color = "#0c04e0";

	story.innerHTML = "Je hebt 1 mogelijkheid om een deur open te maken. tip het nummer staat op de voordeur pagina .";

	button1.innerHTML = "open de deur";
	button1.onclick = function() {
		failed("Je heb de verkeerde deur gekozen.");
	}

	item.style.visibility = "hidden";

	button2.onclick = function() {
		startrob();
	} 

	button3.style.visibility = "visible";
	button3.innerHTML = "volgende deur";
	button3.onclick = function() {
		deurenkeuzetwee();
	}
}

function deurenkeuzetwee() {
	title.innerHTML = "1";

	body.style.color = "red";
	body.style.backgroundImage = "url(img/backgrounddeurblauw.jpg)";

	button1.onclick = function() {
		win();
	}

	button2.onclick = function() {
		deurenkeuzeeen();
	}

	button3.onclick = function() {
		deurenkeuzedrie();
	}
}

function deurenkeuzedrie() {
	title.innerHTML = "4";

	body.style.color = "red";
	body.style.backgroundImage = "url(img/backgrounddeurgroen.jpg)";

	button1.onclick = function() {
		failed("Je heb de verkeerde deur gekozen.");
	}

	button2.onclick = function() {
		deurenkeuzetwee();
	}

	button3.onclick = function() {
		deurenkeuzevier();
	}
	button3.style.visibility = "visible";
}

function deurenkeuzevier() {
	title.innerHTML = "2";

	body.style.color = "red";
	body.style.backgroundImage = "url(img/backgrounddeurgeel.jpg)";

	button1.onclick = function() {
		failed("Je heb de verkeerde deur gekozen.");
	}

	button2.onclick = function() {
		deurenkeuzedrie();
	}

	button3.style.visibility = "hidden";
}

function win() {
	title.innerHTML = "Gefeliciteerd";
	title.style.color = "green";

	story.innerHTML = "je hebt het disign teruggestolen en verkocht"
	story.style.color = "green";

	body.style.backgroundImage = "url(img/backgroundEnd.jpg)";

	button1.style.visibility = "hidden";
	button3.style.visibility = "hidden";

	button2.style.visibility = "visible";
	button2.style.left = "74%";
	button2.style.top = "68%";
	button2.innerHTML = "Restart";
	button2.onclick = function() {
		location.reload();
	}
}




start();


