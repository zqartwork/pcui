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

/*
-----
SideNav Active
-----
*/

let sideNavActive = function(){
    var url = window.location.pathname.split( '/' );
    console.log(url);
    path = url[1];

    /* Get URL For Setting Active Nav List Item */
    $('.nav-item-wrapper').children('.nav-item').each(function(){
        var link = $(this).attr('href');

        if (link == path) {
            $(this).addClass('active')
        }
    })

}
sideNavActive();