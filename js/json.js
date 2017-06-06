jQuery.noConflict();

var getUSER = "https://dev.nexusmedia-ua.com/devtest/";

jQuery(document).ready(function() {
  jQuery('#img1').click(function(){
        jQuery('#img1').fadeOut();
        jQuery('#img2').delay(400).fadeIn();
        jQuery('#toggle').delay(400).fadeIn();
        jQuery.getJSON(getUSER, {}, function(json) {
          
            var title = json.messages[0].title;
            var name = json.messages[0].name;
            var image = json.messages[0].image;
            var message = json.messages[0].message;

            jQuery('#img').attr('src', image);
            jQuery('#name').text(name);
            jQuery('#title').text(title);
            jQuery('#message').text(message);
        },)
   })
   jQuery('#img2').click(function() {
       jQuery('#img2').fadeOut();
       jQuery('#img1').delay(400).fadeIn();
       jQuery('#toggle').fadeOut();
   })
});