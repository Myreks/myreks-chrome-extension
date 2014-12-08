chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type == "status")
            sendResponse({status: localStorage.status});
    });

chrome.browserAction.onClicked.addListener(function (tab) {
    function toggle() {
        var enabled = !(localStorage.status == "true");
        localStorage.status = enabled;
        chrome.browserAction.setIcon({path: enabled ? "icons/icon.png" : "icons/icon-disabled.png"});
        chrome.tabs.executeScript({code: "window.location.reload();"});
    }

    toggle();
});