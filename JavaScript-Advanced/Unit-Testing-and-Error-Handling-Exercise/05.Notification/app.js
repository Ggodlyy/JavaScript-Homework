function notify(message) {
  let div = document.querySelector('#notification');
  div.textContent = message;

  if (div.style.display === '' || div.style.display === 'none') {
    div.style.display = 'block';
  }

  div.addEventListener('click', (e) => {
    e.currentTarget.style.display = 'none';
  });
}