// Problem 02 : Notification Generator

function sendNotification(email) {
  let isValid = email.includes("@");
  let splitMail = email.split("@");
  let userName = splitMail[0];
  let domainName = splitMail[1];

  if (!isValid) {
    return "Invalid Email";
  } else {
    return `${userName} sent you an email from ${domainName}`;
  }
}

// let x = sendNotification("sadia8icloud.com");
// console.log(x);
