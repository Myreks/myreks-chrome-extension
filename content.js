var snippetUrl = "http://myreks.com/plugin/recommendit/widget/snippet.js";

var injectMyreks = function () {
    var _el = document.createElement("script");
    _el.src = snippetUrl;
    document.querySelector("head").appendChild(_el);
    if (window.location.hash.indexOf("myreks?visible") == -1)
        window.location.hash += "#myreks?visible=true"
};

chrome.runtime.sendMessage({type: "status"}, function (response) {
    if(response.status == "true")
        injectMyreks();
});