
const languageCode = prompt('Please enter one of the following language codes: \n es, de, en, fr');

if (languageCode === 'es') {
    console.log('Hello World translated in Spanish is: Hola Mundo.');

} else if (languageCode === 'de') {
    console.log('Hello World translated in German is: Hallo Welt.');

} else if (languageCode === 'fr') {
    console.log('Hello World translated in French is: Bonjour le monde.');

} else {
    console.log('Hello World in English is: Hello World.');

}
