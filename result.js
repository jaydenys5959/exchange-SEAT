document.addEventListener('DOMContentLoaded', function() {
  const settings = JSON.parse(localStorage.getItem('settings'));
  const seatData = JSON.parse(localStorage.getItem('seatData'));
  const seatGrid = document.getElementById('seat-grid');

  if (settings && seatData) {
    seatGrid.style.gridTemplateColumns = `repeat(${settings.cols}, 1fr)`;

    let maleStudents = [];
    for (let i = parseInt(settings.maleStart); i <= parseInt(settings.maleEnd); i++) {
      if (!settings.maleExclude.split(',').includes(i.toString())) {
        maleStudents.push(i);
      }
    }

    let femaleStudents = [];
    for (let i = parseInt(settings.femaleStart); i <= parseInt(settings.femaleEnd); i++) {
      if (!settings.femaleExclude.split(',').includes(i.toString())) {
        femaleStudents.push(i);
      }
    }

    // Shuffle students
    maleStudents = maleStudents.sort(() => Math.random() - 0.5);
    femaleStudents = femaleStudents.sort(() => Math.random() - 0.5);

    const newSeatArrangement = [];

    seatData.forEach(seatInfo => {
      const seat = document.createElement('div');
      seat.classList.add('seat');
      let studentNumber = '';

      if (seatInfo.gender === 'male' && maleStudents.length > 0) {
        studentNumber = maleStudents.pop();
        seat.classList.add('male');
        seat.textContent = studentNumber;
      } else if (seatInfo.gender === 'female' && femaleStudents.length > 0) {
        studentNumber = femaleStudents.pop();
        seat.classList.add('female');
        seat.textContent = studentNumber;
      }
      
      newSeatArrangement.push({ ...seatInfo, studentNumber });
      seatGrid.appendChild(seat);
    });

    localStorage.setItem('previousSeatArrangement', JSON.stringify(newSeatArrangement));
  }

  document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'popup.html';
  });
});
