document.addEventListener("click", function(e){
	if(e.target.tagName == 'H2') {
		e.target.nextElementSibling.classList.toggle('shrink');
	}
});