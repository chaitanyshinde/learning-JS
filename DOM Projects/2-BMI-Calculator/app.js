const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Pls give valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Pls give valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi > 24.9) {
      results.innerHTML = `<span>${bmi}</span> <br> Over weight`;
    } else if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> <br> Under weight`;
    } else {
      results.innerHTML = `<span>${bmi}</span> <br> Perfect`;
    }
  }
});
