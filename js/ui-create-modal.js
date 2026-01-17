window.Modal = (() => {
  let config = null;

  function open(cfg) {
    config = cfg;

    document.getElementById('modal-title').textContent = cfg.title;
    document.getElementById('modal-icon').src = cfg.icon;

    fetch(cfg.form)
      .then(r => r.text())
      .then(html => {
        document.getElementById('modalForm').innerHTML = html;
        bindSubmit();
      });

    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById('modal').classList.remove('hidden');

    registerWindow('#modal');
  }

  function close() {
    document.getElementById('overlay').classList.add('hidden');
    document.getElementById('modal').classList.add('hidden');
  }

  function bindSubmit() {
    const form = document.getElementById('modalForm');
    form.addEventListener('submit', e => {
      e.preventDefault();

      const payload = {};
      form.querySelectorAll('[name]').forEach(el => {
        payload[el.name] =
          el.type === 'checkbox' ? el.checked : el.value.trim();
      });

      submitForm({
        api: config.api,
        payload,
        successMessage: config.success,
        redirect: config.redirect
      });
    });
  }

  return { open, close };
})();
