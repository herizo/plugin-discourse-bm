export default {
  name: 'alert',
  initialize() {
    console.log('alert boxes are annoying!');
    $(document).ready(function(){
    	$('#temporary-respond').text('fooo bar');
    });
   
  }
};