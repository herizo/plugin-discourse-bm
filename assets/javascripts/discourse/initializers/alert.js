export default {
  name: 'alert',
  initialize() {
      monitorEvents(window);

    $(document).ready(function(){
    	if($('#topic-footer-buttons').find('button').hasClass('create')) {
    		$('.pre-connected').hide();
    	}

    	$('#temporary-respond').text('fooo bar');
    });
    $(document).on('click', function(){
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#temporary-respond').text('fooo bar');
    });

    $( document ).on( "load", function() {
      $( ".log" ).text( "Triggered ajaxComplete handler." );
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#temporary-respond').text('fooo bar');
    } );
    
    $('#reponse-rapide').on('click', function(){
      $('button.pull-right').trigger('click');

    });
  }
};