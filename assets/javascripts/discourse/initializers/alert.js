export default {
  name: 'alert',
  initialize() {
    console.log('alert boxes are annoying!');
    $(document).ready(function(){
    	if($('#topic-footer-buttons').find('button').hasClass('create')) {
    		$('.pre-connected').hide();
    	}

    	$('#temporary-respond').text('fooo bar');
    });
   
  }
};