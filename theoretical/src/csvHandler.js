const fs = require('fs');

function readCSV(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return data.split('\n').map(row => row.split(','));
}

function writeCSV(filePath, rows) {
    const content = rows.map(row => row.join(',')).join('\n');
    fs.writeFileSync(filePath, content, 'utf-8');
}

module.exports = { readCSV, writeCSV };


