/*  ---------------------------------------------------
		Template Name: PMT
		Description: The Alliance
		Author: Asliddin
		Author URI:
		Version: 1.0
		Created: Asliddin
---------------------------------------------------------  */



'use strict';

(function ($) {

	/*------------------
			Preloader
	--------------------*/
	$(window).on('load', function () {
		$(".loader").fadeOut();
		$("#preloder").delay(200).fadeOut("slow");
	});

	/*------------------
			Background Set
	--------------------*/
	$('.set-bg').each(function () {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});

	/*------------------
	Navigation
--------------------*/
	$(".mobile-menu").slicknav({
		prependTo: '#mobile-menu-wrap',
		allowParentLinks: true
	});

	/*------------------------
	Partner Slider
	----------------------- */
	$(".partner-logo").owlCarousel({
		items: 6,
		dots: false,
		autoplay: true,
		loop: true,
		smartSpeed: 1200,
		margin: 116,
		responsive: {
			320: {
				items: 2,
			},
			480: {
				items: 3,
			},
			768: {
				items: 4,
			},
			992: {
				items: 5,
			},
			1200: {
				items: 6
			}
		}
	});

	/*------------------------
	Testimonial Slider
	----------------------- */
	$(".testimonial-slider").owlCarousel({
		items: 2,
		dots: false,
		autoplay: false,
		loop: true,
		smartSpeed: 1200,
		nav: true,
		navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
		responsive: {
			320: {
				items: 1,
			},
			768: {
				items: 2
			}
		}
	});

	/*------------------
			Magnific Popup
	--------------------*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});

	/*------------------
			CountDown
	--------------------*/
	// For demo preview
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	if (mm == 12) {
		mm = '01';
		yyyy = yyyy + 1;
	} else {
		mm = parseInt(mm) + 1;
		mm = String(mm).padStart(2, '0');
	}
	var timerdate = mm + '/' + dd + '/' + yyyy;
	// For demo preview end


	// Use this for real timer date
	/*  var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function (event) {
		$(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
	});

})(jQuery);


// /* >>> Add >>> Курс валют */
// const exchangeRates = {
// 	"date": "14.04.2025",
// 	"time": "17:00:01",
// 	"rate_values": [
// 		{ "currency": "RUB", "buy_rate": 1.0391 },
// 		{ "currency": "TJS", "buy_rate": 0.1699 },
// 		{ "currency": "EUR", "buy_rate": 99.8898 },
// 		{ "currency": "USD", "buy_rate": 87.45 }
// 	]
// };

// function updateTicker(rates) {
// 	const text = rates.rate_values.map(rate => {
// 		return `${rate.currency}: ${rate.buy_rate}`;
// 	}).join(' | ');
// 	document.getElementById('currency-marquee').textContent = text;
// }

// updateTicker(exchangeRates);
// /* <<< End >>> */

// /* >>> Add >>> Языковой селектор */
// const langBtn = document.getElementById('language-button');
// const langMenu = document.getElementById('language-menu');
// const currentFlag = document.getElementById('current-flag');
// const currentLang = document.getElementById('current-lang');

// langBtn.addEventListener('click', () => {
// 	langMenu.classList.toggle('hidden');
// });

// document.querySelectorAll('.language-option').forEach(option => {
// 	option.addEventListener('click', () => {
// 		const selectedLang = option.getAttribute('data-lang');
// 		const selectedFlag = option.getAttribute('data-flag');
// 		const selectedLabel = option.textContent;

// 		currentFlag.src = selectedFlag;
// 		currentLang.textContent = selectedLabel;

// 		langMenu.classList.add('hidden');

// 		// Здесь можно вставить логику смены языка
// 		// window.location.href = `/${selectedLang}/index.html`;
// 	});
// });
/* <<< End >>> */
// cfaed1b6c13a56838ffc762feee25d326c72dcfb
// Use this for experimental purposes only
// $(document).ready(function() {
