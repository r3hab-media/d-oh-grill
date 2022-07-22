//audio button for d'oh sound
const audio = new Audio("./sounds/doh-8.mp3");
const audioBtn = document.querySelector(".play-doh");
if (document.querySelector(".play-doh")) {
	audioBtn.addEventListener("click", () => {
		audio.play();
	});
}

//order menu options
//runs function only on page needed
if (document.getElementById("total")) {
	calcTotal();

	//if calculate button is pressed (which required checked items be checked), then 'Pay Now' button will display
	var calcButton = document.getElementById("calcButton");
	var payOptions = document.getElementById("payOpts");
	if (calcButton.addEventListener) {
		calcButton.addEventListener("click", calcTotal, false);
	} else if (calcButton.attachEvent) {
		calcButton.attachEvent("onclick", calcTotal);
	}
	document.getElementById("realCalcButton").addEventListener("click", calcTotal, false);
	calcButton.addEventListener("click", function () {
		payOptions.style.display = "flex";
	});
}

//calculates total of menu options selected
function calcTotal() {
	var itemTotal = 0;
	var items = document.getElementsByTagName("input");

	for (var i = 0; i < 11; i++) {
		if (items[i].checked) {
			itemTotal += items[i].value * 1;
			calcButton.style.display = "flex";
		}
		document.getElementById("total").innerHTML = "Your order total is:  $" + itemTotal + ".00";
	}
}

//tagged template literal - allows a template to feed the catering menu rather than build everything in HTML
const cateringMenu = [
	{
		optionNum: 1,
		price: "11.49",
		sandwhich1: "Roasted Prime Rib",
		sandwhich2: "Rotisserie Chicken & Grilled Conecuh",
		pasta1: "Signature Pasta",
		pasta2: "Chicken Alfredo",
		pasta3: "Shrimp Alfredo",
		salad1: "House Salad",
		salad2: "Caesar Salad",
		salad3: "Strawberry Salad w/ Lemon Poppy Seed",
	},

	{
		optionNum: 2,
		price: "9.99",
		sandwhich1: "Chicken Sandwich",
		sandwhich2: "4 Cheese Grilled Cheese",
		pasta1: "Spaghetti Bolognaise",
		pasta2: "Lasagne",
		pasta3: "Pasta Carbonara",
		salad1: "Caesar Salad Supreme",
		salad2: "Strawberry Spinach Salad",
		salad3: "Cobb Salad",
	},

	{
		optionNum: 3,
		price: "8.49",
		sandwhich1: "Ham Sandwich",
		sandwhich2: "Nutella Sandwich",
		pasta1: "Ravioli",
		pasta2: "Pasta alla Norma",
		pasta3: "Spaghetti alle Vongole",
		salad1: "Arabic Fattoush Salad",
		salad2: "Nicoise salad in a white bowl",
		salad3: "Leafy Green Salad",
	},
];

function cateringMenuTemplate(menuItems) {
	return `
  <li>
    <h2>OPTION ${menuItems.optionNum}</h2>
    <h4 class="price">($${menuItems.price} PER PERSON)</h4>
    <h3>CHOOSE A SANDWICH</h3>
    <ul>
      <li>${menuItems.sandwhich1}</li>
      <li>${menuItems.sandwhich2}</li>
    </ul>
    <h3>CHOOSE A PASTA</h3>
    <ul>
      <li>${menuItems.pasta1}</li>
      <li>${menuItems.pasta2}</li>
      <li>${menuItems.pasta3}</li>
    </ul>
    <h3>CHOOSE A SALAD</h3>
    <ul>
      <li>${menuItems.salad1}</li>
      <li>${menuItems.salad2}</li>
      <li>${menuItems.salad3}</li>
    </ul>
  </li>  
  `;
}

//output
if (document.getElementById("cateringMenuList")) {
	document.getElementById("cateringMenuList").innerHTML = `
  ${cateringMenu.map(cateringMenuTemplate).join(" ")}
`;
}

//comment form - changes the text of the button on click and removes the name/email fields
const btn = document.getElementById("submitAnon");

if (document.getElementById("submitAnon")) {
	submitAnon.addEventListener("click", function myFunction() {
		const submitAnon = "Submit Anonymously?";
		const submitEmail = "Submit w/ Email?";

		const pii = document.getElementsByClassName("pii");

		if (btn.innerHTML === submitAnon) {
			btn.innerHTML = submitEmail;
			for (const pi of pii) {
				pi.style.display = "none";
			}
		} else {
			btn.innerHTML = submitAnon;
			for (const pi of pii) {
				pi.style.display = "block";
			}
		}
	});
}

if (document.getElementById("submitForm")) {
	//validates form fields before submitting. Displays errors if certain fields are incomplete.
	submitForm.addEventListener("click", function (e) {
		e.preventDefault();

		const fullName = document.getElementById("fullname").value;

		const visitDate = document.getElementById("visitDate").value;
		visitDate == "" ? (visitDateError.textContent = `Please enter your visit date.`) : null;

		const partyCount = document.getElementById("partyCount").value;
		partyCount == "" ? (partyCountError.textContent = `Please enter the number of people in your party.`) : null;

		const ratingCount = document.getElementById("overallRaiting").value;
		ratingCount == "" ? (overallRatingError.textContent = `Please enter your overall rating of the D'oh! Grill.`) : null;

		const commentsField = document.getElementById("comments").value;
		commentsField == "" ? (commentsFieldError.textContent = `Please enter your comments above.`) : null;

		if (fullName != "") {
			confMsg.innerHTML = `Thank you for your submission ${fullName}`;
		} else if ((visitDate != "", partyCount != "", ratingCount != "", commentsField != "")) {
			confMsg.innerHTML = `Thank you for your anonymous submission!`;
		}
		confMsg.classList.add("success");

		// redirectMsg.innerHTML = `(You are being redirected to the homepage)`;
		// setTimeout(function () {
		// 	window.location = "index.html";
		// }, 3000);

		commentsForm.reset();
	});
}
