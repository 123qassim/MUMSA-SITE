const form = document.querySelector('#mumsa-contact-form');
const status = document.querySelector('#contact-form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  status.textContent = 'This message is ready for backend integration, but no message was sent or saved.';
});
