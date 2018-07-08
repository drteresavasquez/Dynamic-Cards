console.log("cards.js, yo!");

//this exercise was about creating cards by entering in text into a text box, pushing create with the option to delete the card as well.

//OMG all the variables....I needed to grab the HTML so that the buttons and text area would work
let createBtn = document.getElementById("create-btn");
let textArea = document.getElementById("textarea");
let cards = document.getElementById("cards");

//this line creates the event listener that tells the button when clicked to run the function named "createCard"
createBtn.addEventListener("click", createCard);

//
function createCard(){
	//when the button is clicked a bunch of wonderful stuff happens:

	//1. the value (what the user typed into the text box) is pulled in
	let textValue = textArea.value;

	//2. a new line item is created because my cards are line items
	let newCard = document.createElement("LI"); 

	//3. the text that the user inputed is placed into an h2 tag and placed on the card          
	newCard.innerHTML = `<h2>${textValue}</h2>`;  

	//4. the card is added to the list of line items. On the first add you can't see the beauty of this line of code. Push the create a card button several times to see the magic happen!                         
	cards.appendChild(newCard);
	
	//I am sure there was an easier way to do this in the inner.HTML option I created above, but I wanted the fucntionality of my delete button to be separate (or at least that is what I am telling myself)

	//5. Here I create a button and some text for the button
	let btn = document.createElement("BUTTON");       
	let text = document.createTextNode("DELETE CARD");  

	//6. I  add the text to the button    
	btn.appendChild(text);   

	//7. here I put the button on the card! Like magic! 
	newCard.appendChild(btn);

	//8. Here, I add an event listener to the delete button that removes the CURRENT card. At first I used function(){} blah, but I could not access the newCard variable until I used the fat arrow. It works!
	btn.addEventListener("click", () => {
		newCard.remove(); 
	});

	//9. Much more coffee and wine, not necesarily in that order!

};
