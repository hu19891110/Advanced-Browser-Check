jQuery(document).ready(function($){

	var el = $('.advanced-browser-check');

	if(el.length > 0) { // If the wrapper container exists, continue

		var url = el.data('url');

		if(!$.cookie('abc-hide')) {

			$.ajax({
				url : url.abc_url,
				type : 'POST',
				dataType : 'HTML',
				data : 'abc_ajax=true',
				success : function(response) {

					if(response) {

						// We will need to add a css class to the body
						// if we detect IE 6 for combability css to load
						// properly
						if ($(response).find('.ie6').length > 0) {
							$('body').addClass('abc-ie6');
						}

						// Put in HTML response into the wrapper container
						el.html(response).show();

						// Hide the overlay if the close btn is clicked
						el.on('click','a.abc-hide',function(e){
							e.preventDefault();

							el.fadeOut('slow');
							$.cookie("abc-hide", true, { expires: 1, path: '/' });
						});
					}

				}
			});

		}

	}

});