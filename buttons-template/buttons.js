var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var div = document.getElementById("container");
var img = document.getElementById("img1");
var body = document.getElementByTagName("BODY");
var Btnvalue1 = 0;
var Btnvalue2 = 0;
var Btnvalue3 = 0;


button1.innerHTML = Btnvalue1;

button1.onclick = btn1;

function btn1(){
	Btnvalue1++;
	button1.innerHTML = Btnvalue1;
	div.style.backgroundImage = "url(images/bg1.jpg)";
	img.src = "images/1.jpg";
	button1.style.backgroundColor = "red";
	button2.style.backgroundColor = "green";
	button3.style.backgroundColor = "green";
	button1.disabled = true;
	button2.disabled = false;
	button3.disabled = false;
} 

button2.innerHTML = Btnvalue2;

button2.onclick = btn2;

function btn2(){
	Btnvalue2++;
	button2.innerHTML = Btnvalue2;
	div.style.backgroundImage = "url(images/bg2.jpg)";
	img.src = "images/2.jpg";
	button1.style.backgroundColor = "green";
	button2.style.backgroundColor = "red";
	button3.style.backgroundColor = "green";
	button1.disabled = false;
	button2.disabled = true;
	button3.disabled = false;
}


button3.innerHTML = Btnvalue3;

button3.onclick = btn3;

function btn3(){
	Btnvalue3++;
	button3.innerHTML = Btnvalue3;
	div.style.backgroundImage = "url(images/bg3.jpg)";
	img.src = "images/3.jpg";
	button1.style.backgroundColor = "green";
	button2.style.backgroundColor = "green";
	button3.style.backgroundColor = "red";
	button1.disabled = false;
	button2.disabled = false;
	button3.disabled = true;
}

