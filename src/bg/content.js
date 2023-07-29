// Content script

// Function to extract the access token from the cookie
function getAccessTokenFromCookie() {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split("=");
        if (name === "__Secure-next-auth.session-token") {
            return value;
        }
    }
    return null;
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sendResponse) => {
    if (message === "getAccessToken") {
        const accessToken = getAccessTokenFromCookie();
        console.log("Access Token:", accessToken);
        sendResponse(accessToken);
    }
});

console.log("Content script loaded");