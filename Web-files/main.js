/*const selectElement = (element) => document. querySelector(element);

selectElement('.mobile-menu') .addEventListener('click', () => {
    selectElement('header') .classList.toggle('active');

}); 

let lastScroll = 0;
const defaultOffset =0;
const header = document.querySelector('nav item');

const scrollPosition = () => window.pageYOffset || document.documentElement.scroll

const scrollHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {

if(scrollPosition() > lastScroll && !containHide()) {

    //scroll down
    header.classList.add('hide');
    console.log('down');
}

else if(scrollPosition() < lastScroll){
    //scroll up
    console.log('up');
    header.classList.remove('hide');

}

lastScroll = scrollPosition();
})*/
var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	(jQuery); 