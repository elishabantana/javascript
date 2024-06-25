let patients = [
  {
    id: 1,
    person: {
      names: [
        { givenName: "John", middleName: "Doe", familyName: "Smith", preferred: true, uuid: "uuid-of-name-uuid" }
      ],
      gender: "M",
      birthdate: "1980-01-15",
      birthdateEstimated: false,
      dead: false,
      deathDate: null,
      attributes: [
        { attributeType: "uuid-of-attribute-type", value: "Some value" }
      ]
    },
    identifiers: [
      { identifier: "12345", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
    ],
    addresses: [
      {
        address1: "123 Main St",
        address2: "Apt 2B",
        cityVillage: "Springfield",
        stateProvince: "IL",
        country: "USA",
        postalCode: "12345",
        preferred: true,
        voided: false
      }
    ],
    attributes: [
      { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
    ],
    relationships: [
      { relationshipType: "uuid-of-relationship-type", personB: "uuid-of-personB" }
    ]
  },
  {
    id: 2,
    person: {
      names: [
        { givenName: "Jane", middleName: "Marie", familyName: "Johnson", preferred: true, uuid: "uuid-of-name-uuid" }
      ],
      gender: "F",
      birthdate: "1985-03-20",
      birthdateEstimated: false,
      dead: false,
      deathDate: null,
      attributes: [
        { attributeType: "uuid-of-attribute-type", value: "Some value" }
      ]
    },
    identifiers: [
      { identifier: "67890", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
    ],
    addresses: [
      {
        address1: "456 Oak Ave",
        address2: "Suite 5",
        cityVillage: "New York",
        stateProvince: "NY",
        country: "USA",
        postalCode: "54321",
        preferred: true,
        voided: false
      }
    ],
    attributes: [
      { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
    ],
    relationships: []
  },
  {
    id: 3,
    person: {
      names: [
        { givenName: "Michael", middleName: "David", familyName: "Brown", preferred: true, uuid: "uuid-of-name-uuid" }
      ],
      gender: "M",
      birthdate: "1975-08-10",
      birthdateEstimated: false,
      dead: true,
      deathDate: "2022-05-15",
      attributes: [
        { attributeType: "uuid-of-attribute-type", value: "Some value" }
      ]
    },
    identifiers: [
      { identifier: "54321", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
    ],
    addresses: [
      {
        address1: "789 Elm St",
        address2: "",
        cityVillage: "Los Angeles",
        stateProvince: "CA",
        country: "USA",
        postalCode: "98765",
        preferred: true,
        voided: false
      }
    ],
    attributes: [
      { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
    ],
    relationships: [
      { relationshipType: "uuid-of-relationship-type", personB: "uuid-of-personB" }
    ]
  }

];

//error colector
let errorCollector = [];


//validate names, birthdate, gender

//validate names(givenName, middleName, familyName)
function validateNames(name) {
  try {

    //regex for name
    let regexForName = /^([A-Z][a-z]+)$/;
    if (regexForName.test(name)) {
      return true;
      // errorCollector.push(`${name} is invalid, start with a capital letter`);
    } else {
      return false;
    }

  } catch (error) {
    console.log(error.message)
  }

}


//validate birthdate
function validateBirthdate(birthdate) {
  try {

    let today = new Date();
    let birthday = new Date(birthdate);
    if (birthday > today) {

      errorCollector.push(`the birthdate should be before ${today}`);

    }



    //regex for birthdate
    let regexForBirthdate = /(19|20)\d{2}[-]((1[0-2]|[1-9]))[-](0[1-9]|[12][0-9]|3[01])$/
    if (regexForBirthdate.test(birthdate)) {
      return true;

    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }

}




//validate gender

function validateGender(sex) {
  try {

    //regex for gender, uppercase M or F
    let regexForGender = /^[M|F]$/;

    if (regexForGender.test(sex)) {
      return true;
      // errorCollector.push("uppercase M for male and F for female");
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
  }

}

// is patient deceased
function isPatientDeceased(patient) {
  try {
    if (patient) {
      return true;
    }
    else {

      return false;
    }
  } catch (error) {
    console.log(error.message);
  }
}

//display patient's birthdate
function displayPatientBirthdate(patient) {
  errorCollector.push(`The patient was born ${patient.birthdate}`);
}

//add a patient to the patients array
function addPatient(patient) {
  for (let sick of patient.person.names) {
    if (validateNames(sick.givenName) == false) {
      errorCollector.push(`Start the given name, ${sick.givenName} with a capital letter.`);
    }

    if (validateNames(sick.middleName) == false) {
      errorCollector.push(`Start the middle name, ${sick.middleName} with a capital letter.`);
    }

    if (validateNames(sick.familyName) == false) {
      errorCollector.push(`Start the family name, ${sick.familyName} with a capital letter.`);
    }
  }

  if (validateGender(patient.person.gender) == false) {
    errorCollector.push(`Instead of ${patient.person.gender}, use capital M for male and F for female`);
  }

  if (validateBirthdate(patient.person.birthdate) == false) {
    errorCollector.push(`the birthdate, ${patient.person.birthdate} is invalid. Enter year, month, date, separted with hyphens, -.`);

  }
  if (isPatientDeceased(patient.person.dead)) {
    errorCollector.push(`the patient, ${patient.person.names[0].givenName} is deceased.`)
  }
  else {
    errorCollector.push(`the patient, ${patient.person.names[0].givenName} is alive.`)

  }

  displayPatientBirthdate(patient.person);

  //adding a patient to the patients array
  patients.push(patient);

}

addPatient(
  {
    id: 4,
    person: {
      names: [
        { givenName: "Elisha", middleName: "Kweri", familyName: "Bantana", preferred: true, uuid: "uuid-of-name-uuid" }
      ],
      gender: "M",
      birthdate: "1994-11-20",
      birthdateEstimated: false,
      dead: false,
      deathDate: null,
      attributes: [
        { attributeType: "uuid-of-attribute-type", value: "Some value" }
      ]
    },
    identifiers: [
      { identifier: "12345", identifierType: "uuid-of-identifier-type", location: "uuid-of-location", preferred: true, voided: false }
    ],
    addresses: [
      {
        address1: "123 Main St",
        address2: "Apt 2B",
        cityVillage: "Ssaza",
        stateProvince: "Masaka",
        country: "Uganda",
        postalCode: "54321",
        preferred: true,
        voided: false
      }
    ],
    attributes: [
      { attributeType: "uuid-of-attribute-type", value: "Some attribute value" }
    ],
    relationships: [
      { relationshipType: "uuid-of-relationship-type", personB: "uuid-of-personB" }
    ]
  }
);


//count the female and male patie
function countFemaleAndMalePatients(sicks) {
  let countMale = 0;
  let countFemale = 0;
  for (let index = 0; index < sicks.length; index++) {

    if ((sicks[index].person.gender) == "M") {
      countMale++;
    }
    if ((sicks[index].person.gender) == "F") {
      countFemale++;
    }
  }
  errorCollector.push(`Male patients: ${countMale}. Female patients: ${countFemale}`);

}

// countFemaleAndMalePatients(patients);

//delete a patient's record
function deletePatient(patientId) {
  for (let index = 0; index < patients.length; index++) {

    if (patients[index].id == patientId) {

      patients.splice(index, 1);
    }

  }
}

//invoke deletePatient
// deletePatient(2);


//see error collector
console.log(errorCollector);

// see patients
// console.log(patients);