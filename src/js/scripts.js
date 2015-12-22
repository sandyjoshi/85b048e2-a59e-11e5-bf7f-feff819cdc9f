
$('.menu-button').on('click touchstart', function(event) {
    event.stopPropagation();
    event.preventDefault();
	var items = $('.navbar-items');
	items.toggleClass('close');
});


$('.contact-button').on('click touchstart', function(event) {
    event.stopPropagation();
    event.preventDefault();
	$('.banner').toggle();
	$('.sub-menu-section').toggle();
	$('.main-section').toggle();
	$('.series-section').toggle();
	$('.article-section').toggle();
	$('.side-bar').toggle();
});

var number = $(".text-area-length") ;
$( ".message" ).change(function() {
   number.html( $(this).val().length + " / 160" );
});