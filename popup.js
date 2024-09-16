document.getElementById('export').addEventListener('click', () => {
    // Send a message to the content script to extract events
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        files: ['content.js']
      }, () => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "extractEvents" }, (response) => {
          if (response && response.events) {
            //const icsContent = generateICS(response.events);
           // downloadICS(icsContent);
          }
        });
      });
    });
  });