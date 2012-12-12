/* Main Part of pinpoint
-------------------------------------------------- */

function FullAddressValidator(value, element, paras) {

    var CurrentAddress = value;

    if (value.length == 0) {
		$(".help").fadeIn().html("We're not sure what you mean ");
    }
    if ($(element).data("LastAddressValidated") == CurrentAddress) {
        return $(element).data("IsValid");
    }
    $(element).data("IsChecking", true);
    $(element).data("LastAddressValidated", CurrentAddress);
    CurrentAddress = CurrentAddress.replace(/\n/g, "");
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': CurrentAddress
        }, function (results, status) {
        
        if (status == google.maps.GeocoderStatus.OK) {
            var address = results[0].formatted_address;
            numCommas = address.match(/,/g).length;
            $(".arrow-down").fadeIn();
            $(".help").slideDown().html("<b>Do you mean:</b> " + "<span>" + address + "</span> " + " <a class='no'>No</a>  <a class='yes'>Yes</a>");
			$("input").attr('disabled','disabled');
            $(element).data("LastAddressValidated", address);
            $(element).data("IsValid", true);
        } 
        else {
	        $(element).data("IsValid", false);
			$(".help").slideDown().html("<b>We're not sure what you mean</b> <a class='no'>Close</a>  ");
    	}
	});
}

/* Extra cool jquery stuff (which you kinda need)
-------------------------------------------------- */

$('.name').live('focusout', function(e){
    if ($(".send-address-here").length == 0 ) {
        $(this).removeClass("send-address-here");
        var address_element = $(e.currentTarget);
        $('.address').addClass("send-address-here");
        FullAddressValidator(address_element.val(), address_element, null);
        $(e.currentTarget).parents('.quote_form').prepend($('.help'));
    }
});

/* Yes and No buttons
-------------------------------------------------- */

$(".help").hide();
$(".arrow-down").hide();

$(".yes").live("click", function(e) {
    $(".send-address-here").val($(".yes").siblings("span").text());
    $(".send-address-here").removeClass("send-address-here")
    $(e.currentTarget).parent().slideUp();
    $(".arrow-down").hide();
    $("input").removeAttr('disabled');
});

$(".no").live("click", function(e) {
    $(".send-address-here").removeClass("send-address-here")
    $(e.currentTarget).parent().slideUp();
    $(".arrow-down").hide();
    $("input").removeAttr('disabled');
});

