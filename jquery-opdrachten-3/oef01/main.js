// Bouw een html-pagina met een knop en een tekstveld 
// waarin het aantal klikken op de knop wordt weergegeven.

let i=0

const handleClickButton = () => {
    i++
    console.log(i)
    $('#clickAmount').text(`Aantal klikken: ${i}`)
}

$('button').click(handleClickButton)



