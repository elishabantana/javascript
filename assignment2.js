// let input= [70, 30, 80, 90, 40];
// let Input= [-10, 60, 75, 110, 95];
// Input= [45, 60, 55, 75, 100];



function gradeChecker(marks){
    let resultArray=[];
    
 for(let i=0;i<marks.length;i++){
    if(marks[i]>=50 && marks[i]<=100){
    resultArray[i]="pass";
}
else if(marks[i]<50 && marks[i]>=0){
    resultArray[i]="fail";
}
else {
    resultArray[i]="invalid mark";
}
 }
 console.log("marks",marks);
 console.log("results",resultArray);
 

}

gradeChecker([89,67]);
