const form = document.getElementById('contact-form');
const { email } = form.elements;
const alert = document.getElementById('alert');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value === email.value.toLowerCase()) {
    form.submit();
    email.textContent = '';
  } 
  }
});
