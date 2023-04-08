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
    if (showOutput.value === '') {
      showOutput.value = showOutput.value;
    } else {
      return showOutput.value = parseInt(showOutput.value) / 100;
    }
  };

//sine function
  const sinMethod = () => {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.sin(showOutput.value).toFixed(5);
  
    }
  };

//cosine function
  const cosMethod = () => {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.cos(showOutput.value).toFixed(5);
  
    }
  
  };
  
  // tangent function
  const tanMethod = () => {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.tan(showOutput.value).toFixed(5);
  
    }
  };
  
  //return pi value
  const piMethod = () => {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.PI.toFixed(5);
  
    }
  };
  
  
  // returns value to the power of 2
  const powerSquareMethod = () => {
    if (inspectNumericValues(showOutput.value)) {
      return showOutput.value = Math.pow(showOutput.value, 2)
  
    }
  };
  
  //returns value to the power of 3
  const cubeMethod = () => {
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.pow(showOutput.value,3);
   
     }
   };


    //returns value to the power of 4
  const fractionMethod = () => {
     if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  1 / showOutput.value;
   
     } 
   };
  
   //returns the value of E to the power of x
  const exponentMethod = () => { 
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.exp(showOutput.value).toFixed(5);
   
     }
  };
  
  //returns the natural logarithm (base E) of number
  const logMethod = () => {
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.log(showOutput.value).toFixed(5);
   
     }
   };

  //returns the integer part of a number
  const truncationMethod = () => {
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.trunc(showOutput.value);
   
     }
   };
  //return radian value
  const radianMethod = () => {
     if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  ((showOutput.value * piMethod()) / 180).toFixed(5);
   
     } 
   };
  
//returns the hyperbolic cosine of number
  const coshMethod = () => { 
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.cosh(showOutput.value).toFixed(5);
   
     }
  };
  
  //returns the hyperbolic sine of number
  const sinhMethod = () => {
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.sinh(showOutput.value).toFixed(5);
   
     }
   };

  //returns the hyperbolic tangent of a number
  const tanhMethod = () => { 
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.tanh(showOutput.value).toFixed(5);
   
     }
  };
  //returns the base 2 logarithm of number
  const log2Method = () => { 
    if(showOutput.value !== ''){
      return showOutput.value = Math.log2(showOutput.value);
    }
     
  };
  //returns the square root of a number
  const squareRootMethod = () => { 
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.sqrt(showOutput.value,2);
   
     }
  };

  //returns the cube root of a number
  const cubeRootMethod = () => {
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.pow(showOutput.value,(1/3)).toFixed(0);
   
     }
   };

  //returns the fourth root of a number
  const fourthRootMethod = () => { 
    if(inspectNumericValues(showOutput.value)){
      return showOutput.value =  Math.pow(showOutput.value,(1/4));
   
     }
  };
  
  
