
$(document).ready(function() {
	for (var i = 0, j = stats.length; i < j; i++){
			/*
		if(i==0 || i%4 == 0) {
		   /*var appendEl = $("<div class='row'></div>").appendTo("#lol_icons"); */ /*
		} 
		*/
		/* Show Square Images */
		$("<div class='col-xs-2 col-md-2 square_png'>").appendTo("#lol_icons");
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


$(document).ready(function() {
	$('body').on('click', function(event){
	getStats(1);
	getStats(2);
	getStats(3);
	getStats(4);
	getStats(5);
	totalStat();
	});

	$('input').on('keyup', champFilter);

});



var n_champs = 0;
function clickSquare() {
	if (n_champs < 5) {
	
	$(this).closest('div').addClass('filter_out') 
	var champ_id = +$(this).data('champ_id');
	var image = $('<img/>');
	image.attr('class', 'img-responsive chosen_champions');
	image.attr('alt', stats[champ_id].image_png );
	image.attr('src', 'img/riot/full/' + stats[champ_id].image_png);
	image.attr('data-champ_id', champ_id);
	
	image.attr('data-value_1', stats[champ_id].rng1);
	image.attr('data-value_2', stats[champ_id].rng2);
	image.attr('data-value_3', stats[champ_id].rng3);
	image.attr('data-value_4', stats[champ_id].rng4);
	image.attr('data-value_5', stats[champ_id].rng5);
	image.attr('data-value_6', stats[champ_id].rng6);


	$("<div class='col-md-5er col-xs-5er champs_full'>").appendTo(".selected-champs");
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



function getStats(param) {
		var	champ_imgs = $('.chosen_champions');
		var total = 0;
		if (champ_imgs.length > 0) {
			$(champ_imgs).each(function() {
			    total += parseFloat($(this).attr('data-value_' + param), 10) || 0; 
			});
			total = Math.round(total / $(champ_imgs).length);
		};
		$('#erg' + param).html(total + "%");
};

function totalStat() {
	var champ_stats = $('.results');
	var total = 0;
		if (champ_stats.length > 0) {
			$(champ_stats).each(function() {
			    total += parseFloat($(this).html().replace("%", ""), 10) || 0; 
			});
			total = Math.round(total / $(champ_stats).length);
		};
		$('#overall').html(total + "%");
}


function champFilter() {
    var value = $("#champFilter").val().toLowerCase();

    $(".square").each(function() {
        if ($(this).attr("alt").toLowerCase().search(value) > -1) {
            $(this).parent().show();
        }
        else {
            $(this).parent().hide();
        }
    });
}