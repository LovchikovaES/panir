$(document).ready(function() {
	if (typeof panir == 'object') {
		panir.scaleBorder(); $(window).resize(panir.scaleBorder);
		panir.scaleHeader(); $(window).resize(panir.scaleHeader); // resizing H1
		panir.scaleLucky(); $(window).resize(panir.scaleLucky);
		panir.showLastTasty(); $(window).resize(panir.showLastTasty); // shows the last tasty block if there's enough space 

		panir.luckyDinner();

		panir.searchLabel(); // hiding search field tip		
		panir.approveComment(); // approves comment on click
		panir.removeComment(); // removes 
		panir.editComment();
		
		panir.commentReplyMode(); // shows reply form on reply button click 
		panir.validateComment(); // enables submit button for the comment form
		panir.newCommentName(); // updates anonymous name
		panir.share(); // opens link list
		
		panir.hovers(); // additional hover effects
		
		panir.imageGallery();
		panir.dishComments();
	}
});

var panir = {};
panir.animationSpeed = 100;

panir.dishComments = function() {
	var $cooked = $('.blog .cooked');
	var $summary = $('.cooked-summary', $cooked);
	var $form = $('.new-comment', $cooked);
	var $trigger = $('a.button.me-too', $summary);
	var $hide = $('a.close-comment', $form);
	var $load = $('a.cooked-load', $cooked);
	
	if ($summary.length && $trigger.length) {
		$trigger.click(function(e) {
			$form.slideDown(panir.animationSpeed);
			$summary.hide();
		
			e.preventDefault();
		});
		
		$hide.click(function(e) {
			$form.slideUp(panir.animationSpeed);
			$summary.show();
		
			e.preventDefault();
		});
		
		$load.click(function(e) {
			// dummy 
			var $comments = $('ol > li', $cooked);
			$comments.clone(true).appendTo($('ol', $cooked));
		
			e.preventDefault();
		});
	}
};

panir.imageGallery = function() {
	var $image = $('.reciepe .image');
	
	if ($image.length && $('img', $image).length > 1) {
		$image.fotorama({
			thumbsPreview: false,
			touchStyle: false,
			arrows: false,
			zoomToFit: false,
			shadows: false,
			resize: true,
			backgroundColor: 'white'
		});
	}
};

panir.hovers = function() {
	var $topics = $('.topics li');
	$('.img a', $topics).hover(function() {
		$(this).parents('li').addClass('hover');
	}, function() {
		$(this).parents('li').removeClass('hover');
	});
};

panir.share = function() {
	var $trigger = $('.extra a.share');
	var $container = $trigger.parents('.extra');
	var $list = $('.extra .share-links');
	var $close = $('.extra .share-links a.close');
	
	$trigger.click(function(e) {
		e.preventDefault();
	
		if ($container.hasClass('open')) {
			$close.click();
		} else {
			$container.addClass('open');
			$list.fadeIn(panir.animationSpeed);
		}
	});
	
	$close.click(function(e) {
		e.preventDefault();
		
		$list.fadeOut(panir.animationSpeed, function() {$container.removeClass('open');});
	});

	$trigger.hover(function() { $close.addClass('hover'); }, function() { $close.removeClass('hover'); });
	$close.hover(function() { $trigger.addClass('hover'); }, function() { $trigger.removeClass('hover'); });
};

panir.removeComment = function() {
	var $trigger = $('.comments ul.actions li.delete a');
	
	$trigger.click(function(e) {
		e.preventDefault();
		
		// dummy data sent 
		
		// animation
		var $parent = $(this).parents('li > .comment, li > .reply');
		$parent.fadeOut(panir.animationSpeed*2);
	});
};

panir.editComment = function() {
	var $trigger = $('.comments ul.actions li.edit a');
	
	$trigger.click(function(e) {
		e.preventDefault();
		
		// dummy data sent
	});
};

panir.approveComment = function() {
	var $trigger = $('.comments ul.actions li.approve a');
	
	$trigger.click(function(e) {
		e.preventDefault();
		
		// dummy data sent 
		
		// animations
		$(this).parents('li.approve').fadeOut(panir.animationSpeed);
		$(this).parents('.comment').animate({
			'backgroundColor': '#87d130'
		}, {
			'duration': panir.animationSpeed
		});
		
		$(this).parents('.comment').animate({
			'backgroundColor': '#ffffff'
		}, {
			'duration': panir.animationSpeed*3,
			'complete': function() {
				$(this).attr('style', '');
				$(this).removeClass('new');
			}
		});
	});
};

