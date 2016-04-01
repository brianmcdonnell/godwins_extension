// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Godwin clicked on " + tab.url);

    var criteria = {active: true, currentWindow: true}
    chrome.tabs.query(criteria, function(tabs) {
        var message = { "command" : "highlight", "phrase": "hitler" }
        chrome.tabs.sendMessage(tabs[0].id, message, function(response){
            var badgeText = response.phraseCount.toString()
            chrome.browserAction.setBadgeText({text: badgeText})
        })
    });
});
