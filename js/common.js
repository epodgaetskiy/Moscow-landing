$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$(".btn-click").click(function() {
		$(".burger-menu").toggle();
	})

	//tour slider 
	var shedule = $(".slider-1 .shedule__developments");
	var	activeDay = $(".slider-1 .shedule__day");
	var	nextDay = $(".slider-1 .shedule__next--day");
	var	marker = $(".slider-1 .marker");
	var prev = $(".slider-1 .previous--day");
	var next = $(".slider-1 .next--day");

	shedule.first().addClass("active-date");

	activeDay.first().addClass("day-active");
	nextDay.eq(1).addClass("day-active");
	nextDay.eq(2).addClass("day-active");
	nextDay.eq(3).addClass("day-active");
	next.click(function(e) {
		e.preventDefault();
		var j = 1;
			
		for (var i = 0; i < activeDay.length; i++) {
			if (activeDay.eq(i).hasClass("day-active")) {
				j = i;
				break;
			}
		}
		activeDay.eq(j).removeClass("day-active");
		activeDay.eq(j+1).addClass("day-active");
		nextDay.eq(j+1).removeClass("day-active");
		nextDay.eq(j).addClass("day-active");

		marker.fadeOut(0);
		marker.eq(j).fadeIn(0);
		shedule.fadeOut(0);
		shedule.eq(j+1).fadeIn(0);
		if (j>=0) {
			prev.css("display","inline-block");
			next.css("left","45%");
		};
		if (j>=2) {
			next.css("display","none");
		};
	});

	prev.click(function(e) {
		e.preventDefault();
		var j = 0;
			
		for (var i = 0; i < activeDay.length; i++) {
			if (activeDay.eq(i).hasClass("day-active")) {
				j = i;
				break;
			}
		}
		if (j > 1) {
			prev.css("display","inline-block");
		} ;
		if (j == 1) {
			prev.css("display","none");
			next.css("left","16%");
		}
		if (j>=2) {
			next.css("display","inline-block");
		};

		activeDay.eq(j).removeClass("day-active");
		activeDay.eq(j-1).addClass("day-active");
		nextDay.eq(j-1).removeClass("day-active");
		nextDay.eq(j).addClass("day-active");

		marker.fadeOut(0);
		marker.eq(j).fadeIn(0);
		shedule.fadeOut(0);
		shedule.eq(j-1).fadeIn(0);

	});

	nextDay.click(function(e) {
		e.preventDefault();
		shedule.finish();

		var n = nextDay.index($(this));
		var	k = 0;

		for (var i = 0; i < activeDay.length; i++) {
			if (activeDay.eq(i).hasClass("day-active")) {
				k = i;
				break;
			}
		}
		if (n >=3) {
		  next.css("display","none");
		  prev.css("display","inline-block");
		} else {
			next.css("display","inline-block");
			prev.css("display","inline-block");
			next.css("left","45%");
		};
		if (n== 0) {
			next.css("display","inline-block");
		  	prev.css("display","none");
		  	next.css("left","16%");
		}
		activeDay.eq(k).removeClass("day-active");
		nextDay.eq(n).removeClass("day-active");

		activeDay.eq(n).addClass("day-active");
		nextDay.eq(k).addClass("day-active");

		marker.fadeOut(0);
		marker.eq(n).fadeIn(0);
		shedule.fadeOut(0);
		shedule.eq(n).fadeIn(0);

	});
	//slider-2
	var shedule2 = $(".slider-2 .shedule__developments");
	var	activeDay2 = $(".slider-2 .shedule__day");
	var	nextDay2 = $(".slider-2 .shedule__next--day");
	var	marker2 = $(".slider-2 .marker");
	var prev2 = $(".slider-2 .previous--day");
	var next2 = $(".slider-2 .next--day");

	shedule2.first().addClass("active-date");

	activeDay2.first().addClass("day-active");
	nextDay2.eq(1).addClass("day-active");
	nextDay2.eq(2).addClass("day-active");
	next2.click(function(e) {
		e.preventDefault();
		var j = 1;
			
		for (var i = 0; i < activeDay2.length; i++) {
			if (activeDay2.eq(i).hasClass("day-active")) {
				j = i;
				break;
			}
		}
		activeDay2.eq(j).removeClass("day-active");
		activeDay2.eq(j+1).addClass("day-active");
		nextDay2.eq(j+1).removeClass("day-active");
		nextDay2.eq(j).addClass("day-active");

		marker2.fadeOut(0);
		marker2.eq(j).fadeIn(0);
		shedule2.fadeOut(0);
		shedule2.eq(j+1).fadeIn(0);
		if (j>=0) {
			prev2.css("display","inline-block");
			next2.css("left","45%");
		};
		if (j>=1) {
			next2.css("display","none");
		};
	});

	prev2.click(function(e) {
		e.preventDefault();
		var j = 0;
			
		for (var i = 0; i < activeDay2.length; i++) {
			if (activeDay2.eq(i).hasClass("day-active")) {
				j = i;
				break;
			}
		}
		if (j > 1) {
			prev2.css("display","inline-block");
		} ;
		if (j == 1) {
			prev2.css("display","none");
			next2.css("left","16%");
		}
		if (j>=1) {
			next2.css("display","inline-block");

		};
		activeDay2.eq(j).removeClass("day-active");
		activeDay2.eq(j-1).addClass("day-active");
		nextDay2.eq(j-1).removeClass("day-active");
		nextDay2.eq(j).addClass("day-active");

		marker2.fadeOut(0);
		marker2.eq(j).fadeIn(0);
		shedule2.fadeOut(0);
		shedule2.eq(j-1).fadeIn(0);
	});

	nextDay2.click(function(e) {
		e.preventDefault();
		shedule.finish();

		var n = nextDay2.index($(this));
		var	k = 0;

		for (var i = 0; i < activeDay2.length; i++) {
			if (activeDay2.eq(i).hasClass("day-active")) {
				k = i;
				break;
			}
		}
		if (n >=2) {
		  next2.css("display","none");
		  prev2.css("display","inline-block");
		} else {
			next2.css("display","inline-block");
			prev2.css("display","inline-block");
			next2.css("left","45%");
		};
		if (n== 0) {
			next2.css("display","inline-block");
		  	prev2.css("display","none");
		  	next2.css("left","16%");
		}
		activeDay2.eq(k).removeClass("day-active");
		nextDay2.eq(n).removeClass("day-active");

		activeDay2.eq(n).addClass("day-active");
		nextDay2.eq(k).addClass("day-active");

		marker2.fadeOut(0);
		marker2.eq(n).fadeIn(0);
		shedule2.fadeOut(0);
		shedule2.eq(n).fadeIn(0);

	});
	// slider-3
	var shedule3 = $(".slider-3 .shedule__developments");
	var	activeDay3 = $(".slider-3 .shedule__day");
	var	nextDay3 = $(".slider-3 .shedule__next--day");
	var	marker3 = $(".slider-3 .marker");
	var prev3 = $(".slider-3 .previous--day");
	var next3 = $(".slider-3 .next--day");

	shedule3.first().addClass("active-date");
	activeDay3.first().addClass("day-active");
	nextDay3.eq(1).addClass("day-active");

	next3.click(function(e) {
		e.preventDefault();
		activeDay3.eq(0).removeClass("day-active");
		activeDay3.eq(1).addClass("day-active");
		nextDay3.eq(1).removeClass("day-active");
		nextDay3.eq(0).addClass("day-active");
		next3.css("display","none");
		prev3.css("display","inline-block");
		marker3.fadeOut(0);
		marker3.eq(1).fadeIn(0);
		shedule3.fadeOut(0);
		shedule3.eq(1).fadeIn(0);
	});

	nextDay3.eq(1).click(function(e) {
		e.preventDefault();
		activeDay3.eq(0).removeClass("day-active");
		activeDay3.eq(1).addClass("day-active");
		nextDay3.eq(1).removeClass("day-active");
		nextDay3.eq(0).addClass("day-active");
		next3.css("display","none");
		prev3.css("display","inline-block");
		marker3.fadeOut(0);
		marker3.eq(1).fadeIn(0);
		shedule3.fadeOut(0);
		shedule3.eq(1).fadeIn(0);
	});
	nextDay3.eq(0).click(function(e) {
		e.preventDefault();
		activeDay3.eq(1).removeClass("day-active");
		activeDay3.eq(0).addClass("day-active");
		nextDay3.eq(0).removeClass("day-active");
		nextDay3.eq(1).addClass("day-active");
		next3.css("display","inline-block");
		prev3.css("display","none");
		marker3.fadeOut(0);
		marker3.eq(0).fadeIn(0);
		shedule3.fadeOut(0);
		shedule3.eq(0).fadeIn(0);
	});

	prev3.click(function(e) {
		e.preventDefault();
		activeDay3.eq(1).removeClass("day-active");
		activeDay3.eq(0).addClass("day-active");
		nextDay3.eq(0).removeClass("day-active");
		nextDay3.eq(1).addClass("day-active");
		next3.css("display","inline-block");
		prev3.css("display","none");
		marker3.fadeOut(0);
		marker3.eq(0).fadeIn(0);
		shedule3.fadeOut(0);
		shedule3.eq(0).fadeIn(0);
	});

	// nextDay3.click(function(e) {
	// 	e.preventDefault();
	// 	shedule.finish();

	// 	var n = nextDay3.index($(this));
	// 	var	k = 0;
	// 	console.log(n);
	// 	if (n== a) {
	// 	e.preventDefault();
	// 	activeDay3.eq(0).removeClass("day-active");
	// 	activeDay3.eq(1).addClass("day-active");
	// 	nextDay3.eq(1).removeClass("day-active");
	// 	nextDay3.eq(0).addClass("day-active");
	// 	next3.css("display","none");
	// 	prev3.css("display","inline-block");
	// 	marker3.fadeOut(0);
	// 	marker3.eq(1).fadeIn(0);
	// 	shedule3.fadeOut(0);
	// 	shedule3.eq(1).fadeIn(0);
	// } else {
	// 	activeDay3.eq(1).removeClass("day-active");
	// 	activeDay3.eq(0).addClass("day-active");
	// 	nextDay3.eq(0).removeClass("day-active");
	// 	nextDay3.eq(1).addClass("day-active");
	// 	next3.css("display","inline-block");
	// 	prev3.css("display","none");
	// 	marker3.fadeOut(0);
	// 	marker3.eq(0).fadeIn(0);
	// 	shedule3.fadeOut(0);
	// 	shedule3.eq(0).fadeIn(0);
	// }

	// });
});
