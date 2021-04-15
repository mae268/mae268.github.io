let body = document.querySelector('body');

let circle = document.querySelector('#circle');

let ocean = document.querySelector('#ocean');

let isColored = false;

//I declared a Boolean variable “isColored”. I’ve made it false so when the page refreshes then it will make the background lightcyan, and the circle yellow. Then in the callback function, I created an if else loop which will check the background color, whether it is lightcyan or darkslateblue, and the color of the circle (yellow or cornsilk), then it will change the color.
circle.addEventListener('click', function() {
	if(isColored) {
		document.body.style.background = 'paleturquoise';
		circle.style.backgroundColor = 'yellow';
		isColored = false
	} else {
		document.body.style.background = 'mediumslateblue';
		circle.style.backgroundColor = 'cornsilk';
		isColored = true;
	}
});

//attempting to figure out how to trigger animations below
// function moveOcean() {
// 	ocean.animations
// }

// circle.addEventListener('mouseenter', moveOcean);