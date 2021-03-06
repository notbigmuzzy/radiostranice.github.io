$(document).ready(function() {

// OPCIJE MENU
	$("#top-menu").click(function() {
		$('.drop-menu').css('display','block');
		$('#top-menu').css('border-bottom','none');
    });

	$(document).mouseup(function (e)	{
    var container = $(".drop-menu");
   		if (!container.is(e.target)
        	&& container.has(e.target).length === 0)	{
        		container.hide();
        		$('#top-menu').css('border-bottom','2px solid hsla(0, 0%, 0%, .5)');
    	}
	});    


// MOBILE MENU
	$(".mobile-menuitem1").click(function() {
		$('.mobile-menu').css('display','none');
    });

	$(".mob-menu").click(function() {
		$('.mobile-menu').css('display','block');
    });



// RADIO STUFF
	var player = document.createElement("audio");
	$(".bottom-icon").click(function() {
		player.src = "http://";
	    document.getElementById("bottom-title").innerHTML = "Izaberi";
	    document.getElementById("bottom-desc").innerHTML = "Stanicu";
	    $('.bottom-icon').css('width','0');
	    $('#cur-playing1, #cur-playing2, #cur-playing3').css('color','transparent');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
	});

	$(".index-button").click(function() {
		player.src = "http://";
		$('.fa-microphone').css('color','#C198ED');
		$(document).prop('title', 'Radio Index');
	    document.getElementById("bottom-title").innerHTML = "Index";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    $('.nyanimg').attr('src', 'icons/nyancat.gif')
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
		$('#cur-playing1, #cur-playing2, #cur-playing3').css('color','transparent');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
		$('.full-coverindex').fadeIn(300);
		$('.index-iframe').fadeIn(0);
		$('.index-iframe').css('top','50px');
		$('.index-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.index-frejm').attr('src', 'http://www.radios2.rs/player')
	});

	$(".full-coverindex").click(function() {
		$('.full-coverindex').css('display','none');
		$('.index-iframe').css('top','-400px');
		$('.index-iframe').css('opacity','0');
    });


$(".full-cover").click(function() {
		$('.load-spinner').css('display','block');
		$('.plejlista-frejm, .koncerti-frejm, .plejlista-frejm, .shoutbox-frejm, .vreme-frejm').attr('src', '');
		$('.full-cover, .plejliste-iframe, .onama, .predlog, .shoutbox-iframe, .vreme-iframe, .koncerti').css('display','none');
		$('.plejliste-iframe, .onama, .predlog, .shoutbox-iframe, .vreme-iframe, .koncerti').css('top','20px');
		$('.plejliste-iframe, .onama, .predlog, .shoutbox-iframe, .vreme-iframe, .koncerti').css('opacity','0');

    });

	$(".plejlista-button").click(function() {
		$('.full-cover').fadeIn(300);
		$('.plejliste-iframe').fadeIn(0);
		$('.plejliste-iframe').css('top','50px');
		$('.plejliste-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.plejlista-frejm').attr('src', 'http://www.mjuznews.com#top-10-cnt')
    });
	$(".onama-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.onama').fadeIn(0);
		$('.onama').css('top','50px');
		$('.onama').css('opacity','1');
    });
	$(".radioadd").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.predlog').fadeIn(0);
		$('.predlog').css('top','50px');
		$('.predlog').css('opacity','1');
    });
	$(".koncerti-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.koncerti').fadeIn(0);
		$('.koncerti').css('top','50px');
		$('.koncerti').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.koncerti-frejm').attr('src', 'http://www.eventim.rs/rs/muzika/.eventlist-home')
    });
	$(".radio-item").click(function() {
		$('.nyanimg').attr('src', 'icons/nyancat.gif')
		$('.index-frejm').attr('src', '')
		$('.fa-microphone').css('color','rgba(255, 255, 255, 0.4)');		
    });
	$(".bottom-icon").click(function() {
		$('.nyanimg').attr('src', 'icons/nyancat.png')
		$('.index-frejm').attr('src', '')
		$('.fa-microphone').css('color','rgba(255, 255, 255, 0.4)');
    });
	$(".shoutbox-button").click(function() {
		$('.full-cover').fadeIn(300);
		$('.shoutbox-iframe').fadeIn(0);
		$('.shoutbox-iframe').css('top','50px');
		$('.shoutbox-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.shoutbox-frejm').attr('src', 'http://notbigmuzzy.freeshoutbox.net/')
    });
	$(".vreme-button").click(function() {		
		$('.full-cover').fadeIn(300);
		$('.vreme-iframe').fadeIn(0);
		$('.vreme-iframe').css('top','50px');
		$('.vreme-iframe').css('opacity','1');
		$('.load-spinner').fadeOut(1000);
		$('.vreme-frejm').attr('src', 'http://www.naslovi.net/vremenska-prognoza#maincol')
    });

	$(".top-left1").click(function() {
	   	$('.top-left1').addClass('active-region');
		$('.top-left2, .top-left3, .top-left4').removeClass('active-region');
		$('.dvestadvojka, .studiob, .radioklasik').css('display','none');
		$('.b92, .naxi80, .antenabg, .laguna, .naxicafe, .radiotri, .radioparadaiz, .radioboom, .radiotesaloniki, .radiostojedan, .radiotopola').css('display','inline-block');				
    });

	$(".top-left2").click(function() {
	   	$('.top-left2').addClass('active-region');
	   	$('.top-left1, .top-left3, .top-left4').removeClass('active-region');
		$('.dvestadvojka, .studiob, .radioklasik').css('display','inline-block');
		$('.b92, .naxi80, .antenabg, .laguna, .naxicafe, .radiotri, .radioparadaiz, .radioboom, .radiotesaloniki, .radiostojedan, .radiotopola').css('display','none');	
    });

	$(".top-left3").click(function() {
	   	$('.top-left3').addClass('active-region');
		$('.top-left1, .top-left2, .top-left4').removeClass('active-region');
		$('.b92, .naxi80, .dvestadvojka, .antenabg, .laguna, .naxicafe, .studiob, .radiotri, .radioparadaiz, .radioboom, .radiotesaloniki, .radiostojedan, .radioklasik, .radiotopola').css('display','inline-block');
    }); 









