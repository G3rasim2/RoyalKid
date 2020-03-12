$(document).ready(function() {

  $('.nav__btn-menu').on('click', function(event){
    event.preventDefault();
    $('.nav__wrap-list').toggleClass('nav__navActive');
    $('.nav__btn-menu').toggleClass('nav__btnMenuActive');
  });

  $('.nav__btn').on('click', function(event){
    event.preventDefault();
    $('.request-call').addClass('request-call--active');
    $('.request-call__overlay').addClass('request-call__overlay--active');
  });
  $('.footer__btn').on('click', function(event){
    event.preventDefault();
    $('.request-call').addClass('request-call--active');
    $('.request-call__overlay').addClass('request-call__overlay--active');
  });

  $('.request-call__btn-close').on('click', function(event){
    event.preventDefault();
    $('.request-call').removeClass('request-call--active');
    $('.request-call__overlay').removeClass('request-call__overlay--active');
  });

  jQuery(function($){
    $(document).mouseup(function (event){
      event.preventDefault();
      var block = $(".request-call");
      if (!block.is(event.target)
        && block.has(event.target).length === 0) {
        $('.request-call').removeClass('request-call--active');
      }
    });
  });

  jQuery(function($){
    $(document).mouseup(function (event){
      event.preventDefault();
      var block = $(".request-call");
      var block2 = $(".request-accepted");
      if (!block.is(event.target) && !block2.is(event.target)
        && block.has(event.target).length === 0  && block2.has(event.target).length === 0) {
        $('.request-call__overlay').removeClass('request-call__overlay--active');
      }
    });
  });

  $('.request-accepted__btn-close').on('click', function(e){
    $('.request-accepted').removeClass('request-accepted--active');
    $('.request-call__overlay').removeClass('request-call__overlay--active');
  });

  jQuery(function($){
    $(document).mouseup(function (event){
      event.preventDefault();
    var block = $(".request-accepted");
    if (!block.is(event.target)
        && block.has(event.target).length === 0) {
        $('.request-accepted').removeClass('request-accepted--active');
      }
    });
  });

  $('.header__btn--catalog').on('click', function(event){
    event.preventDefault();
    $('.header__menu').toggleClass('header__menu-active');
  });

  $('.header__btn--search').on('click', function(event){
    event.preventDefault();
    $('.header__form-search').toggleClass('header__form-search-active');
  });

  $('.close-search').on('click', function(event){
    event.preventDefault();
    $('.header__form-search').removeClass('header__form-search-active');
  });


  $('.link--header').on('click', function(event){
    event.preventDefault();
    if ($(this).parent().hasClass('header__menu-link')) {
      $(this).parent().toggleClass('header__menu-link');
      $('.header__overlay').toggleClass('header__overlay--active');
    }
    else if(!$(this).parent().hasClass('header__menu-link')){
      $(this).parent().siblings().removeClass('header__menu-link');
      $(this).parent().addClass('header__menu-link');
      $('.header__overlay').removeClass('header__overlay--active');
      $('.header__overlay').addClass('header__overlay--active');
    }
  });

  jQuery(function($){
    $(document).mouseup(function (event){
      event.preventDefault();
      var block = $(".header__menu");
      if (!block.is(event.target)
        && block.has(event.target).length === 0) {
        $('.link--header').parent().removeClass('header__menu-link');
        $('.header__overlay').removeClass('header__overlay--active');
      }
    });
  });

   // Увеличение фотографий
    
  $(function(){
    $('.minimized').click(function(event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
        left: ($(document).width() - $('#magnify').outerWidth())/2,
        top: ($(document).height() - $('#magnify').outerHeight())/2,
        top: ($(window).height() - $('#magnify').outerHeight())/2
      });
      $('#overlay, #magnify').fadeIn('fast');
    });
    
    $('body').on('click', '#close-popup, #overlay', function(event) {
      event.preventDefault();
   
      $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });

  // Главная странийца

  $('#advantage-carousel').owlCarousel({
      nav:true,
      dots:true,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          }
      }
      
  });
  
  $('#partners-carousel').owlCarousel({
      nav:false,
      dots:true,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          900:{
              items:3
          },
          1200:{
              items:4
          },
          1600:{
              items:5
          }
      }
  });

  $('.about-us__open-text').on('click', function(event){
    event.preventDefault();
    $('.about-us__text p').toggleClass('about-us__p--on');
    $(this).remove();
  });

  $('#about-us-carousel').owlCarousel({
      nav:false,
      dots:true,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          }
      }
  });

  $('#certificate-carousel').owlCarousel({
      nav:false,
      dots:true,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1300:{
              items:3
          },
          1700:{
              items:4
          }
      }
  });
   $('#reviews-carousel').owlCarousel({
      nav:true,
      dots:true,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          900:{
              items:3
          },
          1300:{
              items:4
          }
      }
  });

   // Карта товара

   $('.product-card__sidebar div').on('click', function(event){
      event.preventDefault();
      $(this).siblings('.product-card__active').removeClass('product-card__active');
      $(this).addClass('product-card__active');
      $(this).parents("li").find('.product-card__img').attr("src",$(this).find('img').attr("src"));
    });

    // Странийца Каталога

    $('.catalog-filter__open-filter').on('click', function(event){
      event.preventDefault();
      $('.catalog-filter__mobil-seting-filter').addClass('catalog-filter__mobil-seting-filter--active');
    });

    $('.catalog-filter__btn-close').on('click', function(event){
      event.preventDefault();
      $('.catalog-filter__mobil-seting-filter').removeClass('catalog-filter__mobil-seting-filter--active');
    });

    // Странийца Товара

    $('.product-product__wrap-label label').on('click', function(event){
      $("#ex1").find("img").attr("src",$(this).find('img').attr("src"));
      $("#ex1").attr("src",$(this).find('img').attr("src"));
      $("#ex1").siblings(".product-product__view-product-icon").attr("src",$(this).find('img').attr("src"));
      $("#product-colors-name").html("<b>Расцветка:</b> " + $(this).find('img').attr("alt"));
      $("#product-model-name").html("<b>Модель:</b>  " + $(this).find('img').attr("title"));
      $("#product-manufacturer-name").html("<b>Производитель:</b> <span>" + $(this).attr("id") + "</span>");
      $("#product-price-name").html($(this).attr("title"));
    });

     $('#product-carousel img').on('click', function(event){
      $("#ex1").find("img").attr("src",$(this).attr("src"));
      $("#ex1").attr("src",$(this).attr("src"));
      $("#ex1").siblings(".product-product__view-product-icon").attr("src",$(this).attr("src"));
    });


    // Странийца О Магазине

    $('#about-shop-carousel').owlCarousel({
      nav:false,
      dots:false,
      navText:" ",
      loop: true,
      startPosition:0,
      margin:10,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed:1000,
      responsive:{
          0:{
              items:1
          },
          900:{
              items:3
          }
      }
    });

    $('.about-shop-assortment__toggle-text').on('click', function(event){
      event.preventDefault();
      $('.about-shop-assortment__block-text p').toggleClass('about-shop-assortment__text-on');
      $(this).remove();
    });

    // Странийца Гарантии

    $('.warranty-warranty__text-toggle').on('click', function(event){
      event.preventDefault();
      $('.warranty-warranty__text--off').toggleClass('warranty-warranty__text--on');
      $(this).remove();
    });

    $('.warranty-regulation__text-toggle-1').on('click', function(event){
      event.preventDefault();
      $('.warranty-regulation__text--off-1').toggleClass('warranty-regulation__text--on-1');
      $(this).remove();
    });

    $('.warranty-regulation__text-toggle-2').on('click', function(event){
      event.preventDefault();
      $('.warranty-regulation__text--off-2').toggleClass('warranty-regulation__text--on-2');
      $(this).remove();
    });

    // Странийца Доставка и оплата

    $('.delivery-payment-payment__open-text').on('click', function(event){
      event.preventDefault();
      $('.delivery-payment-payment__text-off').toggleClass('delivery-payment-payment__text-on');
      $(this).remove();
    });

    // Странийца Новости

     $('.news-all-pagination__toggle').on('click', function(event){
      event.preventDefault();
      $('.news-all-pagination__div').toggleClass('news-all-pagination__div--on');
      $(this).remove();
    });

    jQuery(function($){
      $(document).mouseup(function (event){
      event.preventDefault();
      var blockPag = $(".news-all-pagination__select");
      if (!blockPag.is(event.target)
        && blockPag.has(event.target).length === 0) {
        $('.news-all-pagination__div').removeClass('news-all-pagination__div--on');
        }
      });
    });
});