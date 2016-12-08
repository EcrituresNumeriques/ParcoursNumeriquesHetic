// login popin
var loginBox = $('#login-pop-in');
$('#header .right a').click(function(e){
	e.preventDefault();
	loginBox.load('/src/html/register.html', function(){
		loginBox.fadeIn('fast');
		$('#login-pop-in .close').click(function(e){
			loginBox.fadeOut('fast');
		});
	});
});
// about
var aboutTabs = $('#about-menu li');
aboutTabs.click(function(e){
	target = $(e.target)
	aboutTabs.removeClass('clicked');
	target.addClass('clicked');

	$('#about-body .content').hide();
	$('#about-body .'+target.data('ref')).fadeIn();
});