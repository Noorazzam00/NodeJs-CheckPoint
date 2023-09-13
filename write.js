const fs = require('fs');
// Text to be written to the file
const text = 'Hello Node';
// Write the text to the file
fs.writeFile('welcome.txt', text, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File "welcome.txt" has been created and written to.');
  }
});


