(function () {

  let z = 100;

  function makeDraggable(win) {
    const bar = win.querySelector('.window-titlebar');
    if (!bar) return;

    let startX, startY, x = 0, y = 0, dragging = false;

    bar.addEventListener('mousedown', e => {
      if (e.target.classList.contains('window-button')) return;

      dragging = true;
      startX = e.clientX - x;
      startY = e.clientY - y;

      z++;
      win.style.zIndex = z;
    });

    document.addEventListener('mousemove', e => {
      if (!dragging) return;
      x = e.clientX - startX;
      y = e.clientY - startY;
      win.style.transform =
        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });

    document.addEventListener('mouseup', () => dragging = false);
  }

  window.registerWindow = function (selector) {
    const win = document.querySelector(selector);
    if (win) {
      z++;
      win.style.zIndex = z;
      makeDraggable(win);
    }
  };

})();
