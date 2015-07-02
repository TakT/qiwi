jQuery(document).ready(function() {

    jQuery('select').selectric().on('change', function(e) {
        console.log(e);
        console.log($(this).val());

        var countryChangerHtml = jQuery('.countryChanger').html();

    });
});