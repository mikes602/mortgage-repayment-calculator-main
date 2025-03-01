document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.querySelector("button");                  //to bring the button element into this javascript (DOM)
  const amountElem = document.querySelector('input[name="mortgageAmount"]'); //to bring in the mortgage amount into the javascipt (DOM)
  const termElem = document.querySelector('input[name="mortgageTerm"]');
  const rateElem = document.querySelector('input[name="interestRate"]');
  const resultBox = document.querySelector(".box1 h3");
  const resultText = document.querySelector(".box1 p");

  calculateBtn.addEventListener("click", function () {
    let principal = amountElem.value;
    let years = termElem.value;
    let annualRate = rateElem.value;

    let mortgageType = document.querySelector(
      'input[name="mort_type"]:checked'
    ).id;

  
    if (!principal.length || !years.length || !annualRate.length) { //check if the user entered real values and alert them to do that 
      alert("Please enter valid numbers");                          //if they did not
      return;
    }

    let r = annualRate / 100 / 12;
    let n = years * 12;

    let M, totalRepayment;

    if (mortgageType === "repayment") {
      M = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // google the formular to calculate mortgage
      totalRepayment = M * n;
    } else {
      M = principal * r;
      totalRepayment = M * n;
    }

    resultBox.textContent = `Monthly Payment: $${M.toFixed(2)}`; //To set your answer to two decimal places
    resultText.textContent = `Total Repayment: $${totalRepayment.toFixed(2)}`;
  });
});

//Read up on DOM on w3schools
