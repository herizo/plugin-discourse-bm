export default {
  name: 'alert',
  initialize() {

    DiscourseURL.onChanged((url) => {
      // Insérez votre code ici pour réagir au changement de page
      console.log('La page a changé. Nouvelle URL : ' + url);
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

    
    $(document).ready(function(){
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

    $(document).on('click', function(){

      
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