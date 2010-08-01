var mySlideShow;

window.addEvent('domready',function(){
	
	// instance with a few options
	mySlideShow = new SlideShow('slides',{
		delay: 3000,
		autoplay: true
	});

});