
const num1 = parseInt(prompt('Please enter a number.'));
const num2 = parseInt(prompt('Please enter one more number.'));


if (num1 >= num2) {
    document.write(`The larger number is <strong>${num1}</strong>.`);
} else {
    document.write(`The larger number is <strong>${num2}</strong>.`);
}