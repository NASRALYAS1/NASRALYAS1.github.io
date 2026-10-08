(function () {
  var btn = document.getElementById('themeToggle');
  var root = document.documentElement;
  function current() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('nah-theme', next); } catch (e) {}
  });
  try {
    var saved = localStorage.getItem('nah-theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {}
})();
