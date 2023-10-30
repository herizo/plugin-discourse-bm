export default {
  name: 'alert',
  initialize() {
    $(document).ready(function(){
    	if($('#topic-footer-buttons').find('button').hasClass('create')) {
    		$('.pre-connected').hide();
    	}

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

    });

    $(document).on('click', function(){
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

      loadTemporaryText();
    });

    $( document ).on( "load", function() {
      $( ".log" ).text( "Triggered ajaxComplete handler." );
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

      loadTemporaryText();

      
    } );
    

    function loadTemporaryText() {
      console.log('fffffff');
      if(typeof($.cookie('temporary-respond')) !== "undefined" && $.cookie('temporary-respond').length > 0  ) {
        $('button.create').trigger('click');
      }
      
      $('.d-editor-input').text($.cookie('temporary-respond'));
    }


  }
};