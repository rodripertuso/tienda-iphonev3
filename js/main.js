
function dateArea(){
    var dateDay = new Date().getDate();
    var d = new Date();
    var dateMonth = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    var dateName = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    
    document.querySelector(".day").innerHTML=dateDay;
    document.querySelector(".month").innerHTML=dateMonth[d.getMonth()];
    document.querySelector(".day-name").innerHTML=dateName[d.getDay()];
  }
  
  setInterval(dateArea, 1000);
  
  function clockArea(){
    var hoursArea = new Date().getHours();
    var minutesArea = new Date().getMinutes();
    var clockArea = hoursArea + ":" + minutesArea;
    
    if(hoursArea<10){
      var clockArea = "0" + hoursArea + ":" + minutesArea;
    } else if(minutesArea<10){
      var clockArea = hoursArea + ":0" + minutesArea;
    } else{
      var clockArea = hoursArea + ":" + minutesArea;
    }
    document.querySelector(".clock-area").innerHTML = clockArea;
  }
  
  setInterval(clockArea, 1000);
  
  var ntf = document.querySelector(".bell");
  var ntfBell = document.querySelector(".sound");
  var ntfBellSlash = document.querySelector(".quiet");
  var dynamicIsland = document.querySelector(".dynamic-island");
  var bellAnmArea = document.querySelector(".bell-animation-area");
  var bellAnm = document.querySelector(".bell-animation");
  
  ntf.addEventListener("click", function(){
    if(ntfBellSlash.style.display !== "inline"){
      ntfBellSlash.style.display="inline";
      ntfBell.style.display="none";
      bellAnmArea.style.display="block";
      bellAnm.style.display="block";
      document.querySelector(".ntf-1").style.display="inline";
      document.querySelector(".ntf-2").style.display="none";
      setTimeout("bellAnmArea.style.display='none'", 7000);
      setTimeout("bellAnm.style.display='none'", 5000);
      geoIcon.style.visibility="hidden";
      geoIcon.style.opacity="0";
      setTimeout("geoIcon.style.visibility='visible'", 7000);
      setTimeout("geoIcon.style.opacity='1'", 7000);
      document.querySelector(".bi-soundwave").style.opacity="0";
      document.querySelector(".bi-soundwave").style.visibility="hidden";
      setTimeout("document.querySelector('.bi-soundwave').style.visibility='visible'", 7000);
      setTimeout("document.querySelector('.bi-soundwave').style.opacity='1'", 7000);
    }
    
    else {
      ntfBellSlash.style.display="none";
      ntfBell.style.display="inline";
      bellAnmArea.style.display="block";
      bellAnm.style.display="block";
      document.querySelector(".ntf-1").style.display="none";
      document.querySelector(".ntf-2").style.display="inline";
    }
  })
  
  var spotify = document.querySelector(".spotify");
  spotify.addEventListener("click", function(){
    if(document.querySelector(".music-player").style.visibility !== "visible"){
      document.querySelector(".music-player").style.visibility="visible";
      document.querySelector(".spotify").style.color="#1ED760";
      document.querySelector(".music-player").style.marginTop="20px";
      document.querySelector(".music-player").style.opacity="1";
      document.querySelector(".notification").style.display="none";
      document.querySelector(".flash-and-camera").style.display="none";
      fuelArea.style.visibility="hidden";
      fuelArea.style.bottom="100px";
      fuelArea.style.opacity="0";
      fuelWidgetIcon.style.color="white";
    } else{
        document.querySelector(".music-player").style.visibility="hidden";
        document.querySelector(".spotify").style.color="white";
        document.querySelector(".music-player").style.marginTop="0px";
        document.querySelector(".music-player").style.opacity="0";
        document.querySelector(".notification").style.display="block";
        document.querySelector(".flash-and-camera").style.display="block";
    }
  })
  
  var dynamicVolume = document.querySelector(".bi-soundwave");
  dynamicVolume.addEventListener("click", function(){
    if(document.querySelector(".music-player").style.visibility !== "visible"){
      document.querySelector(".music-player").style.visibility="visible";
      document.querySelector(".spotify").style.color="#1ED760";
      document.querySelector(".music-player").style.marginTop="20px";
      document.querySelector(".music-player").style.opacity="1";
      document.querySelector(".notification").style.display="none";
      document.querySelector(".flash-and-camera").style.display="none";
      fuelArea.style.visibility="hidden";
    } else{
        document.querySelector(".music-player").style.visibility="hidden";
        document.querySelector(".spotify").style.color="white";
        document.querySelector(".music-player").style.marginTop="0px";
        document.querySelector(".music-player").style.opacity="0";
        document.querySelector(".notification").style.display="block";
        document.querySelector(".flash-and-camera").style.display="block";
    }
  })
  
  var geoIcon = document.querySelector(".bi-geo-alt-fill");
  var fuelArea = document.querySelector(".fuel-area");
  var fuelWidgetIcon = document.querySelector(".fuelWidgetIcon");
  
  fuelWidgetIcon.addEventListener("click", function(){
    if(fuelArea.style.visibility !== "visible"){
      fuelArea.style.visibility="visible";
      fuelArea.style.opacity="1";
      fuelArea.style.bottom="110px";
      geoIcon.style.right="87px";
      geoIcon.style.visibility="visible";
      geoIcon.style.opacity="1";
      dynamicIsland.style.left="83px";
      document.querySelector(".dynamic-island-camera").style.right="125px";
      document.querySelector(".bi-soundwave").style.left="100px";
      fuelWidgetIcon.style.color="rgb(30, 215, 96)";
      document.querySelector(".music-player").style.visibility="hidden";
      document.querySelector(".music-player").style.marginTop="0px";
      document.querySelector(".music-player").style.opacity="0";
      document.querySelector(".spotify").style.color="white";
    } else{
      fuelArea.style.visibility="hidden";
      fuelArea.style.opacity="0";
      fuelArea.style.bottom="100px";
      geoIcon.style.right="100px";
      geoIcon.style.visibility="hidden";
      geoIcon.style.opacity="0";
      dynamicIsland.style.left="100px";
      document.querySelector(".dynamic-island-camera").style.right="110px";
      document.querySelector(".bi-soundwave").style.left="120px";
      fuelWidgetIcon.style.color="white";
    }
  })
  
  
  var sarki=document.getElementById("sarki");
  var oynat=document.getElementById("oynat");
  var ses=document.getElementById("ses");
   
  //What to do when you hit the play button
  oynat.onclick=function(){
    if(sarki.paused){
      sarki.play();
      document.querySelector(".bi-pause-fill").style.display="inline";
      document.querySelector(".bi-play-fill").style.display="none";
      document.querySelector(".music-poster").style.transform="scale(1)";
      document.querySelector(".bi-soundwave").style.display="block";
    } else{
      sarki.pause();
      document.querySelector(".bi-pause-fill").style.display="none";
      document.querySelector(".bi-play-fill").style.display="inline";
      document.querySelector(".music-poster").style.transform="scale(.9)";
      document.querySelector(".bi-soundwave").style.display="none";
    }
  }
  
  
  //what to do when range object is changed for audio setting
  /* ses.oninput=function(){
    sarki.volume =ses.value/100;
  }
  */
  
  //Update range object when volume is changed from control
  sarki.onvolumechange=function(){
    ses.value=sarki.volume*100;
  }












