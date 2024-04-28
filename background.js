// This function injects the content script into the current tab
function injectScript(tabId, changeInfo, tab) {
    // Check if the tab's status is complete which means the page is fully loaded
    if (changeInfo.status === 'complete' && tab.url) {
        browser.tabs.executeScript(tabId, {
            file: 'content.js'
        });
    }
}

// Listen for any updates to tabs
browser.tabs.onUpdated.addListener(injectScript);
