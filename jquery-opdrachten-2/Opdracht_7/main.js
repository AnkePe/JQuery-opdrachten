// Samenvatting van de reeksen 1 en 2. 
// De instructies zijn te vinden in het HTML-bestand.


$(document).ready(function(){   //begint te werken als de DOM opgebouwd is
    /* On click: Enlarge the font (120%) */
    $("ol li").eq(0).click(function(){
        $(this).css('font-size', '120%')
    })

    /* On click: Decrease the font size (80%) */
    $("ol li").eq(1).click(function(){
        $(this).css('font-size', '80%')
     })  
    
        /* On click: Bold or normalize the green words */
     $("ol li").eq(2).click(function(){
        if ($(".green").css('font-weight') == '700') {
            $(".green").css('font-weight', '400')
        } else {
        $(".green").css('font-weight', 'bold')
    }
     })
    /* On click: Underline or normalize the words in red */
    $("ol li").eq(3).click(function(){
        if ($(".red").css('text-decoration-line') == 'underline') { // je meot nog line toeveoegen omdat hij 3 text decorations heeft
            $(".red").css('text-decoration-line', 'none')
        } else {
        $(".red").css('text-decoration', 'underline')
        console.log ($(".red"))
    }
     }) 
    
    /* On click: Replace the logo with another image */
    $("ol li").eq(4).click(function(){
        $("img").attr('src', 'images/koala.jpg')
    })
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $("a").hover(function(){
        $(this).add
    })
    
    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    
});