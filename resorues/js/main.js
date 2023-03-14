$(document).ready(function(){
    
    
    //sticky menu
    
    $(".js--serviecs-manu").waypoint( function(direction){
        if(direction == "down") {
           $("nav").addClass("sticky");
           } else {
           $("nav").removeClass("sticky")
           }
    });
    
    
    //mixitup (portfolio section)
    var mixer = mixitup('.jenarel');
});

function opennav(){
    document.getElementById("mynav").style.width = "100%";
}

function closenav(){
    document.getElementById("mynav").style.width = "0%";
}