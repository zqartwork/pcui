/*
-----
Collapsible
-----
*/

let Collapsible = function(){
    let collapsibleOpener = $('.collapsible-opener');
    collapsibleOpener.click(function(){
        $('.collapsible-list' + $(this).attr('sw')).slideToggle();
    })
}
Collapsible();