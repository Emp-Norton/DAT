// popup.js
document.getElementById('runScript').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    chrome.tabs.sendMessage(tab.id, {action: toggleStickyNote}, function(response) {
        console.log(response.status);
    });
});


document.getElementById('saveButton').addEventListener('click', () => {
    const userInput = document.getElementById('userInput').value;

    fetch('http://localhost:3000/saveData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: userInput })
    })
    .then(response => console.log('Success:', response))
    .catch(error => console.error('Error:', error));
});
