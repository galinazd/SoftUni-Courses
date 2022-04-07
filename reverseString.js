function reverseString(text){
    let textToString = text.split('');
    let textReversed = textToString.reverse();
    let newText = textReversed.join('');
    console.log(newText);

}
reverseString('12345');