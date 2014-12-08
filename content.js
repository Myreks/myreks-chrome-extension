var snippetUrl = "http://myreks.com/plugin/recommendit/widget/snippet.js";

var haveMyreksScript = function () {
    var scripts = document.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
        if (/myreks.+snippet\.js$/.test(scripts[i]))
            return true;
    }
    return false;
};

var injectMyreks = function () {
    if (!haveMyreksScript()) {
        var _el = document.createElement("script");
        _el.src = snippetUrl;
        document.querySelector("head").appendChild(_el);
    }
    if (!/myreks\?visible/.test(window.location.hash))
        window.location.hash += "#myreks?visible=true"
};

chrome.runtime.sendMessage({type: "status"}, function (response) {
    if (response.status == "true")
        injectMyreks();
});