// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add views
var view1 = myApp.addView('#view-1');
var view2 = myApp.addView('#view-2', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3');
var view4 = myApp.addView('#view-4');

/**==================================================***/
$$('#addSomething').on('click', function () {
    var buttons1 = [
        {
            text: 'Order Count',
            label: true,
            bold: true
        },
        {
            text: '1',
            /*bold: true*/
        },
        {
            text: '2',
        },
        {
            text: '3',
        }
    ];
    var buttons2 = [
        {
            text: 'Cancel',
            color: 'red'
        }
    ];
    var groups = [buttons1, buttons2];
    myApp.actions(groups);
});