const boards = {
  easy: [
    [5, 3, '', '', 7, '', '', '', ''],
    [6, '', '', 1, 9, 5, '', '', ''],
    ['', 9, 8, '', '', '', '', 6, ''],
    [8, '', '', '', 6, '', '', '', 3],
    [4, '', '', 8, '', 3, '', '', 1],
    [7, '', '', '', 2, '', '', '', 6],
    ['', 6, '', '', '', '', 2, 8, ''],
    ['', '', '', 4, 1, 9, '', '', 5],
    ['', '', '', '', 8, '', '', 7, 9]
  ],
  medium: [
    ['', '', '', 2, 6, '', 7, '', 1],
    [6, 8, '', '', 7, '', '', 9, ''],
    [1, 9, '', '', '', 4, 5, '', ''],
    [8, 2, '', 1, '', '', '', 4, ''],
    ['', '', 4, 6, '', 2, 9, '', ''],
    ['', 5, '', '', '', 3, '', 2, 8],
    ['', '', 9, 3, '', '', '', 7, 4],
    ['', 4, '', '', 5, '', '', 3, 6],
    [7, '', 3, '', 1, 8, '', '', '']
  ],
  hard: [
    ['', '', '', '', '', '', '', '', ''],
    [6, '', '', '', '', '', '', '', ''],
    ['', '', 1, '', 9, 5, '', '', ''],
    ['', '', '', '', '', '', '', 6, ''],
    [4, '', '', 8, '', 3, '', '', 1],
    ['', 9, '', '', '', '', '', '', 5],
    ['', '', '', 4, '', '', '', '', 9],
    ['', '', '', '', '', '', 2, '', ''],
    ['', '', '', '', 8, '', '', 7, 9]
  ]
};

function generateSudoku() {
  const board = document.getElementById('sudoku-board');
  board.innerHTML = '';
  const difficulty = document.getElementById('difficulty').value;
  const puzzle = boards[difficulty];
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      const value = puzzle[row][col];
      if (value !== '') {
        cell.textContent = value;
      } else {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.pattern = "[1-9]";
        cell.appendChild(input);
      }
      board.appendChild(cell);
    }
  }
}

window.onload = generateSudoku;
