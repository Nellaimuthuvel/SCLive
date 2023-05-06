
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
  
    let currentValue = "";
    function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      } else {
        return n * factorial(n - 1);
      }
    }
  
    function evaluateResult() {
      console.log('currentValue:', currentValue)

  
      const convertedValue = currentValue
       .replace("tan-1", 'Math.atan')
        .replace("e^", 'Math.exp')  
        
        .replace("X", "*")
        .replace("÷", "/")
        .replace('%', '*0.01')
        .replace('SIN', 'Math.sin')
        .replace('COS', 'Math.cos')
        .replace('TAN', 'Math.tan')
        .replace('ln', 'Math.log')
        .replace('log', 'Math.log10')
        .replace('sqrt', 'Math.sqrt')
        .replace('π', 'Math.PI')
        .replace('E', 'Math.E')
        .replace("sin-1", 'Math.asin')
        .replace("cos-1", 'Math.acos');


        if(convertedValue.indexOf("!") !== -1){
          let index = convertedValue.indexOf("!");
          let result = convertedValue.substring(0, index);
          let ans = factorial(result);
          console.log(ans);
          currentValue = ans.toString();
      display.value = currentValue;
          
        }
        else if(convertedValue.indexOf("10^") !== -1){
          let index = convertedValue.indexOf("10^");          
          let result = convertedValue.substring(index + ("10^").length);         
          let finalans=(Math.pow(10, result));
          currentValue = finalans.toString();
          display.value = currentValue;
        }
        else if(convertedValue.indexOf("^") !== -1){
          let index = convertedValue.indexOf("^");
          let result = convertedValue.substring(0, index);              
          let result1 = convertedValue.substring(index + ("^").length);
          console.log(result1);


          let finalans=(Math.pow(result, result1));
          currentValue = finalans.toString();
          display.value = currentValue;
        }
        else if(convertedValue.indexOf("√") !== -1){
          let index = convertedValue.indexOf("√");
          let result = convertedValue.substring(0, index);
          console.log(result);

          let index1 = convertedValue.indexOf("√");          
          let result1 = convertedValue.substring(index1 + ("√").length);
          console.log(result1);
          let finalans= result * Math.sqrt(result1);
          console.log(finalans);
          currentValue = finalans.toString();
          display.value = currentValue;
        }


        else{
          console.log('convertedValue:', convertedValue)
      const result = eval(convertedValue);
      currentValue = result.toString();
      display.value = currentValue;
        }
      
    }
  
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener('click', function() {
        const value = button.innerText;

        try {
            if (value == "AC") {
                currentValue = "";
                display.value = currentValue;
              }else if(value=="Inv"){  
                const inverst = document.getElementById('y√x');
                inverst.innerText="y√x";
                const Rnd = document.getElementById('Rnd');
                Rnd.innerText="Rnd";
                const xpow2 = document.getElementById('x^2');
                xpow2.innerText="x^2";
                const taninv = document.getElementById('tan-1');
                taninv.innerText="tan-1";
                const teninvx = document.getElementById('10^x');
                teninvx.innerText="10^x";
                const cosinv = document.getElementById('cos-1');
                cosinv.innerText="cos-1";
                const sininv = document.getElementById('sin-1');
                sininv.innerText="sin-1";
                const fact = document.getElementById('fact');
                fact.innerText="x!";
                const ex = document.getElementById('e^x');
                ex.innerText="e^x";

              }
              else if(value=="x!"){  
                currentValue += "!";
                display.value = currentValue;

              }
              else if(value=="e^x"){  
                currentValue += "e^";
                display.value = currentValue;

              }
              else if(value=="10^x"){  
                currentValue += "10^";
                display.value = currentValue;

              }
              else if(value=="x^2"){  
                currentValue += "^2";
                display.value = currentValue;

              }
              else if(value=="y√x"){  
                currentValue += "√";
                display.value = currentValue;

              }

              else if(value=="x^y"){  
                currentValue += "^";
                display.value = currentValue;

              }

              else if(value == "=") {
                evaluateResult();
              } else {
                currentValue += value;
                display.value = currentValue;
              }
        } catch (error) {
            console.error(error);
            currentValue = "ERROR";
            display.value = currentValue;
        }

        
      })
      
    }
  
  
  });