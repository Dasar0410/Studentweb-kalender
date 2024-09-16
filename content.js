// Gets the table element
const table = document.querySelector('.table-standard');

// Gets all the rows in the table body for events
const rows = table.querySelectorAll('tbody tr');

//  Extracts the event data from each row and trims it down to the necessary information
const eventData = [];
rows.forEach(row => {
    const date = row.querySelector('.col1-dato').textContent.trim();
    const subject = row.querySelector('td:nth-child(2)').textContent.trim();
    const information = row.querySelector('td:nth-child(3)').textContent.trim();

    eventData.push({ date, subject, information });
});

// Log the extracted event data
console.log(eventData);