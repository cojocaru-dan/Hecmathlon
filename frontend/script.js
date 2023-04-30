const hECMAthlon = {
  getMaxValue: function (input) {
    var maxValues = input.split(",");
    var maxValue = 0;
    for (var i = 0; i < maxValues.length; i++) {
      var tempValue = parseInt(maxValues[i]);
      if (tempValue > maxValue) {
        maxValue = tempValue;
      }
    }
    return [maxValue];
  },

  getGreaterThan: function (input) {
    var greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var greaterNums = [];
    for (var j = 0; j < greaterValues.length; j++) {
      if (greaterValues[j] > parseInt(input)) {
        greaterNums.push(greaterValues[j]);
      }
    }
    return greaterNums;
  },

  fizzBuzz: function (input) {
    var output = [];
    for (var k = 1; k <= parseInt(input); k++) {
      var value;
      if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
      else if (k % 3 === 0) value = "Fizz";
      else if (k % 5 === 0) value = "Buzz";
      else value = k;
      output.push(value);
    }
    return output;
  },
};

function setupEvents() {
  var maxValueButton = document.getElementById("max-value-button");
  var greaterThanButton = document.getElementById("greater-than-button");
  var fizzBuzzButton = document.getElementById("fizz-buzz-button");

  var maxValueInput = document.getElementById("max-value-input");
  var greaterThanInput = document.getElementById("greater-than-input");
  var fizzBuzzInput = document.getElementById("fizz-buzz-input");

  var maxValueContainer = document.getElementById("max-value-container");
  var greaterThanContainer = document.getElementById("greater-than-container");
  var fizzBuzzContainer = document.getElementById("fizz-buzz-container");

  maxValueButton.addEventListener("click", () => {
    var maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
    logResult(maxValueContainer, maxValue);
  });

  greaterThanButton.addEventListener("click", () => {
    var greaterValues = getOutput(
      hECMAthlon.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanContainer, greaterValues);
  });

  fizzBuzzButton.addEventListener("click", () => {
    var result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzContainer, result);
  });

  function getOutput(output) {
    var returnValue = ["The function starts"];
    for (var i = 0; i < output.length; i++) {
      returnValue.push(output[i]);
    }
    returnValue.push("The function ends");
    return returnValue;
  }

  function logResult(place, values) {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (var j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  }
}

setupEvents();
