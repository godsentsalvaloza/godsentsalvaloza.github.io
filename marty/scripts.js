// Declear variables
const test = document.querySelector("#text");
const testDiscount = document.querySelector("#textDiscount");
const travelTime = document.querySelector("#travelTime");
const baseFare = 13;
let stationIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let startStation = 0;
let endStation = 0;
let distance = 0;
let regularFare = 0;
let discountedFare = 0;
let travel = 0;

// setter for departure
function setStartStation() {
  const selectElement = document.querySelector("#startOption");
  startStation = parseInt(selectElement.value);
}

// setter for arrival
function setEndStation() {
  const selectElement = document.querySelector("#endOption");
  endStation = parseInt(selectElement.value);
}

// function to calculate the fare
function calculate(startStation, endStation) {
  distance = 0; // Reset distance before calculating

  // checks the station order
  if (startStation == endStation) {
    distance = 0;
  } else if (startStation < endStation) {
    // Ascending stations
    for (let i = startStation; i < endStation; i++) {
      distance += stationIndex[i];
    }
  } else {
    // Descending stations
    for (let i = startStation - 1; i >= endStation; i--) {
      distance += stationIndex[i];
    }
  }

  // Logic for computing the regular fare
  if (distance == 0) {
    regularFare = 0;
  } else if (distance <= 2) {
    regularFare = baseFare;
  } else if (distance <= 4) {
    regularFare = baseFare + 3;
  } else if (distance <= 7) {
    regularFare = baseFare + 7;
  } else if (distance <= 10) {
    regularFare = baseFare + 11;
  } else if (distance <= 12) {
    regularFare = baseFare + 15;
  }

  // Logic for computing the discounted fare
  if (distance == 0) {
    discountedFare = 0;
  } else if (distance <= 2) {
    discountedFare = baseFare - 3;
  } else if (distance <= 4) {
    discountedFare = baseFare;
  } else if (distance <= 7) {
    discountedFare = baseFare + 3;
  } else if (distance <= 10) {
    discountedFare = baseFare + 6;
  } else if (distance <= 12) {
    discountedFare = baseFare + 9;
  }

  // logic for computing travel time
  switch (distance) {
    case 0:
      travel = 0;
      break;
    case 1:
      travel = 3;
      break;
    case 2:
      travel = 6;
      break;
    case 3:
      travel = 9;
      break;
    case 4:
      travel = 12;
      break;
    case 5:
      travel = 15;
      break;
    case 6:
      travel = 18;
      break;
    case 7:
      travel = 21;
      break;
    case 8:
      travel = 24;
      break;
    case 9:
      travel = 27;
      break;
    case 10:
      travel = 30;
      break;
    case 11:
      travel = 33;
      break;
    case 12:
      travel = 36;
      break;
  }

  // Returns the values to the HTML document
  test.textContent = "₱" + regularFare;
  testDiscount.textContent = "₱" + discountedFare;
  travelTime.textContent = travel + " minutes";
}
// End
