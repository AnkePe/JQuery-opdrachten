
// Bouw een html pagina met een vierkant. 
// Wanneer een richtingstoets wordt ingedrukt (pijltjes toetsen), 
// beweegt het vierkantje 10px in de juiste richting.

// BONUS: Wanneer het blok de ene kant van de pagina bereikt, 
// moet het aan de andere kant weer verschijnen.

$("#vierkant").css({"background-color": "yellow", "width": "100px", "height": "100px"})
// "margin": "100px"

//uw keys bepalen


const handleKeydownDocument = (e) => {
    console.log(e.which)
    switch (e.which) {
        case 37:    //arrow links
            console.log('arrow left');
            $("#vierkant").css('margin-left','-=10px') 
            console.log($("#vierkant").css('margin-left')) 
            if(parseInt($("#vierkant").css('margin-left')) < 0) {
                $("#vierkant").css('margin-left',$(window).width())
            }          
            break;
        case 38:    //arrow up
            console.log('arrow up');
            $("#vierkant").css('margin-top','-=10px') 
            if(parseInt($("#vierkant").css('margin-top')) < 0 ) {
                $("#vierkant").css('margin-top', $(window).height())
            }           
            break;
        case 39:    //arrow rechts
            console.log('arrow right');
            $("#vierkant").css('margin-left','+=10px');
            console.log($("#vierkant").css('margin-left'))
            if(parseInt($("#vierkant").css('margin-left')) > $(window).width()) {
                $("#vierkant").css('margin-left','0px')
            }
            break;
        case 40:    //arrow down
            console.log('arrow down');
            $("#vierkant").css('margin-top','+=10px')
            console.log($("#vierkant").css('margin-top'))
            if(parseInt($("#vierkant").css('margin-top')) > $(window).height()) {
                $("#vierkant").css('margin-top','0px')
            }
            break;
    }
}
// werkt niet met keypress!
$(document).keydown(handleKeydownDocument)