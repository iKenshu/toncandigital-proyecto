window.sr = ScrollReveal({reset: true});
sr.reveal('.Service-description', {duration: 2000 }, 100);
sr.reveal('.Products-descriptions', {duration: 2000 }, 100);
sr.reveal('.Who-description', {duration: 2000 }, 100);
sr.reveal('.Service-description', {duration: 2000 }, 100);
sr.reveal('.Costumer', {duration: 2000 }, 100);
sr.reveal('.Fotocopiadoras-description', {duration: 2000 }, 100);
sr.reveal('.Images-costumer', {duration: 2000 }, 100);
sr.reveal('.Contact-form', {duration: 2000 }, 100);


$(document).on('click', 'a[href*="#"]:not([href="#"])', function(event){
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top - 50
	}, 700);
}); 

$(function() {
  	$(".rslides").responsiveSlides({
		auto: true,             // Boolean: Animate automatically, true or false
		speed: 100,            // Integer: Speed of the transition, in milliseconds
		timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		pager: false,           // Boolean: Show pager, true or false
		nav: false,             // Boolean: Show navigation, true or false
		random: false,          // Boolean: Randomize the order of the slides, true or false
		pause: false,           // Boolean: Pause on hover, true or false
		pauseControls: true,    // Boolean: Pause when hovering controls, true or false
		prevText: "Previous",   // String: Text for the "previous" button
		nextText: "Next",       // String: Text for the "next" button
		maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		manualControls: "",     // Selector: Declare custom pager navigation
		namespace: "rslides",   // String: Change the default namespace used
		before: function(){},   // Function: Before callback
		after: function(){}     // Function: After callback
	});
});

