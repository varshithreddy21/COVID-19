$(document).ready(function(){
    $( "#x" ).click(function( event ) {  
        if ( $( 'input[name="gridRadios"]:checked' ).val() === "option1"&&$( "input[name='gridRadios2']:checked" ).val() === "option1"&&$("input[name='gridRadios3']:checked").val() === "option1") {  
          $(".alert").css("visibility", "visible");
            $( ".span44" ).text( "HurryUp and Visit Nearest Doctor" ).show().fadeOut(4000);  
          return;  
        }  
        $(".alert2").css("visibility", "visible");
        $( ".span43" ).text( "Hey ur safe").show().fadeOut( 4000 );  
        event.preventDefault();  
      });  
    $(window).scroll(function(){
        var pos=$(document).scrollTop();
        console.log(pos);
        if(pos>266){
            $(".navbar").css("background-color","black");
            $(".container1").css("background-color","black");
        }else{
            $(".navbar").css("background-color","transparent");
            $(".container1").css("background-color","transparent");
        }
        if(pos>55){
            $("#card1").addClass("animated slideInLeft duration-6.5s");
        }
        if(pos>619){
            $("#card2").addClass("animated slideInRight ");
        }
        if(pos>1641){
            $("#card3").addClass("animated slideInUp ");
        }
        if(pos>2142){
            $("#img0").addClass("animated slideInLeft slow ");
            $("#img1").addClass("animated slideInUp slow ");
            $("#img2").addClass("animated slideInRight slow ");
        }
        
    });
});
var typed = new Typed('#heading', {
    strings: ["","Go Back Corona..! ^2000","Stop Epidmic..! ^2000"],
    loop:true,
    typeSpeed: 30
  });