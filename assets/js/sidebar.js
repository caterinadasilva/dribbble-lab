$(document).ready(function($) {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	sidebar();

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
});

function sidebar() {
	var lastScrollTop = 0;
	window.addEventListener("scroll", function() {
		var currentScroll = window.pageYOffset || document.body.scrollTop;
		if (currentScroll > lastScrollTop) {
			document.getElementById("links").classList.add("aside-hide");
		} else {
			document.getElementById("links").classList.add("aside-hide");
			if ( currentScroll <= 2 ) {
				document.getElementById("links").classList.remove("aside-hide");
			}
		}
		lastScrollTop = currentScroll;
	}, false);
}