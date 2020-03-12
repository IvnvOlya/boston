$(document).ready(function(){
    $('.menu_link').mouseover(function(){
    $(this).css({color: '#e91e63', 'text-decoration': 'none'});
});
    $('.menu_link').mouseout(function(){
    $(this).css('color', '#f2f2f2');
});

    $('.icons_social').mouseenter(function(){
        $(this).fadeTo(500, 1);
    });
    $('.icons_social').mouseleave(function(){
        $(this).fadeTo(100, 0.6 );
        });

  /*     $('.subheader_bt').mouseenter(function(){
            $(this).animate(1000, function() {
                $(this).css({"background": "#e91e63", 'color':'#f2f2f2', 'text-decoration': 'none'});
                });      
       });

    $('.subheader_bt').mouseleave(function(){
        $(this).animate(1000, function() {
            $(this).css({"background": "none", 'color':'#e91e63'});
            });      
   });   */

/*    $('.subheader_bt').mouseover(function() {
     $(this).toggle(function() {
        $(this).css({"background": "#e91e63", 'color':'#f2f2f2', 'text-decoration': 'none'});
        }, function() {
        $(this).css({"background": "none", 'color':'#e91e63'});                    
   })
   .mouseout(function(){                 
   }); */



   $("a").click(function () {
    let elementClick = $(this).attr("href");
    let destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
});
});