//Celebrating Employee Milestones

//function for this years birthday
function thisYearsBirthday(dateOfBirth) {
    let today = new Date();
    let thisYearsFullYear = today.getFullYear();
    let birthMonth = new Date(dateOfBirth).getMonth();
    let birthDate = new Date(dateOfBirth).getDate();

    let thisYearsBirthday = new Date(thisYearsFullYear, birthMonth, birthDate);
    
    return thisYearsBirthday;

}

//function for days left
function daysLeft(thisYearBirthday) {

    let today = new Date();

    const oneDay = 24 * 60 * 60 * 1000;
    let daysLeft = Math.ceil((thisYearBirthday.getTime() - today.getTime()) / oneDay);
    return daysLeft;
}




//function for email validation
function emailValidation(email) {
    let regexForEmail = /^([a-zA-Z]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
    if (regexForEmail.test(email)) {
        return true;
    }
    else {
        return false;

    }
}



let errorCollector = [];

function checkEmployeeDetails(input) {
       let regexForPhoneNumber = /(\(\+\d{3}\))\d{3}([ -]\d{6})$/;
       let myDaysLeft;
       let today=new Date();
       for (let index = 0; index < input.length; index++) {
       
        if (emailValidation(input[index].emailAddress) == false) {
            errorCollector.push(`the email you have sent, ${input[index].emailAddress} is invalid`);
        }


        if (regexForPhoneNumber.test(input[index].phoneNumber) == false) {
            errorCollector.push(`dear,${input[index].name}, the phone number,${input[index].phoneNumber} is  invalid`);
        }

        myDaysLeft=daysLeft(thisYearsBirthday(input[index].dateOfBirth));
        let age =today.getFullYear()-(new Date(input[index].dateOfBirth).getFullYear());

        if(myDaysLeft<=7 && myDaysLeft>=1 ){
            console.log(`Dear, ${input[index].name}, your birthday is within ${myDaysLeft}`);
        }
        else if(myDaysLeft==0){
            console.log(`Dear, ${input[index].name}, your birthday is today, happy ${age}th birthday.`);
            
        }
        else if(myDaysLeft<0){
            console.log(`Dear, ${input[index].name}, your birthday passed`);

        }
    }


}

let people = [{ name: "Eisha Bantana", age: 30, dateOfBirth: "1994/06/18", emailAddress: "bantalisha@gmail.com", phoneNumber: "(+256)703-251488" },
{ name: "Mufere Ali", age: 24, dateOfBirth: "2000/03/10", emailAddress: "mufereali@gmail.com", phoneNumber: "(+256)785-251488" }];


checkEmployeeDetails(people);
console.log(errorCollector);