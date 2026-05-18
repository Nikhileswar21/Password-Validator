const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggle-button');
const strengthLabel = document.getElementById('slabel');
const meterFill = document.getElementById('bar');

const validators = {
  'r-len': value => value.length >= 8,
  'r-upper': value => /[A-Z]/.test(value),
  'r-lower': value => /[a-z]/.test(value),
  'r-num': value => /[0-9]/.test(value),
  'r-special': value => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value)
};

const strengthLabels = ['—', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
const fillColors = ['#e74c3c', '#e74c3c', '#f39c12', '#f59e0b', '#27ae60', '#22c55e'];

function updateRule(ruleId, isValid) {
  const ruleItem = document.getElementById(ruleId);

  if (!ruleItem.dataset.label) {
    ruleItem.dataset.label = ruleItem.textContent.trim();
  }

  ruleItem.classList.toggle('pass', isValid);
  ruleItem.textContent = ruleItem.dataset.label;
}

function updateMeter(score) {
  const width = `${score * 20}%`;
  meterFill.style.width = width;
  meterFill.style.background = fillColors[score];
  strengthLabel.textContent = strengthLabels[score];
}

function validatePassword(value) {
  if (value.length === 0) {
    strengthLabel.textContent = '—';
    meterFill.style.width = '0%';
    meterFill.style.background = 'transparent';
  }

  const score = Object.entries(validators).reduce((total, [ruleId, test]) => {
    const passed = test(value);
    updateRule(ruleId, passed);
    return total + (passed ? 1 : 0);
  }, 0);

  if (value.length > 0) {
    updateMeter(score);
  }
}

function togglePasswordVisibility() {
  const shouldShow = passwordInput.type === 'password';
  passwordInput.type = shouldShow ? 'text' : 'password';
  toggleButton.textContent = shouldShow ? '🙈' : '👁';
}

passwordInput.addEventListener('input', event => {
  validatePassword(event.target.value);
});

toggleButton.addEventListener('click', togglePasswordVisibility);

validatePassword('');
