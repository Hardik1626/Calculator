function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
  }

  function deleteLast() {
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
      display.textContent = '0';
    }
  }

  function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
  }

  function calculate() {
    const display = document.getElementById('display');
    try {
      display.textContent = eval(display.textContent);
    } catch (error) {
      display.textContent = 'Error';
    }
  }