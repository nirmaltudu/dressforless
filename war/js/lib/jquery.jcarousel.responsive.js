(function($) {
	
	$(function() {
			
		var jcarousel = $('.jcarousel');
			
		jcarousel.on('jcarousel:reload jcarousel:create', function () {
		})
		
		.jcarousel({
			wrap: 'circular'
		});
		
		$('.jcarousel-control-prev')
			.jcarouselControl({
				target: '-=1'
			});
		
		$('.jcarousel-control-next')
			.jcarouselControl({
				target: '+=1'
			});
		
		$('.jcarousel-pagination')
			.on('jcarouselpagination:active', 'a', function() {
				$(this).addClass('active');
			})
			.on('jcarouselpagination:inactive', 'a', function() {
				$(this).removeClass('active');
			})
			.on('click', function(e) {
				e.preventDefault();
			})
			.jcarouselPagination({
				perPage: 1,
				item: function(page) {
					return '<a href="#' + page + '">' + page + '</a>';
				}
			});
	});
})(jQuery); 