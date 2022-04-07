function distanceBetweenPoints(n1,n2,n3,n4){
    let x1=Number(n1);
    let y1=Number(n2);
    let x2= Number(n3);
    let y2=Number(n4);

    distance = Math.sqrt(Math.pow((x1-x2),2)+ Math.pow((y1-y2),2));
    console.log(distance);

}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);