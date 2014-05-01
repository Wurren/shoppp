#Shoppp
A jQuery plugin for building a shop out of unordered lists, or any other element

##How to and Changes from the original Shoppp

Originally Shoppp worked by using class names on list items to get values and parse them into a Paypal URL. Thats a bit old hat now, and not very good code. With this new version you create your product container and define `data` attributes on the element to define your values. Like so:

```
 <ul class="product" data-title="Leather Jacket" data-desc="Size M" data-price="60.00">
	 <li>Leather Jacket</li>
	 <li>Size M</li>
	 <li>$60.00</li>
	 <li><input type="text" name="quantity" data-quantity value="1"></li>
	 <li><a href="#" data-buy>Buy Now</a></li>
 </ul>
```

This is the most basic markup, but its completely flexible to create and style the product however you want.


##Data Attributes

Most of the attributes are self explanatory:

- `data-title` is the product title
- `data-desc` is the product description
- `data-price` is the product price

These are the values that are used in Paypal;

The other two data-attributes are `data-buy` and `data-quantity`.

###data-buy
`data-buy` is the element which has an event listener on `click`. When an element with this attribute is clicked the user is taken to Paypal.

###data-quantity (optional)
`data-quantity` should be attached to a text input. This has a listener which keeps track of the quantity and updated the URI for Paypal automatically.

##Plugin Options

Shoppp only has two options. These are `email` and `currency`.


```
{ 
 email    : 'email@email.com', // Your email Address. Must be registered with Paypal
 currency : 'EUR' // Currency Code for purchase
}
```

[Click here](https://developer.paypal.com/docs/classic/api/currency_codes/) for a list of valid currency codes


##init

Simples.

```
$(function() {
	$('.product').shoppp({"email" : "email@email.com"});
});
```

##Use Stripe instead
In all honesty, this plugin has been sitting in my account since 2011 and because of that theres way better options for simple shop setup. I recommend using [Stripe](www.stripe.com) for embeddable products and taking purchases. Its amazing and so much better than Paypal.