
$('.menu-button').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
	var items = $('.navbar-items');
	items.toggleClass('close');
});


$('.contact-button').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
	$('.banner').toggle();
	$('.sub-menu-section').toggle();
	$('.main-section').toggle();
	$('.series-section').toggle();
	$('.article-section').toggle();
	$('.side-bar').toggle();

});