




$(document).ready(function() {
	for (var i = 0, j = stats.length; i < j; i++){
			/*
		if(i==0 || i%4 == 0) {
		   /*var appendEl = $("<div class='row'></div>").appendTo("#lol_icons"); */ /*
		} 
		*/

		$("<div class='col-xs-3 col-md-2 square_png'>").appendTo("#lol_icons");
		var image = $('<img/>');
		image.attr('class', 'img-responsive square');
		image.attr('alt', stats[i].square_png );
		image.attr('src', 'img/riot/square/' + stats[i].square_png);
		image.data('champ_id', i);
		image.attr('id', "s" + i)
		image.on('click', clickSquare);
		$('.square_png').last().append(image);

	}

});


n_champs = 0;
function clickSquare() {
	if (n_champs < 5) {
	
	$(this).closest('div').addClass('filter_out') 
	champ_id = +$(this).data('champ_id');
	var image = $('<img/>');
	image.attr('class', 'img-responsive');
	image.attr('alt', stats[champ_id].image_png );
	image.attr('src', 'img/riot/full/' + stats[champ_id].image_png);
	image.data('champ_id', champ_id);
	image.on('click', clickImage);
	$("<div class='col-md-5er champs_full'>").appendTo(".selected-champs");
	$('.champs_full').last().append(image);
	n_champs++; 
	}

};


function clickImage() {
	champ_id = $(this).data('champ_id');
	$('#s' + champ_id).closest('div').removeClass('filter_out');
	n_champs--;
	$(this).closest('div').remove();
};