export function backButtonNavigation() {
  document.querySelectorAll('.back-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      window.history.back();
    });
  });
}
