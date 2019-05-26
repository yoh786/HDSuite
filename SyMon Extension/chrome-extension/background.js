//Background.js


// Called when user clicks browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// send message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	   var activeTab = tabs[0];
	   chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
		 chrome.browserAction.setBadgeText({text: 'COPY', tabId: activeTab.id});
	 })
});

//this block new;; accepts message from content.js; will return to this funcitonality later
//chrome.runtime.onMessage.addListener(
//	function(request, sender, sendResponse) {
//		if ( request.message === "code_worked" ) {
//			chrome.browserAction.setBadgeText({ text: 'GOOD' });
//		}
//	}
//);
