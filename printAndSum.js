 function printAndSum(num1,num2){
     let line="";
     let sum=0;
     for (let index = num1; index <= num2; index++) {
        line+=index + " ";
        sum+=index;    
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
 }
printAndSum(50,60)