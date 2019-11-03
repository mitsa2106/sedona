var search = document.querySelector("a.button-search");
var modal = document.querySelector(".modal-search");


search.addEventListener("click", function(event){
	event.preventDefault();
	let button = search.getBoundingClientRect();
	modal.style.top = button.top + pageYOffset + button.height + "px";
	modal.style.left = button.x + "px";
	let opened = modal.classList.contains("modal-show");
	
	if (!opened) {
		modal.classList.add("modal-show");
	} else {
		modal.classList.remove("modal-show");
	}	
});

