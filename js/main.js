jQuery(document).ready(function($) {
  if ($(window).width() <= '991') {
    googlemapThree();
  }
  else if ($(window).width() <= '600') {
    googlemapTwo();
  }
  else{
    googlemap();
  };
//sliders
var swiper = new Swiper('.slider .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true, 
    autoplay:10000, 
});
var swiperBottom = new Swiper('.feedback .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    autoplay:10000, 
});

//map
function googlemap(){
  var isDraggable = 'ontouchstart' in document.documentElement ? false : true;
  var mapOptions = {
      zoom: 13,
      draggable: isDraggable,
      panControl: true,
      center: new google.maps.LatLng(50.026817, 36.272649),
      zoomControl: true,
      scaleControl: true,
      scrollwheel: false,
      shortSwipes: false,
      longSwipes: true,
      streetViewControl: false,
      longSwipesRatio: 2.9,
      threshold: 100,
      mapTypeControl: false,
      zoomControlOptions  : {
          position    : google.maps.ControlPosition.LEFT_CENTER,
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(50.0279135,36.2148578),
        map: map
    });  
};

function googlemapTwo(){
  var isDraggable = 'ontouchstart' in document.documentElement ? false : true;
  var mapOptions = {
    zoom: 13,
    draggable: isDraggable,
    panControl: true,
    center: new google.maps.LatLng(50.0279135,36.2148578),
    zoomControl: true,
    scaleControl: true,
    scrollwheel: false,
    shortSwipes: false,
    longSwipes: true,
    streetViewControl: false,
    longSwipesRatio: 2.9,
    threshold: 100,
    mapTypeControl: false,
    zoomControlOptions  : {
        position    : google.maps.ControlPosition.LEFT_CENTER,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var beachMarker = new google.maps.Marker({
      position: new google.maps.LatLng(50.0279135,36.2148578),
      map: map
  });  
};

function googlemapThree(){
  var isDraggable = 'ontouchstart' in document.documentElement ? false : true;
  var mapOptions = {
    zoom: 13,
    draggable: isDraggable,
    panControl: true,
    center: new google.maps.LatLng(50.033876, 36.233299),
    zoomControl: true,
    scaleControl: true,
    scrollwheel: false,
    shortSwipes: false,
    longSwipes: true,
    streetViewControl: false,
    longSwipesRatio: 2.9,
    threshold: 100,
    mapTypeControl: false,
    zoomControlOptions  : {
        position    : google.maps.ControlPosition.LEFT_CENTER,
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var beachMarker = new google.maps.Marker({
      position: new google.maps.LatLng(50.0279135,36.2148578),
      map: map
  });  
};

  // po-up photo (magnific pop-up)
  $(document).ready(function() {
    $(".popup_c").magnificPopup({
      tClose: '',
    });
    $('.image-popup-no-margins').magnificPopup({
      tClose: '',
      type: 'image',
      mainClass: 'mfp-with-zoom',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });

    $('.popup_c').click(function(event) {
      var target = $(this).attr('href');
      var text = $(this).attr('data-title');
      $(target).find('h3').text(text);
      $(target).find('input[name="title"]').val(text);
    });


  });
  


  // header other contacts
  $('.more').on("click", function(){
    if($('.dop-contacts').hasClass('active')){
      $('.dop-contacts').removeClass('active');
      $('.more').removeClass('active');
      $('.more').css("text-decoration","underline");
    }
    else{
      $('.dop-contacts').addClass('active');
      $('.more').addClass('active');
      $('.more').css("text-decoration","none");
    }
  })
  $(window).resize(function() {
    if ($(window).width() <= '991'){
      $('.dop-contacts').removeClass('active');
      $('.more').removeClass('active');
      return this;
    }
    else{
      return;
    }
  });
  // $("*").not('.dop-contacts, .more').click(function(){
  //   $('.dop-contacts').removeClass('active').hide('slow/400/fast', function() {});
  // });
});

//tooltips
$( function() {
  $( document ).tooltip({
    show: null,
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
    },
    open: function( event, ui ) {
      ui.tooltip.animate({ top: ui.tooltip.position().top + 10 }, "long" );
    }
  });
} );

// mob menu
  $('.burger').click(function(event) {
    if ($('header .mobile-nav').hasClass('active')) {
      $('header .mobile-nav').removeClass('active').hide('slow/400/fast', function() {});
    }else{
      $('header .mobile-nav').addClass('active').show('slow/400/fast', function() {      });
    };
    return false;
  });
  
  $(".slider").click(function(){
    $('header .mobile-nav').removeClass('active').hide('slow/400/fast', function() {});
      
  });
  $(".slider .swiper-slide, .price-clear-woter, .not-all, .why-atoll, .technology, .politics, .premium, .goods, .cartridges, .price-question, .atoll-controls, .feedback, .delivery, .payment, .our-company, .map, footer").click(function(){
    $('.dop-contacts').removeClass('active');
    $('.more').removeClass('active');
    $('.more').css("text-decoration","underline");
  });
//scroll
$(document).ready(function(){
  $(function()
  {

    //header
    $('.nav-header').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#header').offset().top
      },
      800
      )
    })

    //why-atoll
    $('.nav-why').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#why-atoll').offset().top-107
      },
      800
      )
    })
    //goods
    $('.nav-goods').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#goods').offset().top-107
      },
      1000
      )
    })
    //price-questions
    $('.nav-price-question').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#price-question').offset().top-107
      },
      1200
      )
    })
    //deliveri and payment
    $('.nav-delivery').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#delivery').offset().top-107
      },
      1400
      )
    })
    //contacts
    $('.nav-google-map').click(function(){
      $('html,body').animate(
      {
        scrollTop:$('#google-map').offset().top-107
      },
      1600
      )
    })
  });
});

