document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('change-seat-btn').addEventListener('click', function() {
    window.location.href = 'loading.html';
  });

  document.getElementById('settings-btn').addEventListener('click', function() {
    window.location.href = 'settings.html';
  });

  document.getElementById('previous-seat-btn').addEventListener('click', function() {
    window.location.href = 'previous.html';
  });
});
