const { readCSV, writeCSV } = require('./csvHandler');
const { evaluateSheet } = require('./evaluator');

const inputFilePath = './data/input.csv';
const outputFilePath = './data/output.csv';

try {
    console.log('Reading input CSV...');
    const data = readCSV(inputFilePath);

    console.log('Evaluating formulas...');
    const result = evaluateSheet(data);

    console.log('Writing output CSV...');
    writeCSV(outputFilePath, result);

    console.log('Process completed. Check output.csv for results.');
} catch (error) {
    console.error('Error:', error.message);
}
