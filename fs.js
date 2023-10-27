var fs = require('fs'),
path = require('path'),    
filePath = path.join(__dirname, 'start.html');
console.log(filePath)
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ');
    } else {
        console.log(err);
    }
});
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data.length);
  });
  const data = fs.readFileSync(filePath, 'utf8');
//   console.log(data);
const readable = fs.createReadStream(
    filePath, {encoding: 'utf8'});
logChunks(readable);
async function logChunks(readable) {
    for await (const chunk of readable) {
        // console.log('------',chunk);
    }
}
reader = fs.createReadStream(filePath, { 
    flag: 'a+', 
    encoding: 'UTF-8', 
    start: 0, 
    end: 64, 
    highWaterMark: 16 
}); 
  
// Read and display the file data on console 
reader.on('data', function (chunk) { 
    console.log(chunk); 
}); 