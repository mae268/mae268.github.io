let body = document.querySelector('body');

let circle = document.querySelector('#circle');

let ocean = document.querySelector('#ocean');

function showNight() {
     document.body.style.color = 'mediumslateblue';
     document.circle.style.color = 'white';
}

circle.addEventListener('click', showNight);

function moveOcean() {
	document.ocean.animate
}
circle.addEventListener('mouseover', moveOcean);