export default {
  name: 'alert',
  initialize() {
    $(document).ready(function(){
      console.log('ready event triggered');
    	if($('#topic-footer-buttons').find('button').hasClass('create')) {
    		$('.pre-connected').hide();
    	}

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

      if(typeof($.cookie('temporary-respond')) !== "undefined" && $.cookie('temporary-respond').length > 0  ) {
        $('button.create').trigger('click');
      }
      
      $('.d-editor-input').text($.cookie('temporary-respond'));

    });

    $(document).on('click', function(){

      console.log('click event triggered');
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

      if(typeof($.cookie('temporary-respond')) !== "undefined" && $.cookie('temporary-respond').length > 0  ) {
        $('button.create').trigger('click');
      }
      
      $('.d-editor-input').text($.cookie('temporary-respond'));
    });


    $( document ).on( "load", function() {
      console.log('load event triggered');
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').text() );
      });

      if(typeof($.cookie('temporary-respond')) !== "undefined" && $.cookie('temporary-respond').length > 0  ) {
        $('button.create').trigger('click');
      }
      
      $('.d-editor-input').text($.cookie('temporary-respond'));

      
    });
    




  }
};