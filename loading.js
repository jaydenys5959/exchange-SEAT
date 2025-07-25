document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    window.location.href = 'result.html';
  }, 2000);

  document.getElementById('cancel-btn').addEventListener('click', function() {
    window.location.href = 'popup.html';
  });
});
