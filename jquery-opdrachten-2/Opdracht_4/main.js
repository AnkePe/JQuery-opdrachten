// Write your solution here
// Wanneer je op een kleurknop klikt, verander je de kleur van de tekst van de div.

// $("#green").click(handleClickGreenDiv)
// $("#red").click(handleClickRedDiv)
// $("#blue").click(handleClickRedDiv)

const handleClickColordiv = (e) => {
        $("#text").css('color', e.target.id)
        console.log(this.id)
    }    

$(".color").each(function() {
    $(".color").click(handleClickColordiv)
})
