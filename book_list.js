"use strict";
$(document).ready(function() {
	//to be able to preload images
	$("#catergories h2").each(function() {
		var booklist = new Image();
		booklist.src = $(this).attr("href");
	});
		
	$("#categories h2, a").click(function(evt) {
	var linkURL = $(this).attr("href");
	$("#image").attr("src", linkURL);

	$(this).toggleClass("minus");
	if ($(this).attr("class") != "minus") {
		$(this).next().hide();
	}
	else {
		$(this).next().show();
	}
	//to cancel the default action of the link
	evt.preventDefault();
});
$("#categories h2").find("a:first").focus();	
});