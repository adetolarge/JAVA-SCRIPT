const form = document.querySelector('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const age = document.getElementById('age').value;
  if (age >= 18) {
    resultDiv.textContent = 'You are allowed to access the website.';
  } else {
    resultDiv.textContent = 'You are not allowed to access the website.';
  }
});