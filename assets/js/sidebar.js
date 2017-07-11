$(document).ready(function($) {
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	sidebar();
});

function sidebar() {
		var lastScrollTop = 0;
		window.addEventListener("scroll", function() {
			var currentScroll = window.pageYOffset || document.body.scrollTop;
			if (currentScroll > lastScrollTop) {
				document.getElementById("links").classList.add("hidden");
			} else {
				document.getElementById("links").classList.add("hidden");
				if ( currentScroll <= 2 ) {
					document.getElementById("links").classList.remove("hidden");
				}
			}
			lastScrollTop = currentScroll;
		}, false);
	}