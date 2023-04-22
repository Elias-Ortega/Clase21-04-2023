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
            crearGrafico(response);        
                                        
        }
    });
    
    txtNombrePokemon ='';    
})

function crearGrafico(datos){
    var chart = new CanvasJS.Chart("grafico", {
        theme: "dark1", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true		
        title:{
            text: datos.name
        },
        data: [
        {
            // Change type to "bar", "area", "spline", "pie",etc.
            type: "column",
            dataPoints: [
                { label: "hp",  y: datos.stats[0].base_stat  },
                { label: "attack", y: datos.stats[1].base_stat  },
                { label: "defense", y: datos.stats[2].base_stat  },
                { label: "special-attack",  y: datos.stats[3].base_stat  },
                { label: "special-defense",  y: datos.stats[4].base_stat  },
                { label: "speed",  y: datos.stats[5].base_stat  }
            ]
        }
        ]
    });
    chart.render(); 
}




    