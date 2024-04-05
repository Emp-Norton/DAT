// contentScript.js
(function() {
    // CSS for the sticky note
    const stickyNoteCSS = `
        #sticky-note {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 200px;
            height: 200px;
            background-color: yellow;
            box-shadow: 0 0 8px rgba(0,0,0,0.2);
            padding: 10px;
            box-sizing: border-box;
            font-family: sans-serif;
            z-index: 100000; // High z-index to ensure it's above most elements
            display: none; // Start hidden
        }
        #sticky-note textarea {
            width: 100%;
            height: 100%;
            border: none;
            background: none;
            resize: none;
            outline: none;
            font-size: 14px;
        }
    `;

    // Function to inject CSS
    function injectCSS(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    // Function to toggle the sticky note
    function toggleStickyNote() {
        const note = document.getElementById('sticky-note');
        if (note) {
            note.style.display = note.style.display === 'none' ? 'block' : 'none';
        } else {
            createStickyNote();
        }
    }

    // Function to create the sticky note
    function createStickyNote() {
        injectCSS(stickyNoteCSS);

        const note = document.createElement('div');
        note.id = 'sticky-note';
        note.innerHTML = `<textarea></textarea>`;
        document.body.appendChild(note);

        note.style.display = 'block';
    }

    // Listen for messages from the popup or background script
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "toggleStickyNote") {
            toggleStickyNote();
            sendResponse({status: "success"});
        }
    });
})();
