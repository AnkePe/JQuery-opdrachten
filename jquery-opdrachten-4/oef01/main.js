
// Maak een lijst met drie elementen (Rock, Paper, Scissors). 
// Voeg een SPEEL button toe. Wanneer er op SPEEL word gedrukt, 
// kies de computer een element willekeurig uit (Rock, Paper of Scissors). 
// Vergelijk het met het door de speler gekozen element om te zien 
// wie er gewonnen heeft tussen de mens en de machine.

// Bonus: Voeg een overwinning en nederlaag teller toe 
// en geef het percentage van de overwinning tegen de computer weer.


// user kiest een element
let keuze = ''   // hier declareren en binnen de click een waarde geven
$('ul button').click (function() {
    // console.log(this.innerText)
    keuze = this.innerText
    return keuze
})
// console.log(keuze)   kan je niet opvragen want je hebt nog niet geklikt!!!!



const handleClickSpeelButton = () => {
    console.log(keuze)  //nu is er wel geklikt

// computer kiest willekeurig el
    let keuzeComputer = () => {
        let random = Math.random()
        if (random < 0.333) { return 'schaar'}
        else if (random < 0.677) { return 'steen'}
        else { return 'papier'}
    }
    console.log(keuzeComputer())

    let result = 'you win | you lose'  // boodschap declareren, later invullen

// vergelijk computer en user
    if (keuze === 'schaar') {
        if (keuzeComputer() === 'schaar') {
            result = 'schaar tegen schaar'
        } else if (keuzeComputer() === 'steen') {
            result = 'spijtig, je verliest'
        } else {
            result = 'proficiat, je wint'
        }        
    }
    if (keuze === 'steen') {
        if (keuzeComputer() === 'steen') {
            result = 'steen tegen steen'
        } else if (keuzeComputer() === 'papier') {
            result = 'spijtig, je verliest'
        } else {
            result = 'proficiat, je wint'
        }        
    }
    if (keuze === 'papier') {
        if (keuzeComputer() === 'papier') {
            result = 'papier tegen papier'
        } else if (keuzeComputer() === 'schaar') {
            result = 'spijtig, je verliest'
        } else {
            result = 'proficiat, je wint'
        }        
    }
    console.log(result) 
    $('h2').text(result)
}
$('#speel').click(handleClickSpeelButton)
