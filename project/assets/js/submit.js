function submitForm() {
    // Get form data
    const formData = new FormData(document.getElementById('myForm'));
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Call the function to send data to Google Sheets
    sendDataToGoogleSheet(formObject);
}

async function sendDataToGoogleSheet(data) {
    // Replace 'YOUR_SPREADSHEET_ID' and 'YOUR_API_KEY' with your actual values
    const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    const apiKey = 'AIzaSyC7xt6M_t5vpI50ez1b_y8cgQniUoK4PIo';
    const sheetName = 'Newsletter'; // Change if your sheet has a different name

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}:append?valueInputOption=RAW&key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            values: [Object.values(data)],
        }),
    });

    if (response.ok) {
        // Redirect to thanks.html after successful submission
        window.location.href = 'thankyou.html';
    } else {
        console.error('Error submitting form to Google Sheets:', response.statusText);
    }
}
