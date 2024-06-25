//a variable array as list of travellers
//variable for total
//for loop to loop through the list of travellers
//using if conditional to separate the charges according to ages
//Under 5 		= 	FREE 0
// 5 yrs – 12 yrs		 =	 £2.50 2
// 13 yrs – 64 yrs 		= 	£5.00 1
// 65 yrs and above 	= 	£3.50 1

// calculate the total for charges for the list of travellers

let travellersAges = [23,3,1,45,78,90,34,32,56,75,23];

let totalCharge=0;
let countOfAgeUnder5=0;
let countOfAgeBetween5And12=0;
let countOfAgeBetween13And64=0;
let countOfAge65AndAbove=0;

for(let index=0;index<travellersAges.length;index++){
   
   if(travellersAges[index] < 5 && travellersAges[index] >= 0){
    countOfAgeUnder5++;
    
   }
   else if(travellersAges[index]>=5 && travellersAges[index]<=12){

countOfAgeBetween5And12++;

   }
   else if(travellersAges[index]>=13 && travellersAges[index]<=64){

    countOfAgeBetween13And64++;
   }

   else if(travellersAges[index]>=65){
    countOfAge65AndAbove++;
   }
}


totalCharge=(countOfAgeUnder5*0)+(countOfAgeBetween5And12*2.50)+(countOfAgeBetween13And64*5.00)+(countOfAge65AndAbove*3.50);
console.log(countOfAgeUnder5);
console.log(countOfAgeBetween5And12);
console.log(countOfAgeBetween13And64);
console.log(countOfAge65AndAbove);
//let travellersAges = [23,3,1,45,78,90,34,32,56,75,23]; 
