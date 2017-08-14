


var champions = ["Aatrox.png", "Ahri.png", "Akali.png", "Alistar.png", "Amumu.png",
				 "Anivia.png", "Annie.png", "Ashe.png", "AurelionSol.png", "Azir.png",
				 "Bard.png", "Blitzcrank.png", "Brand.png","Braum.png", "Caitlyn.png",
				 "Camille.png", "Cassiopeia.png", "Chogath.png", "Corki.png", "Darius.png",
				 "Diana.png", "Draven.png", "DrMundo.png", "Ekko.png", "Elise.png", 
				 "Evelynn.png", "Ezreal.png", "Fiddlesticks.png", "Fiora.png", "Fizz.png",
				 "Galio.png", "Gangplank.png", "Garen.png", "Gnar.png", "Gragas.png",
				 "Graves.png", "Hecarim.png", "Heimerdinger.png", "Illaoi.png", "Irelia.png", 
				 "Ivern.png", "Janna.png", "JarvanIV.png", "Jax.png", 
				 "Jayce.png", "Jhin.png", "Jinx.png", "Kalista.png", "Karma.png", 
				 "Karthus.png", "Kassadin.png", "Katarina.png", "Kayle.png", "Kayn.png", "Kennen.png",
				 "Khazix.png", "Kindred.png", "Kled.png", "KogMaw.png", "Leblanc.png", 
				 "LeeSin.png", "Leona.png", "Lissandra.png", "Lucian.png", "Lulu.png",
				 "Lux.png", "Malphite.png", "Malzahar.png", "Maokai.png", "MasterYi.png", 
				 "MissFortune.png", "MonkeyKing.png", "Mordekaiser.png", "Morgana.png",
				 "Nami.png", "Nasus.png", "Nautilus.png", "Nidalee.png", "Nocturne.png",
				 "Nunu.png", "Olaf.png", "Orianna.png", "Pantheon.png", "Poppy.png",
				 "Quinn.png", "Rakan.png", "Rammus.png", "RekSai.png", "Renekton.png",
				 "Rengar.png", "Riven.png", "Rumble.png", "Ryze.png", "Sejuani.png",
				 "Shaco.png", "Shen.png", "Shyvana.png", "Singed.png", "Sion.png",
				 "Sivir.png", "Skarner.png", "Sona.png", "Soraka.png", "Swain.png",
				 "Syndra.png", "TahmKench.png", "Taliyah.png", "Talon.png", "Taric.png",
				 "Teemo.png", "Thresh.png", "Tristana.png", "Trundle.png", "Tryndamere.png",
				 "TwistedFate.png", "Twitch.png", "Udyr.png", "Urgot.png", "Varus.png", 
				 "Vayne.png", "Veigar.png", "Velkoz.png", "Vi.png", "Viktor.png",
				 "Vladimir.png", "Volibear.png", "Warwick.png", "Xayah.png", "Xerath.png",
				 "XinZhao.png", "Yasuo.png", "Yorick.png", "Zac.png", "Zed.png",
				 "Ziggs.png", "Zilean.png", "Zyra.png"



];

/* Load Champion Squares*/
$( document ).ready(function() {
   for (var i = 0, j = champions.length; i < j; i++){

		if(i==0 || i%4 == 0) {
		   /*var appendEl = $("<div class='row'></div>").appendTo("#lol_icons"); */
		}
		$("<div class='col-xs-3 col-md-3 square_png'><img src='img/riot/square/" + champions[i] + "' class='img-responsive'></div>").appendTo("#lol_icons");
	}

});




