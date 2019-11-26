var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var div = document.getElementById("container");
var img = document.getElementById("img1");
var Btnvalue1 = 0;
var Btnvalue2 = 0;
var Btnvalue3 = 0;
var	active1 = false;
var	active2 = false;
var	active3 = false;





button1.innerHTML = Btnvalue1;

button1.onclick = function(){
	if (active1 = false) {
		Btnvalue1++;
		button1.innerHTML = Btnvalue1;
		div.style.backgroundImage = "url(images/bg1.jpg)";
		img.src = "images/1.jpg";
		button1.style.backgroundColor = "red";
		button2.style.backgroundColor = "green";
		button3.style.backgroundColor = "green";
		active1 = true;
		active2 = false;
		active3 = false;
	}
	else {
		alert("je kan deze button nu niet gebruiken")
	}
} 

button2.innerHTML = Btnvalue2;

button2.onclick = function(){
	if (active2 = false) {
		Btnvalue2++;
		button2.innerHTML = Btnvalue2;
		div.style.backgroundImage = "url(images/bg2.jpg)";
		img.src = "images/2.jpg";
		button1.style.backgroundColor = "green";
		button2.style.backgroundColor = "red";
		button3.style.backgroundColor = "green";
		active1 = false;
		active2 = true;
		active3 = false;
	}
	else{
		alert("je kan deze button nu niet gebruiken");
	}
} 

button3.innerHTML = Btnvalue3;

button3.onclick = function(){
	if (active3 = false) {
		Btnvalue3++;
		button3.innerHTML = Btnvalue3;
		div.style.backgroundImage = "url(images/bg3.jpg)";
		img.src = "images/3.jpg";
		button1.style.backgroundColor = "green";
		button2.style.backgroundColor = "green";
		button3.style.backgroundColor = "red";
		active1 = false;
		active2 = false;
		active3 = true;
	}
	else{
		alert("je kan deze button nu niet gebruiken");
	}

} 
