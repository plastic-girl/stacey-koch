/**
 * General Script file
 *
 * Includes script for sliding thumbnails.
 */

 /*arrow hover function */

	var timer;
	var $ = jQuery;

	$("#gaia-slide-wrapper").hover(function () {
		$("#gaia-next, #gaia-prev").fadeIn(300);
		clearTimeout(timer);
	},
	function () {
			timer = setTimeout('$("#gaia-next, #gaia-prev").fadeOut(300);', 300);
		}
	);
	$("#gaia-next, #gaia-prev").mouseenter(function(){
	    clearTimeout(timer);
	});

 /* Sliding thumbnails functions */

jQuery(window).load(function($) {

	var $ = jQuery;

	$('.production, .location, .casting, .non-professional').css('color' , 'red');

	$(".entry-content").fadeIn(300);

	if($("#gaia-thumbnails").length){

	        // Declare variables
	        var totalImages = $("#gaia-thumbnails > li").length,
	            imageWidth = $("#gaia-thumbnails > li:first").outerWidth(true),
	            totalWidth = imageWidth * totalImages,
	            visibleImages = Math.round($("#gaia-indicators").width() / imageWidth),
	            imagesCount = Math.round(totalImages / visibleImages),
	            visibleWidth = visibleImages * imageWidth,
	            stopPosition = (visibleWidth - totalWidth),
				reset = (imagesCount * visibleWidth);
				counter = 0;

	        $("#gaia-thumbnails").width(totalWidth);

	        $("#gaia-thumb-prev").click(function(){
	        	if(counter > 0) {
		        	counter--;
		        } else {
		        	counter = 0;
		        }
	            if($("#gaia-thumbnails").position().left < 0 && !$("#gaia-thumbnails").is(":animated")){
	                $("#gaia-thumbnails").animate({left : "+=" + visibleWidth + "px"});
	            }
	            return false;
	        });

	        $("#gaia-thumb-next").click(function(){
	        	counter++;
	            if($("#gaia-thumbnails").position().left > stopPosition && !$("#gaia-thumbnails").is(":animated")){
	                $("#gaia-thumbnails").animate({left : "-=" + visibleWidth + "px"});
	            }
	            if(counter > imagesCount) {
					$("#gaia-thumbnails").animate({left : "-=" + -reset + "px"});
						counter = 0;
				}
	            return false;
	        });
	 	}

});