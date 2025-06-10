   function append(value) {
      const display = document.getElementById('display');
      display.value += value;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculate() {
      const display = document.getElementById('display');
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    }
    function square(){
      try{
        const value = parseFloat(display.value);
        if(!isNaN(value)){
          display.value = value * value;
        }
       } catch{
          display.value = "Error";
        }
      }