$(window).load(function() {
		$(".before-after").twentytwenty({
			before_label: 'Без скинали', 
			after_label: 'Со скинали' 
		});
		$('.before-slider').slick({
			draggable: false,
			dots: true,
			dotsClass: 'before-slider__dots',
			prevArrow: $('.arrow-left'),
			nextArrow: $('.arrow-right')
		});
		$('.menu-button').on('click', function(){
			$('.menu').toggleClass('menu_active');
		});
    //Select
    $('.select_checked').on('click', function(){
      $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $('.select__option').on('click', function(){
      $('#select-type').val($(this).attr('data-value'));
      $('.select_checked').text($(this).attr('data-value'));
      $('.select__dropdown').toggleClass('select__dropdown_open');
    });
    $("a[href^='#']").click(function(event) {
      var _href = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(_href).offset().top - 120+"px"});
      return false;
    });
    $('input[type="tel"]').mask("+38 (099) 999-99-99");
    //Показывать карту когда докрутили до нее
    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll',function(event) {
      var windowTop = $(this).scrollTop();
      if(windowTop>reviewsTop){
        $('#map').html(`
          <script>
            function initMap(){
              var uluru = {lat: 50.5039559, lng: 30.4918361};
              // The map, centered at Uluru
              var map = new google.maps.Map(
                  document.getElementById('map'), {zoom: 17, center: uluru});
              // The marker, positioned at Uluru
              var marker = new google.maps.Marker({position: uluru, map: map});}         
          </script>
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfhy5EinBbYtq589Vudhio0e2WCP0FcD4&callback=initMap">
          </script>`);
        $(window).unbind('scroll');
      }
    });
});

          function initMap(){
    // The location of Uluru
  var uluru = {lat: 50.5039559, lng: 30.4918361};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}