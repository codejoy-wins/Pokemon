$(document).ready(function(){

    for (var i=1;i<710;i++){
        $('#info').append("<img id ="+i+" src='https://pokeapi.co/media/img/"+i+".png'>")    
    }
    $('img').click(function(){
        
        $('#dex').append($(this))
        console.log($(this).attr("id"))
        var id = $(this).attr("id");

        $.get("https://pokeapi.co/api/v2/pokemon/" + id, function(res){
            var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>";
            for(var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>"
            $("#dex").append(html_str);
    
        },"json");
        
        
        
    })
})