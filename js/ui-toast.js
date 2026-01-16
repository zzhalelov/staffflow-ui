window.toast = {
  show(message, type = 'info', timeout = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.2s';
      setTimeout(() => toast.remove(), 200);
    }, timeout);
  },

  success(msg, t) {
    this.show(msg, 'success', t);
  },
  error(msg, t) {
    this.show(msg, 'error', t);
  },
  info(msg, t) {
    this.show(msg, 'info', t);
  }
};
