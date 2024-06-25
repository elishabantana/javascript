//the grades are in the order: Math, Science, English, SST
let studentGrades = {

};

//to add a new student with their grades
function addGrade(studentName, grades) {
  try {
    studentGrades[studentName] = grades;
  } catch (error) {
    console.log(error.message)
  }

}
addGrade("Elisha Bantana", [90, 70, 85, 67]);
addGrade("Sseruyombya Richard", [60, 50, 95, 57]);
addGrade("Matovu Edward", [45, 89, 45, 98]);
addGrade("Agnes Nakimuli", [70, 56, 79, 97]);
addGrade("Kasule Drrick", [40, 56, 30, 20])



//calculates the average grade for a specific learner
function calculateAverageGrade(studentName) {
  try {
    let total = 0;
    let average = 0;
    for (let index = 0; index < studentGrades[studentName].length; index++) {
      total += studentGrades[studentName][index];

    }
    average = total / (studentGrades[studentName].length);
    console.log(`The average of ${studentName} is ${average}`);

    
  } catch (error) { console.log(error.message) }
}
calculateAverageGrade("Sseruyombya Richard");

//find and display a specific student's name
function findStudentGrades(studentName) {
  try {
    console.log(`The grades of ${studentName} are ${studentGrades[studentName]}`);

  } catch (error) {
    console.log(error.message);
  }
}
findStudentGrades("Agnes Nakimuli");

//list all students and their grades
function listAllStudents() {
  try {
    for (let [theirName, theirGrades] of Object.entries(studentGrades)) {
      console.log(`${theirName}: ${theirGrades}`);
    }
  } catch (error) {
    console.log(error.message);
  }

}

listAllStudents();

//find best student based on total
function findOverallBestStudent() {
  try {
    let personWithMaximum = null;
    let total = 0;
    let maximum = 0;
    for (let [key, value] of Object.entries(studentGrades)) {

      total = 0;
      for (let index = 0; index < value.length; index++) {

        total += value[index];
      }
      if (maximum < total) {
        maximum = total;
        personWithMaximum = key;
      }

    }
    console.log(`The person with the highest total is ${personWithMaximum}, with ${maximum}`);

  } catch (error) {
    console.log(error.message);
  }
}

findOverallBestStudent();

//sort students starting with the one with highest average to the least
function sortAccordingToAverage() {
  try {
    let mean = 0;
    let sum = 0;
    let meanArray = [];
    for (let [key, value] of Object.entries(studentGrades)) {
      sum = 0;
      for (let index = 0; index < value.length; index++) {
        sum += value[index];


      }
      mean = sum / (value.length);

      meanArray.push({ key, mean });


    }
    meanArray.sort(function (a, b) {
      return b.mean - a.mean;
    })

    for (let person of meanArray) {
      console.log(person);
    }



  } catch (error) {
    console.log(error.message);
  }
}

sortAccordingToAverage();



//failed to show non existing student