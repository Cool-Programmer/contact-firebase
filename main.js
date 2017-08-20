// Send to firebase
  var config = {
    apiKey: "AIzaSyBCeeJygZyhV7ypqU6OlLQLKnkyDkjz1oM",
    authDomain: "contactform-b5df2.firebaseapp.com",
    databaseURL: "https://contactform-b5df2.firebaseio.com",
    projectId: "contactform-b5df2",
    storageBucket: "",
    messagingSenderId: "206129802969"
  };
  firebase.initializeApp(config);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');



// Listen for form submission
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e)
{
	e.preventDefault();
	let name = getInputValue("name");
	let company = getInputValue("company");
	let email = getInputValue("email");
	let phone = getInputValue("phone");
	let message = getInputValue("message");

	// Save message
	saveMessage(name, company, email, phone, message);

	// Show alert
	document.querySelector(".alert").style.display = "block";

	// Hide alert after 3 second
	setTimeout(function(){
		document.querySelector(".alert").style.display = "none";
	}, 3000);

	// Clear form
	document.getElementById("contactForm").reset();
}



// Function to grab form values
function getInputValue(id) 
{
	return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message)
{
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		company: company,
		email: email,
		phone: phone,
		message: message
	});
}