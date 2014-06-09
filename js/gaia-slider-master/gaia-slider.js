function gaiaSlider(divID) {
	var $ = jQuery;

	//lets add an indicator div after the containing div
	$(divID).after('<ul id="gaia-thumbnails"></ul>');

	$('#gaia-thumbnails').wrapAll('<div id="gaia-indicators"></div>');

	//lets add some prev and next buttons
	$(divID).prepend('<div id="gaia-prev">&lsaquo;</div><div id="gaia-next">&rsaquo;</div>')

	//lets add some prev and next buttons to thumbnails section
	$('#gaia-indicators').before('<div id="gaia-thumb-prev"></div>')

	$('#gaia-indicators').after('<div id="gaia-thumb-next"></div>')

	//lets get the children of our containing div
	var childSlides = $(divID).children().not('#gaia-next, #gaia-prev');

	//lets get the total count of our children
	var gaiaSlideCount = childSlides.length;

	

	// console.log('total slides '+gaiaSlideCount);

		//adding class to direct children of our variable div#
		childSlides.addClass('gaia-slide hidden');
		childSlides.first().removeClass('hidden').addClass('gaia-active');

		childSlides.each(function(index) {
			$(this).attr('data-slide', index);

			//lets grab the first image inside the child and prepend it inside the gaia-inditators div
			var thumbImg = $(this).find('img').attr('src');
			$('#gaia-thumbnails').append('<li class="gaia-thumb" data-slide="'+index+'"><img src="'+thumbImg+'" /></li>');
		});

		var gaiaThumb = $('.gaia-thumb');
		gaiaThumb.first().addClass('active-thumb');

		//getting the height of the active div
		function gaiaActiveHeight() {
			var gaiaHeight = $(divID+' .gaia-active').height();
			$(divID).height(gaiaHeight+'px');
		}


		//slide transitions to next slide
		function gaiaNextSlide() {
			// get the current active slide
			var currentSlide = $(divID+' .gaia-active').data('slide');
			//lets add an active class to the active thumbnail
			$('.gaia-thumb[data-slide="'+currentSlide+'"]').removeClass('active-thumb');
			$('.gaia-slide').removeClass('gaia-active').addClass('hidden');


			nextSlide = currentSlide+1;
			//we have more slides
			if (nextSlide < gaiaSlideCount) {
				$('.gaia-slide[data-slide="'+nextSlide+'"]').removeClass('hidden').addClass('gaia-active');
				$('.gaia-thumb[data-slide="'+nextSlide+'"]').addClass('active-thumb');	
			}

			//we are at the end of the show, let go back to the beginning
			if (nextSlide == gaiaSlideCount) {
				$('.gaia-slide[data-slide="0"]').removeClass('hidden').addClass('gaia-active');
				$('.gaia-thumb[data-slide="0"]').addClass('active-thumb');	
			}
		}

		function gaiaPrevSlide() {
			var gaiaSlideCountFix = gaiaSlideCount-1;
			// get the current active slide
			var currentSlide = $(divID+' .gaia-active').data('slide');
			//lets add an active class to the active thumbnail
			$('.gaia-thumb[data-slide="'+currentSlide+'"]').removeClass('active-thumb');
			$('.gaia-slide').removeClass('gaia-active').addClass('hidden');


			prevSlide = currentSlide-1;
			//we are at the end of the show, let go back to the beginning
			if (prevSlide >= 0) {
				console.log('true');
				$('.gaia-slide[data-slide="'+prevSlide+'"]').removeClass('hidden').addClass('gaia-active');
				$('.gaia-thumb[data-slide="'+prevSlide+'"]').addClass('active-thumb');	
			}

			//we have more slides
			if (prevSlide < 0) {
				$('.gaia-slide[data-slide="'+gaiaSlideCountFix+'"]').removeClass('hidden').addClass('gaia-active');
				$('.gaia-thumb[data-slide="'+gaiaSlideCountFix+'"]').addClass('active-thumb');	
			}
		}

		function gaiaHighlight() {
			$('.production, .location, .casting, .professional, .non-professional, .wardrobe, .propping').css('color' , '#636466;');
			
				if ($('.gaia-active img').is('.production')) {
					$('.production').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.location')) {
					$('.location').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.casting')) {
					$('.casting').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.professional')) {
					$('.professional').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.non-professional')) {
					$('.non-professional').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.wardrobe')) {
					$('.wardrobe').css('color' , 'red');
				}
				if ($('.gaia-active img').is('.propping')) {
					$('.propping').css('color' , 'red');
				} 
		}

		function gaiaThumbClick() {
			gaiaThumb.on('click', function() {
				var showSlide = $(this).data('slide');
				// alert(showSlide);
				$('.gaia-slide').removeClass('gaia-active').addClass('hidden');
				$('.gaia-thumb').removeClass('active-thumb');

				$('.gaia-slide[data-slide="'+showSlide+'"]').removeClass('hidden').addClass('gaia-active');
				$('.gaia-thumb[data-slide="'+showSlide+'"]').addClass('active-thumb');
				gaiaHighlight();
			});
		}


		function gaiaNextClick() {
			$('#gaia-next').on('click', function() {
				gaiaNextSlide();
				gaiaHighlight();
			});
		}

		function gaiaPrevClick() {
			$('#gaia-prev').on('click', function() {
				gaiaPrevSlide();
				gaiaHighlight();
			});	
		}

		// setInterval(function() {
		// 	gaiaNextSlide();
		// }, 2000);

		$(window).resize(function() {
			gaiaActiveHeight();
		});

		$(document).ready(function() {
			gaiaThumbClick();
			gaiaNextClick();
			gaiaPrevClick();	
			gaiaActiveHeight();
		});
	}