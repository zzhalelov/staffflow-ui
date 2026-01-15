(function () {
  const overlay = document.createElement('div');
  overlay.id = 'ui-overlay';

  const modal = document.createElement('div');
  modal.id = 'ui-modal';

  modal.innerHTML = `
    <div class="window-titlebar">
      <span id="ui-modal-title"></span>
      <div class="window-button" id="ui-modal-close">×</div>
    </div>
    <div class="modal-body" id="ui-modal-body"></div>
    <div class="modal-actions" id="ui-modal-actions"></div>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  function close() {
    overlay.style.display = 'none';
    modal.style.display = 'none';
  }

  overlay.onclick = close;
  document.getElementById('ui-modal-close').onclick = close;

  window.uiAlert = function (message, title = 'Сообщение') {
    document.getElementById('ui-modal-title').textContent = title;
    document.getElementById('ui-modal-body').textContent = message;
    document.getElementById('ui-modal-actions').innerHTML =
      `<button onclick="uiModalClose()">OK</button>`;

    overlay.style.display = 'block';
    modal.style.display = 'block';
  };

  window.uiConfirm = function (message, onYes, title = 'Подтверждение') {
    document.getElementById('ui-modal-title').textContent = title;
    document.getElementById('ui-modal-body').textContent = message;

    document.getElementById('ui-modal-actions').innerHTML = `
      <button id="ui-yes">Да</button>
      <button id="ui-no">Нет</button>
    `;

    document.getElementById('ui-yes').onclick = () => {
      close();
      onYes && onYes();
    };

    document.getElementById('ui-no').onclick = close;

    overlay.style.display = 'block';
    modal.style.display = 'block';
  };

  window.uiModalClose = close;
})();
