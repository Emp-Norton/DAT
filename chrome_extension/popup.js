// popup.js
document.getElementById('runScript').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {action: toggleStickyNote}, function(response) {
        console.log(response.status);
    });
});

