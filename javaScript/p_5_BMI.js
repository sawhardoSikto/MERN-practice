
function main(input) {
    let parts = input.split(" ").map(Number);
let height = parts[0];
let weight = parts[1];

   
    let bmi = weight / (height * height);

    bmi = bmi.toFixed(2);

    console.log(`BMI: ${bmi}`);

   
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi >= 18.5 && bmi < 25.0) {
        console.log("Normal weight");
    } else if (bmi >= 25.0 && bmi < 30.0) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }
}

let input = "";
process.stdin.on("data", (chunk) => {
    input += chunk;
});

process.stdin.on("end", () => {
    main(input.trim());
});
