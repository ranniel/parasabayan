$(document).ready(function(){
	"use strict";	

    
/*==================================
    * Author        : "Setu Islam"
    * Template Name : Minister | HTML Template
    * Version       : 1.0
==================================== */
    
/*=========== TABLE OF CONTENTS ===========

	01. wow js active
	02.	Pre-loader
	03. Scroll To Top
	04. Smooth Scroll
	05. Home1 Donation video magnificPopup 
	06. Home1 timer
	07. owl carousel active
		i.Owl carousel(Home1 conferencce)
		ii.Owl carousel(home1_partner)
		iii.Owl carousel(about_testimonial)
	08.  Masonry 
		i.Home1(gallery)
		ii.Event (Campaign)
	09.	Map

======================================*/

	/*--------------------------------
	 	01. wow js active
	----------------------------------*/

		new WOW().init();
		
	/*--------------------------------
		02.	Pre-loader 
	----------------------------------*/

		$('.preloader').delay(1000).fadeOut(500);

	/*--------------------------------
	 	03. Scroll To Top
	----------------------------------*/

		$.scrollUp({
			scrollText: '<i class="fa fa-level-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		});	
		
	/*--------------------------------
	 	04. Smooth Scroll
	---------------------------------*/

		$('a.data-scroll').on("click", function(e) {
		    e.preventDefault();
		    var anchor = $(this);
		    $('html, body').stop().animate({
		        scrollTop: $(anchor.attr('href')).offset().top - 0
		    }, 1500);
		});
	
	 /*----------------------------------------
		05. Home1 Donation video magnificPopup  
	---------------------------------------------*/

		$('.home1_donation_video .video a').magnificPopup({
			disableOn: 0,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: true,
			fixedContentPos: false
		});
	
	/*--------------------------------
	 	06. Home1 timer
	---------------------------------*/
		function makeTimer() {

			var endTime = new Date("February 21, 2018 12:00:00 PDT");			
			var endTime = (Date.parse(endTime)) / 1000;

			var now = new Date();
			var now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$("#days").html(days + '<span class="timer">Days</span>');
			$("#hours").html(hours + '<span class="timer">Hour</span>');
			$("#minutes").html(minutes + '<span class="timer">Minute</span>');
			$("#seconds").html(seconds + '<span class="timer">Second</span>');		

		}
		setInterval(function() { makeTimer(); }, 1000);	
	
	// ===== 07. owl carousel active=====
			
		//i. Owl carousel(Home1 conferencce)
		$('.home1_conference_single').owlCarousel({
			items: 4,
			loop:true,
			margin:36,
			mouseDrag:true,
			dots:false,
			nav: true,
			navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
			smartSpeed: 1000,
			autoplay: false,
			responsive:{
					0:{
						items:1
					},
					600:{
						items:2
					},
					800:{
						items:2
					},
					1024:{
						items:3
					}
					
				}
		});	
  		
		//ii. Owl carousel(home1_partner)

		$('.home1_partner_brand').owlCarousel({
			items: 5,
			loop:true,
			margin:36,
			mouseDrag:true,
			dots:false,
			nav: false,
			smartSpeed: 1000,
			autoplay: true,
			responsive:{
					0:{
						items:2
					},
					600:{
						items:2
					},
					700:{
						items:3
					},
					800:{
						items:5
					},
					1024:{
						items:5
					},
					1200:{
						items:5
					}
				}
			});
				
		//iii.Owl carousel(about_testimonial)

		$("#about_ttml").owlCarousel({
			items: 1,
			autoplay: true,
			loop: true,
			dots:false,
			mouseDrag:true,
			nav:true,
			navText:["<i class='flaticon-arrows-1'></i>","<i class='flaticon-arrows'></i>"],
			smartSpeed:1000,
			transitionStyle:"fade",
			animateIn: 'fadeIn',
			animateOut: 'fadeOutLeft'			
		});	
		
		// ===== 8. i. Home1 Masonry (gallery) =====

		$('.grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.grid-item',
		  // use element for option
		  columnWidth: 1,
		  percentPosition: true
		});
		
		// ===== 7. ii.Event (Campaign) =====	
		$('.event-grid').masonry({
		  // set itemSelector so .grid-sizer is not used in layout
		  itemSelector: '.event-grid-item',
		  // use element for option
		  columnWidth: 1,
		  percentPosition: true
		})
		
		// ===== 9. Map =====
		var map;
			var getTile = function(coord, zoom, ownerDocument) {
			var div = ownerDocument.createElement('div');
			div.style.width = this.tileSize.width + 'px';
			div.style.height = this.tileSize.height + 'px';
			div.style.background = 'rgba(7, 7, 7, 0.50)';
			div.style.lineHeight = this.tileSize.height + 'px';
			return div;
	    };
		$('.minister_map_display').each(function() {
			var element = $(this).attr('id');
			map = new GMaps({
			el: '#' + element,
			center: new google.maps.LatLng(40.7504864,-74.0014333),
			zoom:13,
			scrollwheel: false,
			styles: [
					{
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#b3b3b3"
							},
							{
								"lightness": 17
							}
						]
					},
					{
						"featureType": "landscape",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#e0e0e0"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#a8a8a8"
							},
							{
								"lightness": 17
							}
						]
					},
					{
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#dfdfdf"
							},
							{
								"lightness": 29
							},
							{
								"weight": 0.2
							}
						]
					},
					{
						"featureType": "road.arterial",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f8f8f8"
							},
							{
								"lightness": 18
							}
						]
					},
					{
						"featureType": "road.local",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#f8f8f8"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"featureType": "poi",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#dfdfdf"
							},
							{
								"lightness": 21
							}
						]
					},
					{
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#333"
							},
							{
								"lightness": 21
							}
						]
					},
					{
						"elementType": "labels.text.stroke",
						"stylers": [
							{
								"visibility": "on"
							},
							{
								"color": "#dfdfdf"
							},
							{
								"lightness": 16
							}
						]
					},
					{
						"elementType": "labels.text.fill",
						"stylers": [
							{
								"saturation": 36
							},
							{
								"color": "#333333"
							},
							{
								"lightness": 10
							}
						]
					},
					{
						"elementType": "labels.icon",
						"stylers": [
							{
								"visibility": "on"
							}
						]
					},
					{
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [
							{
								"color": "#dfdfdf"
							},
							{
								"lightness": 19
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.fill",
						"stylers": [
							{
								"color": "#dfdfdf"
							},
							{
								"lightness": 20
							}
						]
					},
					{
						"featureType": "administrative",
						"elementType": "geometry.stroke",
						"stylers": [
							{
								"color": "#535353"
							},
							{
								"lightness": 17
							},
							{
								"weight": 1.2
							}
						]
					}
				]
			});
			map.addMarker({
			lat: 40.7587442,
			lng:-73.9808623,
				title: 'Dhaka',
				icon:'images/map-marker.png',
			   
			});
		});		
		
});