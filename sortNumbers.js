function sortNumbers(n1,n2,n3){
    let num =[n1,n2,n3];
    let numbers=
    num.sort((a,b)=>b-a).join("\n");
    console.log(numbers);

}
sortNumbers(2,1,3)