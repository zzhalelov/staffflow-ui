(function () {

  function makeDraggable(windowEl) {
    const titlebar = windowEl.querySelector('.window-titlebar');
    if (!titlebar) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titlebar.addEventListener('mousedown', e => {
      isDragging = true;
      offsetX = e.clientX - windowEl.offsetLeft;
      offsetY = e.clientY - windowEl.offsetTop;
      windowEl.style.zIndex = 1000;
      document.body.style.userSelect = 'none';
    });

    document.addEventListener('mousemove', e => {
      if (!isDragging) return;

      windowEl.style.left = (e.clientX - offsetX) + 'px';
      windowEl.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      document.body.style.userSelect = '';
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.main-window').forEach(makeDraggable);
  });

})();
