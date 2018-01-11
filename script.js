
$(document).ready(function() {

	$("#scroll-up-btn").hide();
	var aboutDiv = $("#about").offset().top * 0.8;
	$(document).scroll(function() {
    if($(window).scrollTop()>aboutDiv) {
  	$('nav.navbar').removeClass("affix-top");
  	$('nav.navbar').addClass("affix");
  	$('#scroll-up-btn').fadeIn(500);
    	}
	});
	$(document).scroll(function() {
	if($(window).scrollTop()<aboutDiv) {
  	$('nav.navbar').removeClass("affix");
  	$('nav.navbar').addClass("affix-top");
  	$('#scroll-up-btn').fadeOut(300);
		}
	});

	// all the animate.css animations

	
	// var aboutAni = $("#about").offset().top * 0.5;
	// $(document).scroll(function() {
 //    if($(window).scrollTop()>aboutAni) {
 //  	$('.animation-1').addClass("animated");
 //    	}
	// });


  	



	// Slide over the web page when going to an internal anchor
	$(".content-button").click(function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		var $target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 750, 'swing', function() {
			window.location.hash = target;
		});
	});

	var backEndDiv = $("#back-end-bootcamp").offset().top;
	var frontEndDiv = $("#front-end-bootcamp").offset().top;
	var unicefDiv = $("#unicef").offset().top;
	var acsDiv = $("#acs").offset().top;
	var rsmBscDiv = $("#rsm-bachelor").offset().top;
	var rsmMscDiv = $("#rsm-master").offset().top;
	var screenWidth = $("body").innerWidth();

	$(window).resize(function(){
		backEndDiv = $("#back-end-bootcamp").offset().top;
		frontEndDiv = $("#front-end-bootcamp").offset().top;
		unicefDiv = $("#unicef").offset().top;
		acsDiv = $("#acs").offset().top;
		rsmBscDiv = $("#rsm-bachelor").offset().top;
		rsmMscDiv = $("#rsm-master").offset().top;
		screenWidth = $("body").innerWidth();
	});
	
	$(".exp-logo").hide();
	$(".exp-logo-2").hide();
	$(".exp-logo-3").hide();
	$(".edu-logo").hide();
	$(".edu-logo-2").hide();
	$(".edu-logo-3").hide();
	var belowElement = true;
	var belowElement2 = true;
	var belowElement3 = true;
	var belowElement4 = true;
	var belowElement5 = true;
	var belowElement6 = true;
	if (screenWidth > 792) {
	$(document).scroll(function() {
    if($(window).scrollTop() > backEndDiv*0.8 && belowElement) {
  		$(".turing-1").animate({"margin-left": "135px"}, 50);
		$(".exp-logo").delay(800).fadeIn(1000);
		belowElement = false;
        };
    if($(window).scrollTop() > frontEndDiv*0.8 && belowElement2) {
  		$(".turing").animate({"margin-left": "135px"}, 50);
		$(".exp-logo-2").delay(800).fadeIn(1000);
		belowElement2 = false;
        };
    if($(window).scrollTop() > unicefDiv*0.8 && belowElement3) {
  		$(".unicef-1").animate({"margin-left": "140px"}, 50);
		$(".exp-logo-3").delay(800).fadeIn(1000);
		belowElement3 = false;
        };
    if($(window).scrollTop() > rsmMscDiv*0.8 && belowElement4) {
  		$(".rsm-1").animate({"margin-left": "135px"}, 50);
		$(".edu-logo").delay(800).fadeIn(1000);
		belowElement4 = false;
        };
    if($(window).scrollTop() > rsmBscDiv*0.8 && belowElement5) {
  		$(".rsm-2").animate({"margin-left": "135px"}, 50);
		$(".edu-logo-2").delay(800).fadeIn(1000);
		belowElement5 = false;
        };
    if($(window).scrollTop() > acsDiv*0.8 && belowElement6) {
  		$(".acs-1").animate({"margin-left": "140px"}, 50);
		$(".edu-logo-3").delay(800).fadeIn(1000);
		belowElement6 = false;
        };
	});
	};

	// $(".box").mouseenter(function() {
 // 	$(".project-box").removeClass("height-0").addClass("height-auto");
 //  	})
 //  	.mouseleave(function() {
 //    $(".project-box").removeClass("height-auto").delay(750).queue(function(nxt) {
 //      $(this).addClass('height-0');
 //      nxt();
 //  	})
 //  	});


})