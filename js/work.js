

/* Load Champion Squares*/
$( document ).ready(function() {
	$.getJSON("js/data.json", function(json) {
	   for (var i = 0, j = json.length; i < j; i++){

			if(i==0 || i%4 == 0) {
			   /*var appendEl = $("<div class='row'></div>").appendTo("#lol_icons"); */
			}
			$("<div class='col-xs-3 col-md-3 square_png'><img src='img/riot/square/" +
			 json[i].square_png +
			  "' class='img-responsive'></div>").appendTo("#lol_icons");
		}
	});


});


