/*
* shoppp - A PayPal Shop Plugin
* @author: Warren Haskins - @warrenhaskins
* @url: https://github.com/Wurren/Shoppp-jQuery-Plugin
* @documentation: https://github.com/Wurren/Shoppp-jQuery-Plugin
* @published: 21/11/2011
* @updated: 01/05/2014 
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
*  http://creativecommons.org/licenses/by-nc-sa/3.0/
*/


;(function ( $, window, document, undefined ) {
    
    var 	pluginName = 'shoppp',
		document 	 = window.document,
		defaults 	 = {
			email : false,
			currency : "EUR"
		};

	function Plugin( element, options ) {

		this.$el 		= $(element);
		this.options 	= $.extend( {}, defaults, options);

		this.url 		= "https://www.paypal.com/cgi-bin/webscr?cmd=_cart&upload=1&business=" + this.options.email + "&currency_code=" + this.options.currency;

		this.title 	= this.$el.data('title');
		this.desc 	= this.$el.data('desc');
		this.price 	= this.$el.data('price');
		this.quantity 	= this.$el.find('*[data-quantity]');
		this.buy 		= this.$el.find('*[data-buy]');

		if ( !this.options.email ) return console.log('You must use an email address registered with Paypal.');

		this.init();
	}

	Plugin.prototype =  {

    		init : function() {
    			this.buy.on('click', $.proxy(this.build, this));
    		},

    		getQTY : function() {
    			return this.quantity.val() || 1;
    		},

    		build : function(e) {

    			e.preventDefault();

    			var uri = "&item_name_1=" + this.title + "&item_number_1=1&quantity_1=" + this.getQTY() + "&amount_1=" + this.price;

    			window.location.href = this.url + uri;

    		}

	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
		});
	};

}(jQuery, window, document));









