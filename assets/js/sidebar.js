$(document).ready(function($) {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	$("#btn-hide").click(function(event) {
		if ($("#links").hasClass('hidden') || $("#skills").hasClass('hidden')) {
			$("#btn-hide").html('Less <i class="fa fa-chevron-up" aria-hidden="true"></i>')
			$("#links").removeClass('hidden');
			$("#skills").removeClass('hidden');
		} else {
			$("#btn-hide").html('More <i class="fa fa-chevron-down" aria-hidden="true"></i>')
			$("#links").addClass('hidden');
			$("#skills").addClass('hidden');
		}
	});

	sidebar();

});

function sidebar() {
	var lastScrollTop = 0;
	window.addEventListener("scroll", function() {
		var currentScroll = window.pageYOffset || document.body.scrollTop;
		if (currentScroll > lastScrollTop) {
			$("#links").addClass(".aside-hide");
		} else {
			$("#links").addClass(".aside-hide");
			if ( currentScroll <= 2 ) {
				$("#links").removeClass(".aside-hide");
			}
		}
		lastScrollTop = currentScroll;
	}, false);
}