
const event_table = document.querySelector('.table-standard');

// Gets all the rows in the table body for events
const rows = event_table.querySelectorAll('tbody tr');

// Extracts the event data from each row and trims it down to the necessary information
const eventData = [];
rows.forEach(row => {
    const dateDiv = row.querySelector('td.col1-dato');
    const subjectCodeDiv = row.querySelector('td:nth-child(2) div:nth-child(2)');
    const subjectNameDiv = row.querySelector('td:nth-child(2) div:nth-child(3)');
    const informationDiv = row.querySelector('td:nth-child(3)');

    // Check if all required divs exist
    if (dateDiv && subjectCodeDiv && subjectNameDiv && informationDiv) {
        // Extract only the date text node
        const dateTextNode = Array.from(dateDiv.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        const date = dateTextNode ? dateTextNode.textContent.trim() : '';
        const subjectCode = subjectCodeDiv.textContent.trim();
        const subjectName = subjectNameDiv.textContent.trim();
        const information = informationDiv.textContent.trim();

        eventData.push({ date, subjectCode, subjectName, information });
    } else {
        console.warn('Missing required div elements in row:', row);
    }
});

// Log the extracted event data
console.log(eventData);