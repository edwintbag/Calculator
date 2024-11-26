// script.js

let memoryValue = 0;

// Theme Toggle
document.getElementById('theme-toggle-btn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const btn = document.getElementById('theme-toggle-btn');
  btn.textContent = document.body.classList.contains('dark-mode')
    ? '☀️ Light Mode'
    : '🌙 Dark Mode';
});

// Append Value
function appendValue(value) {
  const result = document.getElementById('result');
  if (result.value === '0') result.value = '';
  result.value += value;
}

// Clear Display
function clearDisplay() {
  document.getElementById('result').value = '0';
}

// Delete Last Character
function deleteLast() {
  const result = document.getElementById('result');
  result.value = result.value.slice(0, -1) || '0';
}

// Memory Functions
function memoryAdd() {
  memoryValue += parseFloat(document.getElementById('result').value || 0);
}

function memorySubtract() {
  memoryValue -= parseFloat(document.getElementById('result').value || 0);
}

function memoryRecall() {
  document.getElementById('result').value = memoryValue;
}

function memoryClear() {
  memoryValue = 0;
}

// Calculate Expression
function calculate() {
  const result = document.getElementById('result');
  try {
    const expression = result.value
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/\^/g, '**');
    const evaluated = eval(expression);
    result.value = evaluated;

    // Add to History
    const historyList = document.getElementById('history-list');
    const historyItem = document.createElement('li');
    historyItem.textContent = `${expression} = ${evaluated}`;
    historyList.prepend(historyItem);
  } catch {
    result.value = 'Error';
  }
}