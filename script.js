$("#pokestats").hide()

$("#boton").click(function() {
    let poke = $("#num").val()
    $.ajax({
        url:"https://pokeapi.co/api/v2/pokemon/" + poke,
        type:"GET",
        dataType:"json"
    })
    .done(function(resultado){
        $("#pokeimg").attr("src", resultado.sprites.front_shiny)
        $("#name").text("Nombre: " + resultado.name)
        $("#skill").text("Habilidad: " + resultado.abilities[0].ability.name)
        $("#pokenumero").text("Numero: " + resultado.order)
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })

    $("#pokestats").show()
})