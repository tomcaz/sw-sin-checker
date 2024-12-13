export const sinValidate = (input: string): boolean => {
    // Ensure SIN is a string of 9 digits
    if(input) {
        input = input.replaceAll(" ", "")
    }
    if (!/^\d{9}$/.test(input)) {
        return false;
    }

    // Convert the SIN into an array of numbers
    const digits = input.split("").map(Number);

    let sum = 0;

    // Process each digit
    for (let i = 0; i < digits.length; i++) {
        let digit = digits[i];

        // Double every second digit starting from the second one (index 1)
        if (i % 2 === 1) {
            digit *= 2;
            // If the result is 10 or more, sum its individual digits
            if (digit >= 10) {
                digit = Math.floor(digit / 10) + (digit % 10); // e.g., 16 -> 1 + 6 = 7
            }
        }

        // Add the processed digit to the sum
        sum += digit;
    }

    return sum % 10 === 0;
}