panir.newCommentName = function() {
	var $trigger = $('.blog .new-comment a.name');
	$trigger.click(function(e) {
		e.preventDefault();
		
		$('span', this).text(panir.randomCommentName().gen);
	});
};

panir.randomCommentName = function() {
	// this list can be downloaded by ajax
	var names = [
		{nom:'??????? ???????', gen:'???????? ????????'}, // nominative and genitive
		{nom:'???? ??????', gen:'????? ???????'},
		{nom:'????? ??????????', gen:'?????? ???????????'},
		{nom:'??????? ??????????', gen:'???????? ??????????'},
		{nom:'????? ???????', gen:'?????? ????????'}
	];
	
	panir.randomCommentName.currentRandom++;
	if (panir.randomCommentName.currentRandom == names.length) {
		panir.randomCommentName.currentRandom = 0;
	}
	
	return names[panir.randomCommentName.currentRandom];
}; 
panir.randomCommentName.currentRandom = 0;

panir.validateComment = function() {
	var $form = $('.blog .new-comment form');
	var $button = $('.buttons input', $form);
	var $textarea = $('textarea', $form);
	
	function dummyValidate() {
		if ($textarea.val()) {
			return true;	
		} else {
			return false;
		}
	};	
	
	$button.attr('disabled', !dummyValidate());
	$textarea.keyup(function() {
		$button.attr('disabled', !dummyValidate());
	});
	
	$form.submit(function(e) {
		e.preventDefault();
		$form.find('input, textarea, select').attr('disabled',true);
		alert('form data may be sent');
	});
};

panir.commentReplyMode = function() {
	var $trigger = $('.blog .comments .comment ul.actions li.reply a');
	
	$trigger.click(function(e) {
		e.preventDefault();
	
		var $parent = $(this).parents('.comment');
		var $form = $('form.inline-reply', $parent);
		
		if ($parent.hasClass('reply-mode')) {
			$form.slideUp(panir.animationSpeed);
		} else {
			$form.slideDown(panir.animationSpeed);
		}
		
		$parent.toggleClass('reply-mode');
	});
}; 

panir.showLastTasty = function() {
	var $tasty = $('#body .tasty ul');
	var $last = $('li.extra', $tasty);
	var $first = $('li:first', $tasty);
	
	if ($tasty.length && $first.length && $last.length) {
		var width = $first.getWidth() + $first.getMarginInPixels();
	
		if ($tasty.width() < (width*3 + 20)) {
			$last.addClass('hidden');
		}
	
		if (this.resizeEnds) clearTimeout(this.resizeEnds);
		this.resizeEnds = setTimeout(function() {
			if ($tasty.width() >= (width*3 + 20)) {
				$last.removeClass('hidden');
			} 
		}, 100);
	}
};

panir.scaleBorder = function() {
	var $vertical = $('body > .wrapper');
	var $top = $('#head');
	var $bottom = $('#foot');
	var $container = $('#panir .inner');

	if (!panir.initBorderSize) {
		panir.initBorderSize = parseInt($vertical.css('margin-left'));
	}
	if (!panir.initFooterOffset) {
		panir.initFooterOffset = parseInt($bottom.outerHeight());
	}

	var minScale = parseInt($('body').css('min-width')) / 1000;
	var scale = $('body').innerWidth() / parseInt($('body').css('min-width')) ;
	
	var size = panir.initBorderSize;
	var offset = panir.initFooterOffset;
	if (scale > minScale) {
		offset = offset - size;
		size = Math.ceil(size * scale);
		offset += size;
	} 

	// sertting new border width
	$vertical.css({
		'margin-left': size + 'px',
		'margin-right': size + 'px'
	});
	$top.css({
		'border-top-width': size + 'px'
	});
	$bottom.css({
		'border-bottom-width': size + 'px',
		'margin-top': -offset + 'px'
	});
	$container.css({
		'padding-bottom': offset + 'px'
	});
};

