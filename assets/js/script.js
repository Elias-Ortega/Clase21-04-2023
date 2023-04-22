/* https://pokeapi.co/api/v2/pokemon/ditto */
/* Funcion de Jquery que trabaja con ajax para consumir api */

var btnConsultar = document.querySelector('#btnConsultar');

btnConsultar.addEventListener('click', function(){
    var txtNombrePokemon = document.querySelector('#txtNombrePokemon');
    $.ajax({
        type: "get",
        url: "https://pokeapi.co/api/v2/pokemon/" + txtNombrePokemon.value,    
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
    txtNombrePokemon ='';
    
})




