// Write your solution here
// Toon of verberg de tekst door op de bijgeleverde links te klikken.
$("#text").hide()
const handleClickShow = () => {
    $("#text").show()
}
const handleClickHide = () => {
    $("#text").hide()
}
$("#show").click(handleClickShow)
$("#hide").click(handleClickHide)