//scroll-top
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 900) {
      $('#to-top').fadeIn();
    } 
    else {
      $('#to-top').fadeOut();
    }
  });
  $('#to-top').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});
//scroll-bottom
$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() >900) {
      $('#to-bottom').fadeIn();
    } 
    else {
      $('#to-bottom').fadeOut();
    }
  });
  $('#to-bottom').click(function() {
    $('html,body').animate(
      {
        scrollTop:$('#google-map').offset().top
      },
      1400
      )
  });
});

//fixed top menu
var ww = $(window).width();
if (ww > 991) {
  var $menu = $(".head-wrap");
  $(window).scroll(function(){
    if ( $(this).scrollTop() !=0 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
    } else if($(this).scrollTop() == 107 && $menu.hasClass("fixed")) {
        $menu.removeClass("fixed").addClass("default");
    }
  });
}

//form submit
$("form").submit(function (event) {
  event.preventDefault()
  $(".error").removeClass("error");
  var $this = $(this);
  var $iname = $this.find("[name=name]"),
      $iphone = $this.find("[name=phone]");

  var iarr = [$iname, $iphone];

  for (var i = iarr.length - 1; i >= 0; i--) {
    if (iarr[i].length > 0) {
      if (iarr[i].val().length < 1 || iarr[i].val() == iarr[i].attr("data-title")) {
        iarr[i].addClass("error").val(iarr[i].attr("data-title")).css("color","red");
          $('input').focus(function(event) {
            $(this).removeClass("error").val("").css("color", "black");
          });
      };
    };
  };

  if ($this.find(".error").length < 1) {
    $.post("order.php", $this.serialize()).done(function () {
      $.magnificPopup.open({
        items: {
          src: '<div id="confirmation-form"><h2>Спасибо, ваша заявка принята!</h2><img src="images/check-form.svg" alt=""></div>', // can be a HTML string, jQuery object, or CSS selector
          type: 'inline'
        }
      });
      $("form input").val("").text("");
      dataLayer.push({'event':'form.Submit'});
    })
    
  };
});

