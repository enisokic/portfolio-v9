// var met betrekking tot menu (buttons etc.)
var openButton = document.querySelector("header > button");
var sluitButton = document.querySelector("nav button");
var menu = document.querySelector("nav");
var body = document.querySelector("body");

// var voor instellingen van de website
// var openInstellingenButton = document.querySelector(".open-instellingen");
// var sluitInstellingenButton = document.querySelector(".sluit-instellingen");

// var colorModeSectie = document.querySelector(".color-mode");
// var instellingen = document.querySelector(".instellingen");

// var systemButton = document.querySelector(".system-button");
// var lightModeButton = document.querySelector(".light-mode-button");
// var darkModeButton = document.querySelector(".dark-mode-button");

// Mobiele menu functie
openButton.addEventListener("click", openMenu);

function openMenu() {
	menu.classList.add("toon-menu");
	body.classList.add("disablescroll");
	// colorModeSectie.classList.add("hidden");
}

sluitButton.addEventListener("click", sluitMenu);
menu.addEventListener("click", sluitMenu);

function sluitMenu() {
	menu.classList.remove("toon-menu");
	body.classList.remove("disablescroll");
	// colorModeSectie.classList.remove("hidden");
}

// // functie voor instellingen van de website
// openInstellingenButton.addEventListener("click", function () {
// 	instellingen.classList.remove("hidden");
// 	openInstellingenButton.classList.add("hidden");
// });

// sluitInstellingenButton.addEventListener("click", function () {
// 	openInstellingenButton.classList.remove("hidden");
// 	instellingen.classList.add("hidden");
// });

// systemButton.addEventListener("click", function () {
// 	document.documentElement.classList.remove("dark-mode");
// 	document.documentElement.classList.remove("light-mode");
// 	console.log("functie systemmode aan");
// 	systemButton.classList.add("geselecteerd");
// 	lightModeButton.classList.remove("geselecteerd");
// 	darkModeButton.classList.remove("geselecteerd");
// });

// lightModeButton.addEventListener("click", function () {
// 	document.documentElement.classList.remove("dark-mode");
// 	document.documentElement.classList.add("light-mode");
// 	console.log("functie lightmode aan");
// 	lightModeButton.classList.add("geselecteerd");
// 	darkModeButton.classList.remove("geselecteerd");
// 	systemButton.classList.remove("geselecteerd");
// });

// darkModeButton.addEventListener("click", function () {
// 	document.documentElement.classList.remove("light-mode");
// 	document.documentElement.classList.add("dark-mode");
// 	console.log("functie darkmode aan");
// 	darkModeButton.classList.add("geselecteerd");
// 	lightModeButton.classList.remove("geselecteerd");
// 	systemButton.classList.remove("geselecteerd");
// });
var ThemaInstellingen = document.querySelector(".thema-instellingen")

var openThema = document.querySelector(".open-thema-instellingen");
var sluitThema = document.querySelector(".sluit-thema-instellingen");

var systemThema = document.querySelector(".system-mode-button");
var lightThema = document.querySelector(".light-mode-button");
var darkThema = document.querySelector(".dark-mode-button");

// Toon thema instellingen
openThema.addEventListener("click", function (){
	openThema.classList.add("hide-button");
	ThemaInstellingen.classList.add("toon-instellingen");
});

// SLuit thema instellingen
sluitThema.addEventListener("click", function (){
	// Verwijder class hide-button na 250ms
	setTimeout(function() { 
		openThema.classList.remove("hide-button");
	}, 250);

	ThemaInstellingen.classList.remove("toon-instellingen");
});

systemThema.addEventListener("click", function(){
	document.documentElement.classList.remove("light-mode", "dark-mode");
	lightThema.classList.remove("geselecteerd");
	darkThema.classList.remove("geselecteerd");
	systemThema.classList.add("geselecteerd");
});

lightThema.addEventListener("click", function(){
	document.documentElement.classList.remove("dark-mode");
	document.documentElement.classList.add("light-mode");
	systemThema.classList.remove("geselecteerd");
	darkThema.classList.remove("geselecteerd");
	lightThema.classList.add("geselecteerd");
});

darkThema.addEventListener("click", function(){
	document.documentElement.classList.remove("light-mode");
	document.documentElement.classList.add("dark-mode");
	systemThema.classList.remove("geselecteerd");
	lightThema.classList.remove("geselecteerd");
	darkThema.classList.add("geselecteerd");
});