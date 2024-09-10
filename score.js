function calculateFinalScore(obj) {
  let parameterCheck =
    typeof obj.name === "string" &&
    typeof obj.testScore === "number" &&
    obj.testScore <= 50 &&
    typeof obj.schoolGrade === "number" &&
    obj.schoolGrade <= 30 &&
    typeof obj.isFFamily === "boolean";

  if (typeof obj !== "object") {
    return "Invalid Input";
  }

  if (!parameterCheck) {
    return false;
  }

  if (obj.isFFamily === true) {
    let score = obj.testScore + obj.schoolGrade + 20;
    if (score >= 80) {
      return true;
    } else {
      return false;
    }
  } else {
    let score = obj.testScore + obj.schoolGrade;
    if (score >= 80) {
      return true;
    } else {
      return false;
    }
  }
}

// let obj = { name: "Rajib", testScore: 50, schoolGrade: 30, isFFamily: false };

// let x = calculateFinalScore(obj);
// console.log(x);
