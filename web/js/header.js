window.onscroll = function () { 
    if(window.scrollY > 135){
        document.getElementById("logo-bar").style = "margin-bottom: 44px";
        document.getElementById("nav-bar").style = "position: fixed;top:0;";

        $("#menu").addClass("sticky");

    } else {
        document.getElementById("nav-bar").style = "";
        document.getElementById("logo-bar").style = "margin-bottom: 0";

        $("#menu").removeClass("sticky");
    }
 }; 

 clicked = function (elementId) {

     var element = document.querySelectorAll("#" + elementId + " > .dropdown-menu")[0];
     if($(element).hasClass('visible')){
         $(element).removeClass('visible');
     } else {
        $(element).addClass('visible');
     }

     var others = document.querySelectorAll(".dropdown-menu:not(#"+elementId+" > .dropdown-menu)");
     others.forEach(e => {
         $(e).removeClass('visible');
     });

 }



