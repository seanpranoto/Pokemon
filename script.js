var output="";
for(var i=1;i<=151;i++){
    output+="<img src='http:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png' alt='Pokemon"+i+"'>";
}   
$(document).ready(function(){
    $("body").append(output);
})