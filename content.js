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

    // Checks if all required divs exist
    if (dateDiv && subjectCodeDiv && subjectNameDiv && informationDiv) {
        // Extracts only the date text node
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


// Log the extracted event data. To be removed in production
console.log(eventData);

function convertDate(date) {
    const [day, month, year] = date.split('.').map(Number);
    return `${year}${String(month).padStart(2, '0')}${String(day).padStart(2, '0')}`;
  }


  let icsContent = "BEGIN:VCALENDAR\r\n" +
                   "VERSION:2.0\r\n";
                   "CALSCALE:GREGORIAN\r\n" +
                   "METHOD:PUBLISH\r\n" +
                   "PRODID:-//Dasar0410//StudentWebCalendar//EN\r\n";
                   

for (let i = 0; i < eventData.length; i++) {
    const event = eventData[i];
    icsContent += "BEGIN:VEVENT\r\n" +
                  `UID:event-${i + 1}\r\n` +
                  `DTSTAMP:${new Date().toISOString().replace(/[-:.]/g, '')}\r\n` +	
                  `DTSTART;VALUE=DATE:${convertDate(event.date)}\r\n` +
                  `DTEND;VALUE=DATE:${convertDate(event.date)}\r\n` +
                  `SUMMARY:${event.subjectCode} - ${event.subjectName}\r\n` +
                  `SEQUENCE:0\r\n` +
                  "END:VEVENT\r\n";
  }

  icsContent += "END:VCALENDAR";



  console.log(icsContent);


