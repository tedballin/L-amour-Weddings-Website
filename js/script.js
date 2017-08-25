//img slider
(function() {
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			this.action();
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
			}, 3500);
		},
	};
	document.addEventListener( "DOMContentLoaded", function() {
    var slider0 = new Slideshow( "#slider0" );
		var slider1 = new Slideshow( "#slider1" );
    var slider2 = new Slideshow( "#slider2" );
	});

	document.addEventListener( "DOMContentLoaded", function() {
		var slider3 = new Slideshow( "#slider3" );
	});
})();


// submit input
var APIURL = 'https://imhungry-app.herokuapp.com';

$('#add-form').submit(function(e) {
			//disable page refresh
			e.preventDefault();
			var newClient = {
			client: $('#client').val(),
			phone: $('#phone').val(),
			email: $('#email').val(),
		}
		console.log(newClient);

		$.ajax({
			method:'POST',
			url:APIURL + '/restaurant',
			// convert javascript object to json file
			data: JSON.stringify(newClient),
			contentType:'application/json',
			//send notification if successfully send the data
			success: function(data){
				//clear input
				$('#add-form').trigger('reset');
				alert('Thanks for reaching out!');
			}
		})
});

//jquery 
// 	<div class="text-right">
// 		<h2>Full Wedding Planning<h2><br>
// 			<img src="http://wedoweddingsetc.ca/wp-content/themes/wedo_v1/assets/img/section-decor1.svg">
// 			<h2>Full service</h2>
// 			<p>
// 				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
// 			</p>
// </div>
// </div>
		//
		// var service = $('<div>').addClass('text-right');
		// $('<h2>').text('+Full Wedding Planning+').appendTo(service);
		// $('<img>').src('http://wedoweddingsetc.ca/wp-content/themes/wedo_v1/assets/img/section-decor1.svg').appendTo(service);
		// $('<h2>').text('+Full Planning+').appendTo(service);
		// $('<p>').text('Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam').appendTo(service);
    //
