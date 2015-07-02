jQuery(document).ready(function() {
	jQuery('.countryChanger .dropdown-menu a').on('click', function(){
		var currentCountry = jQuery(this).html();
		if (currentCountry) {
			jQuery(this).parents('.countryChanger').find('.countryActive').html(currentCountry);
		}
	});
});