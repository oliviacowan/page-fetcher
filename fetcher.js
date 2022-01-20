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
      console.error(err)
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
    }
  });
});

} else {
  console.log('Invalid input');
}






// STDIN
// process.argv.on('data', function(urlInput){
//   console.log(urlInput);
//   //request.write(urlInput);  
// });


//console.log(urlInput);
// request(urlInput);
//   (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   //console.log('body:', body); // Print the HTML for the Google homepage.
  
// });
// // request(urlInput, (error, response, body) => {
// //   console.log('error:', error); // Print the error if one occurred
// //   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   //console.log('body:', body); // Print the HTML for the Google homepage.
  
// // });


// const content = 0


// const fs = require('fs');
// fs.writeFile('/vagrant/w2/d3/page-fetcher/writtenFile.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })

