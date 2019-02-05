// Bouw een html pagina met een knop en een tekstveld. 
// Het doel is om een getal tussen 0 en 100 te vinden. 
// Voor elk antwoord antwoordt de pagina:
// meer
// minder
// juist
// Wanneer het antwoord is gevonden, krijgen we het 
// aantal tests dat we hebben nodig gehad te zien via een alert.
let i = 0
const juistGetal = 57
const handleClickButton = (e) => {    
    let invoer = $('#invoer').val() //lees de waarde
    console.log(invoer)
    i++
    console.log(i)
    if (invoer < juistGetal) {
        // $('#invoer').val('')
        $('#helper').text(`hoger`)       
    }
    if( invoer > juistGetal) {
        $('#helper').text(`lager`)
    }
    if (invoer == juistGetal) {        
        alert(`juist... U hebt ${i} keer geraden`)
    }
    
}
$('button').click(handleClickButton)