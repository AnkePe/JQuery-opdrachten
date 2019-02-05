
// Bouw een html pagina met 5 knoppen en een rechthoek. 
// Elke knop veroorzaakt een actie op de rechthoek.

// Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, 
// wordt de hoogte gereset naar 10px.
// Knop 2: verandert de rechthoek in groen
// Knop 3: reset de oorspronkelijke kleuren
// Knop 4: Verwijdert de rechthoek
// Knop 5: verschijnt weer de rechthoek

// ik geef de rechthoek css mee
$("#rechthoek").css({"background-color": "yellow", "width": "200px", "height": "80px", "margin": "100px"})
// om meerdere dingen te stylen, moet je ze zo {"":"", "":""} ingeven


$("button").click(function(){
    if (this.id == 'hoogte') {
        let hoogteRechthoek = $("#rechthoek").height()   //geeft hoogte zonder px
        console.log (hoogteRechthoek)        
        hoogteRechthoek += 10        
        if (hoogteRechthoek > 100) {
            hoogteRechthoek = 10
        }
        $("#rechthoek").css('height', hoogteRechthoek)  //hij geeft px vanzelf als je alleen een getal ingeeft
    }
    if(this.id == 'groen'){
        $("#rechthoek").addClass('green')        // extra class meegeven voor volgende btn
        $('.green').css('background-color', 'green')
        console.log($("#rechthoek"))
    }
    if(this.id == 'resetColor'){
        $("#rechthoek").removeClass('green')    // werkt niet !
        $("#rechthoek").css('background-color', 'yellow')
        console.log($("#rechthoek"))
    }
    if(this.id == 'hide') {
        $("#rechthoek").hide()
    }
    if(this.id == 'show') {
        $("#rechthoek").show()
    }
    
})
