function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    alert(`Email: ${email}\nPassword: ${password}`);
  }
  
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.innerHTML = '&#x1F440;'; // Closed eye
    } else {
      passwordInput.type = 'password';
      eyeIcon.innerHTML = '&#x1F441;'; // Open eye
    }
  }
  