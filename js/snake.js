function Snake() {
  this.direction = 'right';
  this.body = [
      { row: 1, column: 5 }, // head
      { row: 1, column: 4 },
      { row: 1, column: 3 },
      { row: 1, column: 2 },
      { row: 1, column: 1 }, // tail
  ];
}

Snake.prototype.moveForward = function (maxRows, maxColumns) {
  const head = this.body[0];

  switch (this.direction) {
    case 'up':
      this.body.unshift({
        row: ((head.row - 1) + maxRows) % maxRows,
        column: head.column,
      });
      break;

    case 'down':
      this.body.unshift({
        row: ((head.row + 1) + maxRows) % maxRows,
        column: head.column,
      });
      break;

    case 'left':
      this.body.unshift({
        row: head.row,
        column: ((head.column - 1) + maxColumns) % maxColumns,
      });
      break;

    case 'right':
      this.body.unshift({
        row: head.row,
        column: ((head.column + 1) + maxColumns) % maxColumns,
      });
      break;

    default:
      break;
  }
  this.body.pop();
};