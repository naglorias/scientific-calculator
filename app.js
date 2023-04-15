'use strict';
let showOutput = document.getElementById("output");
let buttonsValue = document.querySelectorAll("button");

//Basic Calculator
const checkValue = (n) => {
  return showOutput.value += n.value;
}


const equal = () => {
  if (showOutput !== "") {
    showOutput.value = eval(showOutput.value);
  } else {
    checkValue(n);
  }
};
//Clear function
const clearValue = () => {
  showOutput.value = null;
};

//delete last input value
const deleteValue = () => {
  let arr = [];
  for (let i = 0; i < showOutput.value.length; i++) {
    arr.push(showOutput.value[i])
  }
  let arr2 = arr.slice(0, -1);
  return showOutput.value = arr2.join('');

};



/* Scientific calculator (Math medthods functions) */
//check if their numerical values between 0 and 9 
const inspectNumericValues = (x) => {
  for (let i = 0; i < x.length; i++) {
    let inspect = x.includes(i);
    if (inspect < "0" || inspect > "9") {
      if (inspect == "/" || inspect == "*" || inspect != "+" || inspect != "-" || inspect != "."
        || inspect == "(" || inspect == ")" || inspect == "%") {
        return false;
      }
    }
  }
  return true;
}

// return percentage of number
const percentage = () => {
  if (showOutput.value !== '') {
    return showOutput.value = parseInt(showOutput.value) / 100;

  } else {
    showOutput.value = showOutput.value;
  }
};

//sine function
const sinMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.sin(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }

};

//cosine function
const cosMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.cos(showOutput.value).toFixed(5);

    }

  } else {
    showOutput.value = showOutput.value;
  }


};

// tangent function
const tanMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.tan(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;

  }

};

//return pi value
const piMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.PI.toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};


// returns value to the power of 2
const powerSquareMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.pow(showOutput.value, 2)

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns value to the power of 3
const cubeMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.pow(showOutput.value, 3);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};


//returns value to the power of 4
const fractionMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = 1/showOutput.value;

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the value of E to the power of x
const exponentMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.exp(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the natural logarithm (base E) of number
const logMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.log(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the integer part of a number
const truncationMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.trunc(showOutput.value);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};
//return radian value
const radianMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = ((showOutput.value * piMethod()) / 180).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the hyperbolic cosine of number
const coshMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.cosh(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the hyperbolic sine of number
const sinhMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.sinh(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the hyperbolic tangent of a number
const tanhMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.tanh(showOutput.value).toFixed(5);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};
//returns the base 2 logarithm of number
const log2Method = () => {
  if (showOutput.value !== '') {
    if (showOutput.value !== '') {
      return showOutput.value = Math.log2(showOutput.value);
    }
  } else {
    showOutput.value = showOutput.value;
  }

};
//returns the square root of a number
const squareRootMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.sqrt(showOutput.value, 2);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the cube root of a number
const cubeRootMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.pow(showOutput.value, (1 / 3)).toFixed(0);

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

//returns the fourth root of a number
const fourthRootMethod = () => {
  if (showOutput.value !== '') {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.pow(showOutput.value, (1 / 4));

    }
  } else {
    showOutput.value = showOutput.value;
  }
};

