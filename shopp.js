/*
* shoppp - A PayPal Shop Plugin
* @author: Warren Haskins - @warrenhaskins
* @url: https://github.com/Wurren/Shoppp-jQuery-Plugin
* @documentation: https://github.com/Wurren/Shoppp-jQuery-Plugin
* @published: 21/11/2011
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
*  http://creativecommons.org/licenses/by-nc-sa/3.0/
*/

;(function($){

	$.fn.shoppp = function(options) {

		// Global options. All thats really needed here is the Email Address and the Currency Code

		$.fn.shoppp.optionz = {
			"email" : "",
			"currency" : "EUR"
		};
		
		// Mesh in your settings into the global settings. Like a boss.	

		var settings = $.extend({}, $.fn.shoppp.optionz, options);

		// return object for chaining

		return this.each(function() {

			// Getting and setting from the <ul /> & then building the string.

			var product = $(this);
				parent = $(this).parent().parent(),
				itemTitle = $('.itemTitle', parent).text(),
				itemDesc = $('.itemDesc', parent).text(),
				itemPrice = $('.itemPrice', parent).text().substr(1),
				url = "https://www.paypal.com/cgi-bin/webscr?cmd=_cart&upload=1&business=" + settings.email + "&currency_code=" + settings.currency,
				build = "&item_name_1=" + itemTitle + "&item_number_1=1&quantity_1=1&amount_1=" + itemPrice;

			// Building the link, and changing the url to link to Paypal.

			product.attr("href", url + build);


			// That's it. Nice and Simple.

		});

	};

})(jQuery);

