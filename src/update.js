let fs = require('fs');

// Updates the JSON file from the text file.
// (Only tested on Windows 10)

(async () => {
    let txt = fs.readFileSync('./data/exit-nodes.txt').toString()
    let json = txt.split('\r\n')
    fs.writeFileSync('./data/exit-nodes.json', JSON.stringify(json, null, 4))
})()

// node src/update.js