/*----------------------

---------------------------*/

/*    BARRA DE PROGRESION      */

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
  };
  
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;



(function($) {
    "use strict";
    
    
    
   /*-----
    	 jQuery MeanMenu
    -------------------*/
    jQuery('nav#dropdown').meanmenu();
    
    /*---
    	 wow js active
    ------------- */
    new WOW().init();
    
    
    /*------
       stickey menu
    ----------------*/
    $(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 265) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
           }
    });
    
    /*--
    Nivo Slider
    -----------------------------------*/
    $('#home-slider').nivoSlider({
        directionNav: true,
        animSpeed: 1000,
        effect: 'random',
        slices: 18,
        pauseTime: 88885000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-long-arrow-left"></i>',
        nextText: '<i class="fa fa-long-arrow-right"></i>'
    });
    
    /*-----
		05. Isotope activation
	------------------*/
    $(window).on('load',function(){

        // Activate isotope in container
        $(".product-filter").isotope({
           itemSelector:'.filter-item'
        });

        //add isotope click function
        $('.product-filter-menu li').on('click',function(){
           $(".product-filter-menu li").removeClass("active");
           $(this).addClass("active");

           var selector = $(this).attr("data-filter");
         $(".product-filter").isotope({
             filter: selector,
             animationOptions:{
                 duration:750,
                 easing:'linear',
                 queue: false
             }
         });
         return false;
        });

    });

    
    /*-----
        portfolio item 2 activation
    ---------------------*/
    
    $('.grid').imagesLoaded( function() {

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });	

        // init Isotope
        var $grid = $('.grid').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1
          }
        });
    
    });
    
    /*------
        portfolio item 3 activation
    ------------------*/
    
    $('.grid-2').imagesLoaded( function() {

        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });	

        // init Isotope
        var $grid = $('.grid-2').isotope({
          itemSelector: '.grid-item',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
          }
        });
    
    });
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
        
    /*------
      Counter Up
    -------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });
    /* magnificPopup video popup */
    $('.video-play a').magnificPopup({
        type: 'iframe'
    });
    
    /* magnificPopup image popup */
    /*$('.single-portfolio a').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        }
    });*/
    /*------
      slider active
    ---------------- */  
    $(".our-brand-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 4,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
    });
     
    $(".portfolio-slide").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
    });
    $(".related-product-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 3,
      navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
    });
     
    /*--
    Product Details Thumbnail Slider
    -----------------*/
    $('.pro-thumb-img-slider').slick({
        speed: 700,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="arrow-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="arrow-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    /*--
        Testimonial Slider
    -----------------*/
   $('.testimonial-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        arrows: false,
        centerMode: false,
        responsive: [
            
            {
              breakpoint: 767,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            },
            {
              breakpoint: 480,
              settings: {
                autoplay: true,
                dots: false,
                slidesToShow: 1,
                centerMode: false,
                }
            }
        ]
    })
    
    
   /*------------------
        5. Price Slider
    --------------------------*/
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 2500,
        values: [ 0, 2000 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    
    
    /*--
    Product Quantity
    -----------------------------------*/
    $('.product-quantity').append('<span class="dec qtybtn"><i class="fa fa-angle-left"></i></span><span class="inc qtybtn"><i class="fa fa-angle-right"></i></span>');
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    /*--
        Checkout Form Collapse on Checkbox
    -----------------------------------*/
    $('.checkout-form input[type="checkbox"]').on('click', function(){
        var $collapse = $(this).data('target');
        if( $(this).is(':checked') ){
            $('.collapse[data-collapse="'+$collapse+'"]').slideDown();
        }else {
            $('.collapse[data-collapse="'+$collapse+'"]').slideUp();
        }
    })
    
    /*--
    Product Filter Toggle
    -----------------------------------*/
    $('.product-filter-toggle').on('click', function(){
        $('.product-filter-wrapper').slideToggle();
    })
    
    
    
     /*-------------------------------------------
    	scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    


    
})
(jQuery);


$(document).ready(function(){
	var ir_a = $(".desplazar");

	ir_a.click(function(event){
		event.preventDefault();
		$("body , html").animate(
		{
			scrollTop: $(this.hash).offset().top,
		}, 1500
			)
			
	})
}) 



