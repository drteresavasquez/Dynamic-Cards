console.log("cards.js, yo!");


let createBtn = document.getElementById("create-btn");
let textArea = document.getElementById("textarea");
let cardArea = document.getElementById("cardArea");
let newCardArea = document.getElementsByClassName("card");
let cards = document.getElementById("cards");
let cardHeader = document.getElementById("cardHeader");

createBtn.addEventListener("click", createCard);

function createCard(){
	let textValue = textArea.value;
	// console.log("textValue", textValue);
	let newCard = document.createElement("LI");           
	newCard.innerHTML = `<h2>${textValue}</h2>`;                           
	cards.appendChild(newCard);
	
	let btn = document.createElement("BUTTON");        
	let text = document.createTextNode("DELETE CARD");       
	btn.appendChild(text);    
	newCard.appendChild(btn);

	btn.addEventListener("click", () => {
		newCard.remove(); 
	});

};
