(function () {
  function failed() {
    const loading = document.querySelector('[data-loading]');
    if (!loading) return;
    loading.textContent = '页面功能未能加载，请重新打开页面。你的本机记录未被清除。';
    if (document.querySelector('[data-retry]')) return;
    const retry = document.createElement('button');
    retry.dataset.retry = '';
    retry.textContent = '重新加载';
    retry.onclick = function () { location.reload(); };
    loading.after(retry);
  }
  window.addEventListener('error', failed);
  setTimeout(failed, 8000);
})();
