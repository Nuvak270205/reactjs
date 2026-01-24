let massMark = 78;
let heightMark = 1.95;
let massJohn = 95;
let heightJohn = 1.88;
let BMI;
let markHigherBMI;

function calculateBMI(mass, height) {
  BMI = mass / height ** 2;
  return BMI;
}

function compareBMI() {
  const Mark = calculateBMI(massMark, heightMark).toFixed(2);
  console.log("BMI của Mark: " + Mark);
  const John = calculateBMI(massJohn, heightJohn).toFixed(2);
  console.log("BMI của John: " + John);
  if (Mark > John) {
    markHigherBMI = true;
    console.log("BMI của Mark cao hơn BMI của John");
  } else {
    markHigherBMI = false;
    console.log(`BMI của John(${Mark}) cao hơn BMI(${John}) của Mark`);
  }
}

compareBMI();