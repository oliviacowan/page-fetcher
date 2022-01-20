const request = require('request');
const fs = require('fs');

const urlInput = process.argv[2];
const localPath = process.argv[3];

if (urlInput && localPath) {
  request(urlInput, (error, body) => {
  
    if (error) {
      console.log(error);
      return;
    }
    fs.writeFile(localPath, body, err => {
      if (err) {
        console.error(err);
        return;
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      }
    });
  });
} else {
  console.log('Invalid input');
}
