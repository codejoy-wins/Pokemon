$(document).ready(function(){
    $.get("https://pokeapi.co/api/v2/pokemon/1/", function(res){
        var html_str = "";
        html_str += "<h4>Types</h4>";
        html_str += "<ul>";
        for(var i = 0; i < res.types.length; i++) {
            html_str += "<li>" + res.types[i].type.name + "</li>";
        }
        html_str += "</ul>"
        $("#bulbasaur").html(html_str);

       },"json");
    })

$(document).ready(function(){
    for (var i=1;i<19;i++){
        $('#info').append("<img id ="+i+" src='https://pokeapi.co/media/img/"+i+".png'>")
        $.get("https://pokeapi.co/api/v2/pokemon/"+i+"/", function(res){
            // console.log(res);
            console.log(res.types[0].type.name)
        }, "json");
        $('#dex').append("<p>https://pokeapi.co/api/v2/pokemon/"+i+"/</p>")
    }

    $('img').click(function(){

    })
})