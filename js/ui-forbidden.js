window.ForbiddenModal = {
  open() {
    document.getElementById('forbidden-overlay')?.classList.remove('hidden');
    document.getElementById('forbidden-modal')?.classList.remove('hidden');
  },
  close() {
    document.getElementById('forbidden-overlay')?.classList.add('hidden');
    document.getElementById('forbidden-modal')?.classList.add('hidden');
  }
};
