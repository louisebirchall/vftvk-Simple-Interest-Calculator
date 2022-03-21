function compute() {
  let principal = document.getElementById("principal").value;
  let rate = document.getElementById("rate").value;
  let years = document.getElementById("years").value;
  let interest = (principal * years * rate) / 100;
  let year = new Date().getFullYear() + parseInt(years);

  // p = document.getElementById("principal").value;
  // let amount = interest - unnecessary as I'm repeating myself,
  // changed "amount" to "interest"
  document.getElementById("result").innerHTML =
    "If you deposit " +
    "<mark>" +
    principal +
    "</mark>" +
    ",<br>at an interest rate of " +
    "<mark>" +
    rate +
    "</mark>" +
    "%<br>You will receive an amount of " +
    "<mark>" +
    interest +
    "</mark>" +
    ",<br>in the year " +
    "<mark>" +
    year +
    "</mark>" +
    "<br>";
  // I've separated this onto separate lines like this for readability
  // on my piddly little screen
}

function updateRate() {
  let rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval + "%";

  //   document.getElementById("rate_val").innerHTML =
  //     document.getElementById("rate").value;
  // also not working
}

function checkData() {
  let principal = document.getElementById("principal").value;
  let moreThenZero = parseInt(principal) > 0;
  if (!moreThenZero) {
    alert("Enter a positive number please");
    document.getElementById("principal").focus();
  }
}
