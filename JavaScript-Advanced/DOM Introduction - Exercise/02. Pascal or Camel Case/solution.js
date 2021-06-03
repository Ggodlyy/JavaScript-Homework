function solve() {
  let firstInput = document.querySelector('#text').value;
  let secondInput = document.querySelector('#naming-convention').value;
  let output = document.querySelector('#result');
  let result = '';

  if (secondInput === 'Camel Case') {
    result = camelCaseConversion(firstInput);
  } else if (secondInput === 'Pascal Case') {
    result = pascalCaseConversion(firstInput);
  } else {
    result = 'Error!';
  }

  output.textContent = result;

  function camelCaseConversion(text) {
    let result = text.split(' ')
      .map(string => string.toLowerCase())
      .map((string, i) => {
        if (i !== 0) {
          return string[0].toUpperCase() + string.substring(1);
        }
        return string;
      });

    return result.join('');
  }

  function pascalCaseConversion(text) {
    let result = text.split(' ')
      .map(string => string.toLowerCase())
      .map((string, i) => {
        return string[0].toUpperCase() + string.substring(1);
      });

    return result.join('');
  }
}