function englishName(num){
    let numberToString=num.toString();
    let lastNum = numberToString[numberToString.length-1];
    if(lastNum=='1'){
        console.log('one');
    }else if(lastNum=='2'){
        console.log('two');
    }else if(lastNum=='3'){
        console.log('tree');
    }else if(lastNum=='4'){
        console.log('four');
    }else if(lastNum=='5'){
        console.log('five');
    }else if(lastNum=='6'){
        console.log('six');
    }else if(lastNum=='7'){
        console.log('seven');
    }else if(lastNum=='8'){
        console.log('eight');
    }else if(lastNum=='9'){
        console.log('nine');
    }else if(lastNum=='0'){
        console.log('zero');
    }


}
englishName(512976);
englishName(1);
englishName(1643);