// RADIO TOGGLES
	$(".b92").click(function() {
		player.src = "http://stream.playradio.rs:8001/play.mp3";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Play";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    $('.nyanimg').attr('src', 'icons/nyancat.gif')

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1, #cur-playing3').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');


		$(document).prop('title', 'B92 Radio');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.playradio.rs/player.html";

	    $('.radio-cover1').css('background','#CEA0FF');
	    $('.radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	    $('.1play').removeClass('fa-play');
	    $('.1play').addClass('fa-refresh');
	    $('.1play').addClass('playin')

	    $('.2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });

	$(".naxi80").click(function() {
    	player.src = "http://naxidigital-80s128.streaming.rs:8040/;stream.nsv/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "80's";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1, #cur-playing3').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');		

		$(document).prop('title', 'NAXI 80s');
		$('.bottombar-wrapper').fadeIn(0);			
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.naxi.rs/80e";

	    $('.radio-cover2').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	   	$('.2play').removeClass('fa-play');
	    $('.2play').addClass('fa-refresh');
	   	$('.2play').addClass('playin')

	    $('.1play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });


	$(".dvestadvojka").click(function() {
    	player.src = "http://rts.ipradio.rs:8006/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "202";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1, #cur-playing3').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');

		$(document).prop('title', 'Radio 202');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.radiobeograd.rs/";

	    $('.radio-cover3').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');

	   	$('.3play').removeClass('fa-play');
	    $('.3play').addClass('fa-refresh');
	    $('.3play').addClass('playin')
	    $('.1play, .2play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });


	$(".antenabg").click(function() {
    	player.src = "http://live.radioantena.rs:8000/antenabg";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Antena";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Antena BG');
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="pls/antenabg.pls";

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

	    $('.radio-cover4').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	   	$('.4play').removeClass('fa-play');
	    $('.4play').addClass('fa-refresh');
	    $('.4play').addClass('playin')	
	    $('.1play, .2play, .3play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });


	$(".laguna").click(function() {
    	player.src = "http://stream.radiolaguna.rs:8000/;?1431253210195.mp3";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Laguna";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Radio Laguna');
		$('.bottombar-wrapper').fadeIn(0);		
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.radiolaguna.rs/";

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

	    $('.radio-cover5').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	   	$('.5play').removeClass('fa-play');
	    $('.5play').addClass('fa-refresh');
	    $('.5play').addClass('playin');	  
	    $('.1play, .2play, .3play, .4play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });


	$(".naxicafe").click(function() {
    	player.src = "http://naxidigital128.kbcnet.rs:8020/;*.mp3";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Caffe";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$(document).prop('title', 'Caffe Radio');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.naxi.rs/cafe";

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

	    $('.radio-cover6').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	    $('.6play').removeClass('fa-play');
	    $('.6play').addClass('fa-refresh');
	    $('.6play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .7play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });



	$(".studiob").click(function() {
    	player.src = "http://radio.studiob.rs:8004/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Studio B";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    

		$('#cur-playing1, #cur-playing3').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');


		$(document).prop('title', 'Studio B');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    document.getElementById("bottombar-link").href="http://www.studiob.rs/radio/";

	    $('.radio-cover7').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	    $('.7play').removeClass('fa-play');
	    $('.7play').addClass('fa-refresh');
	    $('.7play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .8play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');
    });



	$(".radiotri").click(function() {
    	player.src = "http://radio3-128.streaming.rs:9200/;";
	    player.play();

	   	document.getElementById("bottom-title").innerHTML = "Radio 3";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="http://www.radio3.rs/";

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$(document).prop('title', 'Radio 3');
		$('.bottombar-wrapper').fadeIn(0);				
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');
	    
		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
		    

	    $('.radio-cover8').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');

	    $('.8play').removeClass('fa-play');
	    $('.8play').addClass('fa-refresh');
	    $('.8play').addClass('playin');	    
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .9play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .9play, .10play, .11play, .12play, .13play, .14play').removeClass('playin'); 	    
    });

	$(".radioboom").click(function() {
		player.src = "http://85.202.112.1:8002/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Boom93";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="http://boom93.com/";
		$(document).prop('title', 'Boom93');

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover9').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	   	$('.9play').removeClass('fa-play');
	    $('.9play').addClass('fa-refresh');
	    $('.9play').addClass('playin');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .10play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .10play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .10play, .11play, .12play, .13play, .14play').removeClass('playin');   
    });

	$(".radioparadaiz").click(function() {
		player.src = "http://stream-tx4.radioparadise.com:80/mp3-128";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Paradise";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/paradaiz.m3u";
		$(document).prop('title', 'Paradise');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','#C198ED');	
		$('#cur-playing1').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover10').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover11, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');


	    $('.10play').removeClass('fa-play');
	    $('.10play').addClass('fa-refresh');
	    $('.10play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .11play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .11play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .11play, .12play, .13play, .14play').removeClass('playin');
    });


	$(".radiotesaloniki").click(function() {
		player.src = "http://s10.voscast.com:9878/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Thesaloniki";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="pls/tesaloniki.pls";
		$(document).prop('title', 'Thesaloniki');

		$('#cur-playing2').css('color','transparent');	
		$('#cur-playing3').css('color','#C198ED');	
		$('#cur-playing1').css('color','transparent');	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover11').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover12, .radio-cover13, .radio-cover14').css('background','black');

	    $('.11play').removeClass('fa-play');
	    $('.11play').addClass('fa-refresh');
	    $('.11play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .12play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .12play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .12play, .13play, .14play').removeClass('playin'); 	      	      	    
    });

	$(".radiostojedan").click(function() {
		player.src = "http://87.118.84.56:9300/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "101";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="http://radio101.rs/";
		$(document).prop('title', 'Radio 101');

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover12').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover13, .radio-cover14').css('background','black');


	    $('.12play').removeClass('fa-play');
	    $('.12play').addClass('fa-refresh');
	    $('.12play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .13play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .13play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .13play, .14play').removeClass('playin');  	      	      	    
    });

	$(".radioklasik").click(function() {
		player.src = "http://109.206.96.34:8030/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Classic";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="http://www.naxi.rs/classic";
		$(document).prop('title', 'Classic Radio');

		$('#cur-playing1, #cur-playing3').css('color','transparent');	
		$('#cur-playing2').css('color','#C198ED');


		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover13').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover14').css('background','black');


	    $('.13play').removeClass('fa-play');
	    $('.13play').addClass('fa-refresh');
	    $('.13play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .14play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .14play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .14play').removeClass('playin');   	      	      	    
    });


	$(".radiotopola").click(function() {
		player.src = "http://91.228.254.120:9000/;";
	    player.play();

	    document.getElementById("bottom-title").innerHTML = "Topola";
	    document.getElementById("bottom-desc").innerHTML = "Radio";
	    document.getElementById("bottombar-link").href="http://www.ifmradio.rs/";
		$(document).prop('title', 'Radio Topola');

		$('#cur-playing2, #cur-playing3').css('color','transparent');	
		$('#cur-playing1').css('color','#C198ED');
	

		$('.bottom-icon').css('visibility','visible');	    
		$('.bottom-icon').css('width','60px');	    
		$('.bottombar-wrapper').fadeIn(0);
		$('.bottombar-wrapper').css('bottom','0px');
	    $('#last').css('display','block');


	    $('.radio-cover14').css('background','#CEA0FF');
	    $('.radio-cover1, .radio-cover2, .radio-cover3, .radio-cover4, .radio-cover5, .radio-cover6, .radio-cover7, .radio-cover8, .radio-cover9, .radio-cover10, .radio-cover11, .radio-cover12, .radio-cover13').css('background','black');

	    $('.14play').removeClass('fa-play');
	    $('.14play').addClass('fa-refresh');
	    $('.14play').addClass('playin');

	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play').addClass('fa-play');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play').removeClass('fa-refresh');
	    $('.1play, .2play, .3play, .4play, .5play, .6play, .7play, .8play, .9play, .10play, .11play, .12play, .13play').removeClass('playin');
    });







// GA
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71620396-1', 'auto');
  ga('send', 'pageview');





});