// Function to send a message to the content script
function sendMessageToContentScript(tabId, message) {
	chrome.tabs.sendMessage(tabId, message, (response) => {
		// Handle the response if needed
	});
}

// Retrieve the access token from the specified website
function getAccessToken() {
  chrome.tabs.query({ url: 'https://chat.openai.com/*' }, (tabs) => {
    if (tabs.length > 0) {
      const tab = tabs[0];
      sendMessageToContentScript(tab.id, 'getAccessToken');
    } else {
      // Handle case where the website is not found in any tabs
      // ...
    }
  });
}