panir.scaleHeader = function() {
	var $head = $('#head');
	var $header = $('h1', $head);
	var $time = $('sup', $header);
	
	if (!panir.initHSize) {
		panir.initHSize = parseInt($header.css('font-size'));
	}
	if (!panir.initTimeOffset) {
		panir.initTimeOffset = parseInt($time.css('margin-top'));
	}
	if (!panir.initHeadMargin) {
		panir.initHeadMargin = parseInt($head.css('margin-bottom'));
	}
	
	var minScale = parseInt($('body').css('min-width')) / 1000;
	var maxScale = parseInt($('.container').css('max-width')).toFixed(1) / 1000;
	var scale = $('body').innerWidth() / parseInt($('body').css('min-width'));
	
	var timeOffset = panir.initTimeOffset;
	var size = panir.initHSize;
	var margin = panir.initHeadMargin;
	
	if (scale > minScale && scale < maxScale) {
		size *= scale;
		//timeOffset *= scale;
		margin *= scale;
	} else if ( scale >= maxScale ) {
		size *= maxScale;
		//timeOffset *= maxScale;
		margin *= maxScale;
	}
	
	size *= (1 - Math.max(0, $header.text().length - 20) / 100);
	
	timeOffset = Math.ceil((size * 1.3) / 4);
	
	$head.css('margin-bottom', margin + 'px');
	$header.css('font-size', size + 'px');
	$header.css('line-height', size * 1.3 + 'px');
	$time.css('margin-top', timeOffset + 'px');
};

panir.luckyDinner = function() {
	var reload = function() {
		$.getJSON('/lucky', function(data) {
			$(data).each(function(key, val){
				$('#luckyCategory' + val.category_id).html('<a href="/' + val.category_url + '/' + val.url + '" class="img"><img src="http://stat.panir.ru/images/dish/' + val.id + '/photo-95.' + val.ext + '?v2" alt="' + val.title + '" /></a><p><a href="/' + val.category_url + '/' + val.url + '">' + val.title + '</a></p>');
			});
		});
	};

	reload();
	$('#reloadLucky').click(function(e){
		reload();	
	   
		e.preventDefault();
	});
};

panir.scaleLucky = function() {
	var $container = $('.main #body .body-inner');
	var $lucky = $('.lucky.decorated', $container);

	if (!panir.initLuckyWidth) {
		panir.initLuckyWidth = parseInt($lucky.css('width'));
	}
	
	var cWidth = parseInt($container.css('width'));
	var width = panir.initLuckyWidth;
	if (cWidth > width) {
		width = parseInt(cWidth/10) * 10;
		width -= width % 15; /* 15px between dots */
		width -= 2; /* 2px smaller */
	} 
	
	$lucky.css('width', width + 'px');
};

panir.searchLabel = function() {
	var $label = $('#head .search label.tip');
	var $input = $('#' + $label.attr('for'));

	if ($label.length && $input.length) {
		var lostFocus = function() {
			$input.val($input.val().trim());

			if ( 0 == $input.val().length ) {
				$label.show();
			} else {
				$label.hide();
			}
		};
		lostFocus();

		// label click 
		$label.click( function() {
			$label.hide();
			$input.focus();
		});	
	
		// input events
		$input.focus( function() {
			$label.hide();
		});
		$input.blur(lostFocus);	
	}
};

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,'');
};

$.fn.getWidth = function() {
	return (typeof window.getComputedStyle == 'function') ? Math.ceil(parseFloat(window.getComputedStyle(this.get(0)).getPropertyValue("width"))) : this.outerWidth();
};

$.fn.getMarginInPixels = function() {
	var margins = [$(this).css('margin-left'), $(this).css('margin-right')];
	var parentWidth = $(this).parent().width();
	var result = 0;

	for (var i = 0; i < margins.length; i++) {
		if (-1 != margins[i].indexOf('px')) {
			result += parseFloat(margins[i]);
		} else if (-1 != margins[i].indexOf('%')) {
			result += parseFloat(margins[i]) * (parentWidth / 100);
		}
	}
	
	return result;
};

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if (fx.state == 0 || fx.start.constructor != Array || fx.end.constructor != Array) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}

			fx.elem.style[attr] = "rgb(" + [
				Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
				Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
			].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
})(jQuery);
