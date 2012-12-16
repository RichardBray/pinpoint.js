pinpoint.js
===========

Address validation plugin using geolocation from the Goggle Maps API (Original code by Gabe Summber)


Demo
===========

Click [here](http://richbray.me/pinpoint) to see the plugin in action.


Install (in 3 easy steps)
===========

1. Load up the Google Maps API

	<script src="https://maps.google.com/maps/api/js?sensor=false"></script>


2. Link your page to pinpoint.js (obviously)

	<script src="js/prism.js"></script>


3. Create a form with the relevant class names

	<form>
		<div class="help"></div>
		<div>
			<label>Name</label>
			<input class="name">
	        <span class="go">Go</span><br>
	        <textarea class="address"></textarea><br>
		</div>
	</form>	

Class names
------------

.help - where the help message will go
.name - where the name of the location will go
.go - the button you click to register the searched location
.address - where the full address will show up after 'yes' is clicked	


Documentation
===========

Luckily for me, Gabe Summer (who wrote the original code) has a comment on what every single line of the code does so if you want a bit more info just visit his site [here](http://gabesumner.com/address-validation-using-the-google-maps-api).