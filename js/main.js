function like(button){

	var comprimento = document.getElementById("pictures").children.length;
	console.log("Comprimento Tinder Livros: ", comprimento);

	var counterlike;


	console.log(button);
	test = button;
	var parentElem = button.parentElement.parentElement;
	console.log("Parent element: ", parentElem);

	parentElem.classList.remove("active");

	var NextElement = parentElem.nextElementSibling;
	console.log("Next element: ", NextElement);

	NextElement.classList.add("active");

	counterlike++;
	console.log("CounterLike: ", counterlike);
}

function dislike(button){

	var comprimento = document.getElementById("pictures").children.length;
	console.log("Comprimento Tinder Livros: ", comprimento);

	var counterdislike =0;
	

	console.log(button);
	test = button;
	var parentElem = button.parentElement.parentElement;
	console.log("Parent element: ", parentElem);

	parentElem.classList.remove("active");

	var NextElement = parentElem.nextElementSibling;
	console.log("Next element: ", NextElement);

	NextElement.classList.add("active");

	counterdislike++;
	console.log("CounterDislike: ", counterdislike);		
}
