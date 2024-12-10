## How to Tackle the Challenge

1. **Read the CSV File**: Open the CSV file and check each cell. Determine if the cell contains a simple value (like `5` or `3`) or a formula (like `=5+A1`).
2. **Handle Formulas**: If the cell has a formula:
   - Break it down (e.g., `=5+A1` means "5" plus the value in cell `A1`).
   - Use the values from other cells to perform the calculation.
3. **Order of Calculation**: Make sure to calculate dependent cells first (e.g., calculate `A1` before `C1` because `C1` depends on `A1`).
4. **Save the Results**: Write the final values into a new CSV file, replacing formulas with their calculated results.

---

## Types of Errors to Check For

1. **Circular References**: This occurs when two or more cells depend on each other in a loop (e.g., `A1 = B1`, and `B1 = A1`).
2. **Invalid Formulas**: Check for incorrect syntax or unsupported operations in formulas.
3. **Missing References**: Handle cases where a formula refers to a cell that doesn't exist.
4. **Calculation Errors**: Handle errors like dividing by zero.

---

## How Users Might Break the Code

1. **Invalid Data**: The CSV file may contain incorrect or incomplete information that the program can’t process.
2. **Unsupported Formulas**: Users might include complex or unsupported formulas that the program cannot handle.
3. **Circular Dependencies**: Users might create formulas that refer to each other in a loop, causing the program to crash or hang.
4. **Large Files**: Users might input a very large file, causing the program to run out of memory or take too long to process.
