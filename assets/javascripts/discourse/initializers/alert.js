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
        $.cookie('temporary-respond',$('#temporary-respond').val() );
      });

      if(typeof($.cookie('temporary-respond')) !== "undefined" && $.cookie('temporary-respond').length > 0  ) {
       
        $('.d-editor-input').val($.cookie('temporary-respond'));
      }
      
      

    });

    $(document).on('click', function(){

      console.log('click event triggered');
      if($('#topic-footer-buttons').find('button').hasClass('create')) {
        $('.pre-connected').hide();
      }

      $('#reponse-rapide').on('click', function(){
        $('button.pull-right').trigger('click');
        $.cookie('temporary-respond',$('#temporary-respond').val() );
      });

      if(typeof($.cookie('temporary-respond')) !== "undefined"  ) {
        
        $('.d-editor-input').val($.cookie('temporary-respond'));
      }      
      
    });

  }
};