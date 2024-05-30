// script.js

// Selectors
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginError = document.getElementById('login-error');
const signupError = document.getElementById('signup-error');

// Login functionality
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
 .then(response => response.json())
 .then(data => {
    if (data.error) {
      loginError.textContent = data.error;
    } else {
      // Login successful, redirect to dashboard
      window.location.href = '/dashboard';
    }
  })
 .catch(error => {
    console.error(error);
  });
});

// Signup functionality
signupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  if (password!== confirmPassword) {
    signupError.textContent = 'Passwords do not match';
    return;
  }
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
 .then(response => response.json())
 .then(data => {
    if (data.error) {
      signupError.textContent = data.error;
    } else {
      // Signup successful, redirect to login
      window.location.href = '/login';
    }
  })
 .catch(error => {
    console.error(error);
  });
});