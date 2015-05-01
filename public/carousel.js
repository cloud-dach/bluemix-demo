(function($){

    $("#home-li").on( 'click', function( event ) {
    	$("#myCarousel").carousel('cycle');
    });
    $("#about-li").on( 'click', function( event ) {
    	$("#myCarousel").carousel('pause');
    	$("#myCarousel").carousel(0);
    });
    $("#project-li").on( 'click', function( event ) {
    	$("#myCarousel").carousel('pause');
    	$("#myCarousel").carousel(1);
    });
    $("#day-li").on( 'click', function( event ) {
    	$("#myCarousel").carousel('pause');
    	$("#myCarousel").carousel(2);
    });
})(jQuery);