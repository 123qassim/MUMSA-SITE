const form = document.querySelector('#mumsa-registration-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent = 'This form is ready for backend integration, but no submission was sent or saved.';
});
