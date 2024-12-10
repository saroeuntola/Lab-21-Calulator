
    function calculate(operation) {
      const input1 = parseFloat(document.getElementById('input1').value);
      const input2 = parseFloat(document.getElementById('input2').value);
      let result = 0;
      switch (operation) {
        case '+':
          result = input1 + input2;
          break;
        case '-':
          result = input1 - input2;
          break;
        case '*':
          result = input1 * input2;
          break;
        case '/':
          result = input2 !== 0 ? input1 / input2 : 'Error (Divide by 0)';
          break;
        default:
          result = 'Invalid operation';
      }
      document.getElementById('result').value = result;
    }
