// Write your solution here
// Wanneer de muis over een gekleurde knop beweegt, kleur de tekst. 
// De tekst moet weer zwart worden als de muis de knop verlaat.

const handleHoverInColordiv = (e) => {
    $("#text").css('color', e.target.id)
    console.log(this.id)
}    
const handleHoverOutColordiv = (e) => {
    $("#text").css('color', '')
    console.log(this.id)
}  
$(".color").each(function() {
$(".color").hover(handleHoverInColordiv, handleHoverOutColordiv)
})
