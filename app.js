document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Optional: Add more validation here

    message.textContent = "Thank you! Your booking has been received.";
    form.reset();
  });
});
