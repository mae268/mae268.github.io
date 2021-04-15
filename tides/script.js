let body = document.querySelector('body');

let .circle = document.querySelector('circle');

let .ocean = document.querySelector('ocean');

function showNight() {
	document.body.style.background = mediumslateblue;
}

circle.addEventListener('click', showNight);

function hoverElement(event) {
  console.log(event.target.tagName);
}