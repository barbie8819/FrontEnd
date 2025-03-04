const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusToFahrenheit(degC) {
    return (degC * 9 / 5) + 32;
}

function fahrenheitToCelsius(degF) {
    return (degF - 32) * 5 / 9;
}

rl.question("Choose conversion: 1 for C to F, 2 for F to C: ", (choice) => {
    switch (choice) {
        case '1':
            rl.question("Enter temperature in Celsius (0 to 100): ", (degC) => {
                degC = parseFloat(degC);
                if (degC >= 0 && degC <= 100) {
                    console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(degC).toFixed(2)}°F`);
                } else {
                    console.log("Invalid input! Please enter a value between 0 and 100°C.");
                }
                rl.close();
            });
            break;
        case '2':
            rl.question("Enter temperature in Fahrenheit (32 to 212): ", (degF) => {
                degF = parseFloat(degF);
                if (degF >= 32 && degF <= 212) {
                    console.log(`Temperature in Celsius: ${fahrenheitToCelsius(degF).toFixed(2)}°C`);
                } else {
                    console.log("Invalid input! Please enter a value between 32 and 212°F.");
                }
                rl.close();
            });
            break;
        default:
            console.log("Invalid selection! Choose 1 or 2.");
            rl.close();
    }
});
