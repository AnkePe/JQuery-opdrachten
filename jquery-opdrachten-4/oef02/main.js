
// Vraag aan de hand van een formulier naar het salaris, het geslacht en het aantal kinderen van een persoon.

// Bereken het salaris door de volgende kosten in mindering te brengen:

// Uitgaven: 18%;
// Verzekering: 7%;
// Bijdragen: 5%;
// Het is mogelijk om onder bepaalde voorwaarden kortingen te krijgen op de totale kosten:

// Als de werknemer een vrouw is, krijgt ze 2% korting.
// Indien de werknemer 3 kinderen ten laste heeft, krijgt hij 1% korting.
// Als de werknemer 4 kinderen ten laste heeft, krijgt hij 2% korting.

const handleClickBerekenBtn = () => {
    let salaris = $('#salaris').val() 
    console.log(salaris)
    let geslacht = $('#geslacht option:selected').text()
    console.log(geslacht)
    let aantalKids = $('#aantalKids').val()
    console.log(aantalKids)

    // kosten berekenen
    let uitgaven = salaris * 18 / 100
    let verzekering = salaris * 7 / 100
    let bijdrage = salaris * 5 / 100
    let totaalKosten = uitgaven + verzekering + bijdrage
    console.log(uitgaven, verzekering, bijdrage, totaalKosten)

    // kortingen op de kosten
    if (geslacht === 'vrouw') {
        totaalKosten *= 98/100
        console.log(totaalKosten)        
    }
    if (aantalKids === 3) {
        totaalKosten *= 99/100
    }
    if (aantalKids > 3) {
        totaalKosten *= 98/100
    }
    $('#bereken').text(`${salaris - totaalKosten} €`)
} 
    
$('#bereken').click(handleClickBerekenBtn)
