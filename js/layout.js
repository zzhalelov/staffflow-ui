async function loadLayout(config) {

  /* layout */
  const layoutHtml = await fetch('/layout/layout.html').then(r => r.text());
  document.body.insertAdjacentHTML('afterbegin', layoutHtml);

  /* taskbar */
  const taskbarHtml = await fetch('/layout/taskbar.html').then(r => r.text());
  document.getElementById('taskbar-container').innerHTML = taskbarHtml;

  /* title & icon */
  document.getElementById('app-title').textContent = config.title || '';
  document.getElementById('app-icon').src = config.icon || '';

  /* close */
  document.getElementById('app-close').onclick =
    () => location.href = config.close || '/';

  /* toolbar */
  if (config.toolbar) {
    document.getElementById('app-toolbar').innerHTML = config.toolbar;
  }

  /* content */
  document.getElementById('app-content')
    .appendChild(config.content);

  /* clock */
  if (window.startClock) {
    startClock(document);
  }
}
