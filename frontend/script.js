const hECMAthlon = {
  getMaxValue: function (input) {
    return [input.split(",").reduce((first, second) => {
      return parseInt(first) >= parseInt(second) ? parseInt(first) : parseInt(second);
    })];

    // const maxValues = input.split(",");
    // let maxValue = 0;
    // for (let i = 0; i < maxValues.length; i++) {
    //   const tempValue = parseInt(maxValues[i]);
    //   if (tempValue > maxValue) {
    //     maxValue = tempValue;
    //   }
    // }
    // return [maxValue];
  },

  getGreaterThan: function (input) {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((num) => num > parseInt(input));

    // const greaterValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const greaterNums = [];
    // for (let j = 0; j < greaterValues.length; j++) {
    //   if (greaterValues[j] > parseInt(input)) {
    //     greaterNums.push(greaterValues[j]);
    //   }
    // }
    // return greaterNums;
  },

  fizzBuzz: function (input) {
    return [...Array(parseInt(input)).keys()].map((key) => {
      return ((key + 1) % 5 === 0 && (key + 1) % 3 === 0) ? "FizzBuzz"
           : (key + 1) % 3 === 0 ? "Fizz"
           : (key + 1) % 5 === 0 ? "Buzz"
           : (key + 1)
    });

    // return [...Array(parseInt(input)).keys()].map((key) => {
    //   if ((key + 1) % 5 === 0 && (key + 1) % 3 === 0) return "FizzBuzz";
    //   else if ((key + 1) % 3 === 0) return "Fizz";
    //   else if ((key + 1) % 5 === 0) return "Buzz";
    //   else return (key + 1);
    // });

    // const output = [];
    // for (let k = 1; k <= parseInt(input); k++) {
    //   let value;
    //   if (k % 5 === 0 && k % 3 === 0) value = "FizzBuzz";
    //   else if (k % 3 === 0) value = "Fizz";
    //   else if (k % 5 === 0) value = "Buzz";
    //   else value = k;
    //   output.push(value);
    // }
    // return output;
  },
};

function setupEvents() {
  const maxValueButton = document.getElementById("max-value-button");
  const greaterThanButton = document.getElementById("greater-than-button");
  const fizzBuzzButton = document.getElementById("fizz-buzz-button");

  const maxValueInput = document.getElementById("max-value-input");
  const greaterThanInput = document.getElementById("greater-than-input");
  const fizzBuzzInput = document.getElementById("fizz-buzz-input");

  const maxValueContainer = document.getElementById("max-value-container");
  const greaterThanContainer = document.getElementById("greater-than-container");
  const fizzBuzzContainer = document.getElementById("fizz-buzz-container");

  const getOutput = output => ["The function starts", ...output, "The function ends"];
  const logResult = (place, values) => {
    while (place.firstChild) {
      place.firstChild.remove();
    }
    for (let j = 0; j < values.length; j++) {
      place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
    }
  };

  maxValueButton.addEventListener("click", () => {
    const maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
    logResult(maxValueContainer, maxValue);
  });

  greaterThanButton.addEventListener("click", () => {
    const greaterValues = getOutput(
      hECMAthlon.getGreaterThan(greaterThanInput.value)
    );
    logResult(greaterThanContainer, greaterValues);
  });

  fizzBuzzButton.addEventListener("click", () => {
    const result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
    logResult(fizzBuzzContainer, result);
  });

  // function getOutput(output) {
  //   return ["The function starts", ...output, "The function ends"];

  //   // const returnValue = ["The function starts"];
  //   // for (let i = 0; i < output.length; i++) {
  //   //   returnValue.push(output[i]);
  //   // }
  //   // returnValue.push("The function ends");
  //   // return returnValue;
  // }

  // function logResult(place, values) {
  //   while (place.firstChild) {
  //     place.firstChild.remove();
  //   }
  //   for (let j = 0; j < values.length; j++) {
  //     place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
  //   }
  // }
}

setupEvents();
