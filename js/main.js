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
    $('input[type="tel"]').mask("+38 (099) 999-99-99")
});