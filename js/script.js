(function($) {
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);
(function($) {
	$(function() {
		$('ul.cards__list').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.cards__tabs').find('div.card__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);

$('.hamburger').click(function(){
	$('.adaptive__menu').toggleClass('active');
});

$(document).mouseup(function(e) {
  var $target = $(e.target);
  if ($target.closest(".adaptive__menu").length == 0 && $target.closest(".hamburger").length == 0) {
    $(".adaptive__menu").removeClass("active");
  }
});
$(function(){
	$(".fk-wallet").mask("F 999999999");
	$(".visa-card").mask("9999-9999-9999-9999");
	$(".qiwi-card").mask("+7 (999) 999-99-99");
});
