

const score = parseFloat(prompt('Enter a number between 1 and 100.'));

switch (true) {

    case (score > 0 && score < 60):
        console.log('You received an F.');
        break
    case (score > 59 && score < 70):
        console.log('You received a D.');
        break
    case (score > 69 && score < 80):
        console.log('You received a C.');
        break
    case (score > 79 && score < 90):
        console.log('You received a B.');
        break
    case (score > 89 && score <= 100):
        console.log('You received an A.');
        break
    default:
        alert('Only numbers between 1 and 100 are accepted.');
}