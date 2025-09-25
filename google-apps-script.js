// Google Apps Script code for handling RSVP form submissions
// 1. Create a new Google Sheet for storing RSVP responses
// 2. Go to script.google.com and create a new project
// 3. Paste this code into the script editor
// 4. Deploy as a web app with execute permissions for "Anyone"
// 5. Copy the deployment URL and replace YOUR_SCRIPT_ID in RSVP.tsx

function doPost(e) {
  try {
    // Get the specific spreadsheet by ID
    var sheet = SpreadsheetApp.openById('1s5KTYmSj59qEJF8NerLRW9XU1Cv-CfNJE6dcdh9MQ6E').getActiveSheet();

    // Parse the JSON data from the request
    var data = JSON.parse(e.postData.contents);

    // Set up headers if this is the first submission
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([
        ['Timestamp', 'Name', 'Email', 'Meal Choice', 'Dietary Restrictions', 'Submission ID', 'Submission Date']
      ]);
      lastRow = 1;
    }

    // Get meal choice display name
    var mealChoiceDisplay = getMealChoiceDisplay(data.mealChoice);

    // Add the new RSVP data
    sheet.getRange(lastRow + 1, 1, 1, 7).setValues([[
      data.timestamp,
      data.name,
      data.email,
      mealChoiceDisplay,
      data.dietaryRestrictions || 'None',
      data.submissionId,
      new Date()
    ]]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'RSVP submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'Error processing RSVP: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getMealChoiceDisplay(mealChoice) {
  switch (mealChoice) {
    case 'short-ribs':
      return 'Belgian Chimay Ale Braised Boneless Short Ribs';
    case 'branzino':
      return 'Baked Branzino Fillet';
    case 'tofu-cake':
      return 'Broccoli Tofu Cake (Vegan, Gluten-Free)';
    default:
      return mealChoice;
  }
}

// Optional: Function to test the script
function testScript() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        mealChoice: 'short-ribs',
        dietaryRestrictions: 'No shellfish',
        timestamp: new Date().toISOString()
      })
    }
  };

  var result = doPost(testData);
  console.log(result.getContent());
}