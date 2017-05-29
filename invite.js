;(function() {
var SCROLL_HEIGHT = 1e20;

function final_greeting() {
    alert("Share this to make CollegeCounsel Awesome!");
}

function scrollToBottom(el, cb) {
    // Scroll to the bottom of target el
    var x = setInterval(function() {
        console.log('Scrolling to bottom!');
        var isScrolledToBottom = el.scrollHeight - el.clientHeight <= el.scrollTop + 1;
        el.scrollTop = SCROLL_HEIGHT;
        if (isScrolledToBottom) {
            clearInterval(x);
            if (cb && typeof cb === 'function') cb();
        }
    }, 1000);
}

function invite() {
    var invite_links = document.getElementsByClassName('uiButtonText'),
        invite_link;
    for (var i = 0; i < invite_links.length; i++) {
        invite_links[i].click();
    }
    if (invite_link === undefined) {
        alert("You are Fuckinn done! thanks :) :P")
        return;
    }
    invite_link.click();
    var checker = setInterval(function() {
        var form = document.getElementsByClassName('_s');
        if (form && form.length) {
            form = form[0];
            var listView = form.getElementsByClassName('listView clearfix');
            var li = form.getElementsByClassName('fbProfileBrowserListItem');
            if (listView.length && li.length) {
                clearInterval(checker);
                setTimeout(function() {
                    var box = document.getElementsByClassName('fbProfileBrowserResult scrollable threeColumns hideSummary')[0];
                    scrollToBottom(box, function() {
                        console.log('Invite started!');
                        var a = document.getElementsByClassName('uiButton _1sm'),
                            i = 0;
                        var x = setInterval(function(){if(i>=a.length){clearInterval(x); final_greeting();} else { a[i].click(); i++;}}, 50);
                    });
                }, 5000);
                return;
            }
        }
        console.log('Skipping');
    }, 1000);
}
invite();
})();
