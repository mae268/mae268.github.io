
$(document).ready(function() {

	window.addEventListener('scroll', () => {
  	document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// let left = document.querySelector('#left');
// let right = document.querySelector('#right');

// let options = {
//   rootMargin: '0px',
//   threshold: 1
// };

// function animate(entries, observer) {
//   for(let entry of entries) {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('left');
//       entry.target.classList.add('right');
//     }
//   }
// }

// let observer = new IntersectionObserver(animate, options);

// observer.observe(left);

// observer.observe(right);



});
