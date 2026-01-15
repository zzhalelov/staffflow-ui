function startClock(root = document) {
  const timeEl = root.querySelector('.clock-time');
  const dateEl = root.querySelector('.clock-date');
  if (!timeEl || !dateEl) return;

  function update() {
    const now = new Date();

    timeEl.textContent =
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0');

    dateEl.textContent =
      String(now.getDate()).padStart(2, '0') + '.' +
      String(now.getMonth() + 1).padStart(2, '0') + '.' +
      now.getFullYear();
  }

  update();
  setInterval(update, 1000);
}
