jQuery(document).ready(function($){
	$('a').live('touchend', function(e) {
		var el = $(this);
		var link = el.attr('href');
	});
});
//pretty Photo settings( ! Don't change )
//==================================================
jQuery(document).ready(function($){
	$("a[rel^='prettyPhoto']").prettyPhoto({allow_resize: false});	 
});

jQuery(document).ready(function($){
	$("a[rel^='prettyPhotoImages']").prettyPhoto({theme: 'pp_default',allow_resize: true});
});

//Img roll over effect settings
//==================================================
jQuery(document).ready(function($){
 if(Modernizr.csstransforms3d != false){
	var imgholder = document.getElementsByClassName("hover-effect");
	
	for(var i = 0, j=imgholder.length; i<j; i++){
		imgholder[i].addEventListener("mouseover", function(){
			var imgtoanimate = this.getElementsByTagName("img")[0];
			if(imgtoanimate){				   
			move(imgtoanimate)
			.rotate(10)
			.scale(2.0)
			.duration('1s')
			.end();
			}
		});
	
		imgholder[i].addEventListener("mouseout", function(){
			var imgtoanimate = this.getElementsByTagName("img")[0];						   
			if(imgtoanimate){
			move(imgtoanimate)
			.rotate(0)
			.scale(1.0)
			.duration('1s')
			.end();
			}
		});
	}
	 }
});





