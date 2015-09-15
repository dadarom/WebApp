var myApp = new Framework7({
    // Default title for modals
    modalTitle: 'BridgeApp',

    // If it is webapp, we can enable hash navigation:
    pushState: true,

    domCache: true, //enable inline pages

    // Hide and show indicator during ajax requests
    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
    /*
    ,
    preroute: function (view, options) {
        if (!userLoggedIn) {
            view.router.loadPage('auth.html'); //load another page with auth form
            return false; //required to prevent default router action
        }
    }*/
});

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true
});

/*
var $$ = Dom7;
$$('a').on('click', function (e) {
    var page = $$(this).attr("href");
    mainView.router.load({pageName: page.substr(1)});
});
*/

