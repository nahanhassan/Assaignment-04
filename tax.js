// Problem-01 : Tax Calculator


function calculateTax(income, expenses) {
  let parameterCheck = income < 0 || expenses < 0 || income < expenses;
  let output = 0;

  if (parameterCheck) {
    output = "Invalid Input";
  } else {
    output = ((income - expenses) * 20) / 100;
  }

  return output;
}

// let x = calculateTax(6000, 1500);
// console.log(x);
