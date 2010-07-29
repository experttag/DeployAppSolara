var mySlideShow;

window.addEvent('domready',function(){
	
	// instance with a few options
	mySlideShow = new SlideShow('slides',{
		delay: 2000,
		autoplay: true
	});

});