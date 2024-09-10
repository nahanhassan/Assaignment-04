function waitingTime(waitingTimes, serialNumber) {
  let checkParameter =
    Array.isArray(waitingTimes) && typeof serialNumber == "number";

  if (!checkParameter) {
    return "Invalid Input";
  }

  let len = waitingTimes.length;
  let sum = 0;

  for (let i = 0; i <= len - 1; i++) {
    sum += waitingTimes[i];
  }

  let avg = Math.round(sum / len);
  let remainingCandidate = serialNumber - len - 1;
  let remainingTime = remainingCandidate * avg;

  return remainingTime;
}

// let x = waitingTime([3, 5, 7, 11, 6], 10);
// console.log(x);
