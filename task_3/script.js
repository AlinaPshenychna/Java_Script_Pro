const birthYear = prompt("What is your year of birth?");

if (birthYear === "" || birthYear === null) {
  alert("It's sad that you didn't want to enter your year of birth");
} else {
  alert(2024 - birthYear);
}

let city = prompt("What city do you live in?");

if (city === null || city === "") {
  alert("It's sad that you didn't want to enter your city");
} else if (city === "Washington") {
  alert("You live in the capital of USA");
} else if (city === "London") {
  alert("You live in the capital of England");
} else if (city === "Kyiv") {
  alert("You live in the capital of Ukraine");
} else {
  alert(`You live in city ${city}`);
}

const sportType = prompt("What is your favorite sport");

switch (sportType) {
  case "football":
    alert(
      "Wow, cool. Do you want to become a football player like Andrey Shevchenko?"
    );
    break;
  case "box":
    alert("Wow, cool. Do you want to become a box player like Mike Tyson?");
    break;
  case "basketball":
    alert(
      "Wow, cool. Do you want to become a basketball player like Michael Jordan?"
    );
    break;
  case null:
    alert("It's sad that you didn't want to enter your favorite sport");
    break;
}
