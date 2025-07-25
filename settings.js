document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('next-btn').addEventListener('click', function() {
    // Input validation
    const rows = document.getElementById('rows').value;
    const cols = document.getElementById('cols').value;
    const maleStart = document.getElementById('male-start').value;
    const maleEnd = document.getElementById('male-end').value;
    const femaleStart = document.getElementById('female-start').value;
    const femaleEnd = document.getElementById('female-end').value;

    if (!rows || !cols || !maleStart || !maleEnd || !femaleStart || !femaleEnd) {
      alert('모든 값을 입력해주세요.');
      return;
    }

    const maleCount = maleEnd - maleStart + 1;
    const femaleCount = femaleEnd - femaleStart + 1;
    const totalStudents = maleCount + femaleCount;
    const totalSeats = rows * cols;

    if (totalStudents > totalSeats) {
        alert('학생 수가 좌석 수보다 많습니다.');
        return;
    }

    // Save settings to localStorage
    const settings = {
      rows: rows,
      cols: cols,
      maleStart: maleStart,
      maleEnd: maleEnd,
      maleExclude: document.getElementById('male-exclude').value,
      femaleStart: femaleStart,
      femaleEnd: femaleEnd,
      femaleExclude: document.getElementById('female-exclude').value,
      mixGender: document.getElementById('mix-gender').checked
    };

    localStorage.setItem('settings', JSON.stringify(settings));

    window.location.href = 'placement.html';
  });
});