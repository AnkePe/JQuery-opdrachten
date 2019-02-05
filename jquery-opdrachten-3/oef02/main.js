// Bouw een html pagina met een "+" knop, een "-" knop en 
// een tekstveld waarin het aantal staat die
// verhoogd of verlaagd wordt volgens de aangeklikte knoppen.



const handleClickButton = (e) => {
    let aantal = $('#aantal').val() //lees de waarde
    console.log(aantal)
    if (e.target.id == 'add') {
        aantal ++
    }
    if (e.target.id == 'substract') {
        aantal --
    }
    console.log(aantal)
    $('#aantal').val(aantal)    // geef de nieuwe waarde
}
$('button').click(handleClickButton)