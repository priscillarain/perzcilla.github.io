var slides = [
<<<<<<< HEAD
	`<img src="https://priscillarain.github.io/ladies.jpg" alt="bachelor" width="500">
=======
	`<img src="./imgs/spring.gif" />
>>>>>>> 977b71c8148258fab75a749823d042d7d2cba4fd
     <p>These springs are very strong. VERY cool</p>`,
	`<img src="./imgs/summer.gif" />
     <p>Wow so cool. Wish I was at the water park rn.</p>`,
	`<img src="./imgs/fall.gif" />
     <p>✨✨aesthetics✨✨</p>`,
];

var slide_index = 0;

function changeSlide(direction) {
	if (slide_index + direction < 0) {
		slide_index = slides.length - 1;
	} else if (slide_index + direction > slides.length - 1) {
		slide_index = 0;
	} else {
        slide_index = slide_index + direction;
    }

	document.querySelector("#content").innerHTML = slides[slide_index];
}
