




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
		image.attr('id', "s" + i)
		image.attr('data-champ_id', i);
		$('.square_png').last().append(image);
		image.on('click', clickSquare);


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
	image.attr('data-champ_id', champ_id);
	
	image.attr('data-value_1', stats[champ_id].rng1);
	image.attr('data-value_2', stats[champ_id].rng2);
	image.attr('data-value_3', stats[champ_id].rng3);
	image.attr('data-value_4', stats[champ_id].rng4);
	image.attr('data-value_5', stats[champ_id].rng5);
	image.attr('data-value_6', stats[champ_id].rng6);


	$("<div class='col-md-5er champs_full'>").appendTo(".selected-champs");
	$('.champs_full').last().append(image);
	image.on('click', clickImage);
	n_champs++; 
	}

};


function clickImage() {
	champ_id = $(this).data('champ_id');
	$('#s' + champ_id).closest('div').removeClass('filter_out');
	n_champs--;
	$(this).closest('div').remove();
};