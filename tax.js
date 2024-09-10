function calculateTax(income, expense) {
  let parameterCheck = income < 0 || expense < 0 || income < expense;
  let output = 0;

  if (parameterCheck) {
    output = "Invalid Input";
  } else {
    output = ((income - expense) * 20) / 100;
  }

  return output;
}

// let x = calculateTax(6000, 1500);
// console.log(x);
