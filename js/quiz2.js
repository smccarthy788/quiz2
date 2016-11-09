// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
//  - create a button in the html that, once clicked, will fire off the function described in the next bullet point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
//  - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){
	$('#links li a').on('click', function(e) {
		e.preventDefault();
		alert('You clicked a link, good for you.');
	});

	var colors = ["#48cc2a", "#cc2a68", "#1c0bba"]

	$('ol li').each(function(i){
		$(this).css("background-color", colors[i])
	});

	$('.accordion-toggle').on('click', function(e){
		var accordion = $(".accordion-inner")
		if($(accordion).css("display") === "none"){
			$(".accordion-inner").css("display", "block");
		}
		else {
			$(".accordion-inner").css("display", "none");
		}
	});

	console.log("this is a message for you!!!");
})(jQuery);

function buttonFunction(){
	console.log("hit")
	$('body').html('<div class="goodbye"><h1>Bye! Neat quiz. I had fun.</h1></div>');
	var interval = setInterval(function(){addParrot();}, 500);
}

function addParrot(){
	$('body').append('<div class="parrot"><img src="./img/congaparrot.gif"></img></div>');
}
