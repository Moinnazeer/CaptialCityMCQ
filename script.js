let questionsFormEl = document.getElementById("questionsForm");

let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let submitBtnEl = document.getElementById("submitBtn");
let reloadBtnEl = document.getElementById("reloadBtn");

let capitalCity = "Delhi";
let selectedCity = null;

[...document.querySelectorAll('input[name=city]')].forEach(el => {
  el.addEventListener('change', function(event) {
    selectedCity = event.target.value;
  });
});

questionsFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
  if (selectedCity === null) {
    resultMsgEl.textContent = 'Please select the answer';
  } else if (selectedCity === capitalCity) {
    resultMsgEl.textContent = 'Correct answer';
    submitBtnEl.style.display = 'none';
    reloadBtnEl.style.display = 'block';
  } else {
    resultMsgEl.textContent = 'Wrong answer';
  }
});

reloadBtnEl.addEventListener('click', function() {
  location.reload();
});
