document.addEventListener('DOMContentLoaded', function() {
  const previousSeatArrangement = JSON.parse(localStorage.getItem('previousSeatArrangement'));
  const seatGrid = document.getElementById('seat-grid');
  const settings = JSON.parse(localStorage.getItem('settings'));

  if (previousSeatArrangement && settings) {
    seatGrid.style.gridTemplateColumns = `repeat(${settings.cols}, 1fr)`;
    previousSeatArrangement.forEach(seatInfo => {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      if (seatInfo.gender === 'male') {
        seat.classList.add('male');
      } else if (seatInfo.gender === 'female') {
        seat.classList.add('female');
      }
      seat.textContent = seatInfo.studentNumber || '';
      seatGrid.appendChild(seat);
    });
  } else {
    const message = document.createElement('p');
    message.textContent = '이전 자리 배치가 없습니다! 자리 배치를 진행해주세요!';
    seatGrid.appendChild(message);
  }

  document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'popup.html';
  });
});
