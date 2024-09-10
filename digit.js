// Problem-03: Checking Digits Inside a Name

function checkDigitsInName(name) {
  let checkParameter = typeof name === "string";
  let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let resultArray = [];

  if (!checkParameter) {
    return "Invalid Input";
  } else {
    for (let i = 0; i <= numberArray.length - 1; i++) {
      if (name.includes(numberArray[i])) {
        resultArray.push(true);
      }
    }
    if (resultArray.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}

let x = checkDigitsInName("Raj123");
console.log(x);
