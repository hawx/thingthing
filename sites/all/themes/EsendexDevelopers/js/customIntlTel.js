$(function() {
	if($("#FT-PhoneNumber").length){
		var selectedCountry = $("#FT-PhoneNumber").intlTelInput("getSelectedCountryData");
		changeLeftPos('+' + selectedCountry.dialCode);
	}
});