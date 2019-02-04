// Write your solution here
// Wanneer de gebruiker op een veld gefocused, 
// stelt u de rand ervan in op "1px solid green". 
// Wanneer het veld niet meer scherp is, zet de rand op "1px solid red".

const handleFocusInput = (e) => {   
    $(e.target).css('border', '1px solid green')    // ik krijg de oorspr niet weg
}
const handleBlurInput = (e) => {
    $(e.target).css('border', '1px solid red')
}
$("input").each(function() {
    console.log($("input"))
    $("input").focus(handleFocusInput)
    $("input").blur(handleBlurInput)
})


