// Helper function to get the value of a cell from the data
function getCellValue(data, cellRef) {
    const match = cellRef.match(/([A-Z])([0-9]+)/);
    if (!match) {
        throw new Error(`Invalid cell reference: ${cellRef}`);
    }

    const col = match[1].charCodeAt(0) - 'A'.charCodeAt(0); 
    const row = parseInt(match[2], 10) - 1; 

    if (row < 0 || col < 0 || row >= data.length || col >= data[row].length) {
        throw new Error(`Cell reference out of bounds: ${cellRef}`);
    }

    const value = data[row][col];
    console.log(`Cell ${cellRef} resolved to value: ${value}`);
    return value;
}

// Function to parse and evaluate formulas
function parseFormula(formula, data, rowIndex) {
    console.log(`Parsing formula: ${formula}`);

    // Remove the '=' at the start of the formula
    let parsedFormula = formula.slice(1);

    // Replace cell references with their actual values
    parsedFormula = parsedFormula.replace(/([A-Z][0-9]+)/g, (_, cellRef) => {
        try {
            const value = getCellValue(data, cellRef);
            if (value === '#ERROR') {
                return '#ERROR';
            }
            if (value.startsWith('=')) {
                // Recursively evaluate if the cell contains another formula
                console.log(`Evaluating nested formula in cell ${cellRef}`);
                return parseFormula(value, data, rowIndex);
            }
            return value;
        } catch (err) {
            console.error(`Error resolving cell reference ${cellRef}: ${err.message}`);
            return '#ERROR';
        }
    });

    console.log(`Final parsed formula: ${parsedFormula}`);

    // Safely evaluate the formula using eval, catching any errors
    try {
        const result = eval(parsedFormula);
        console.log(`Formula "${formula}" evaluated to: ${result}`);
        return result;
    } catch (err) {
        throw new Error(`Error evaluating formula "${formula}": ${err.message}`);
    }
}

// Function to evaluate a sheet with formulas
function evaluateSheet(data) {
    const output = JSON.parse(JSON.stringify(data)); 

    for (let i = 1; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            const cell = data[i][j];
            if (cell.startsWith('=')) {
                try {
                    output[i][j] = parseFormula(cell, output, i + 1);
                } catch (err) {
                    console.error(`Error evaluating cell [${i + 1}, ${j + 1}]: ${err.message}`);
                    output[i][j] = '#ERROR'; 
                }
            }
        }
    }
    return output;
}

module.exports = { evaluateSheet };
