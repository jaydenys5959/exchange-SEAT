document.addEventListener('DOMContentLoaded', function() {
  const settings = JSON.parse(localStorage.getItem('settings'));
  const seatGrid = document.getElementById('seat-grid');
  const seatData = [];

  if (settings) {
    seatGrid.style.gridTemplateColumns = `repeat(${settings.cols}, 1fr)`;

    for (let i = 0; i < settings.rows * settings.cols; i++) {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      seat.dataset.id = i;
      seatGrid.appendChild(seat);
      seatData.push({ id: i, gender: null });

      seat.addEventListener('click', function() {
        if (settings.mixGender) {
          if (this.classList.contains('male')) {
            this.classList.remove('male');
            this.classList.add('female');
            seatData[i].gender = 'female';
          } else {
            this.classList.remove('female');
            this.classList.add('male');
            seatData[i].gender = 'male';
          }
        } else {
          this.classList.toggle('male');
          seatData[i].gender = this.classList.contains('male') ? 'male' : null;
        }
      });

      seat.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        if (settings.mixGender) {
          this.classList.remove('male');
          this.classList.add('female');
          seatData[i].gender = 'female';
        }
      });
    }
  }

  document.getElementById('complete-btn').addEventListener('click', function() {
    localStorage.setItem('seatData', JSON.stringify(seatData));
    window.location.href = 'popup.html';
  });
});
