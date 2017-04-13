function Game(options) {
  this.rows = options.rows;
  this.columns = options.columns;
  this.snake = options.snake;

  for (let rowIndex = 0; rowIndex < this.rows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < this.columns; columnIndex++) {
      $('.container').append($('<div>')
      .addClass('cell board')
      .attr('data-row', rowIndex)
      .attr('data-column', columnIndex));
    }
  }
}


Game.prototype.drawSnake = function() {
  this.snake.body.forEach((position, index) => {
    const selector = `[data-row=${position.row}][data-column=${position.column}]`;
    $(selector).addClass('snake');
  });
};

Game.prototype.clearSnake = function() {
  $('.snake').removeClass('snake');
};

Game.prototype.start = function() {
  setInterval(this.update.bind(this), 100);
};

Game.prototype.update = function() {
  this.snake.moveForward(this.rows, this.columns);
  this.clearSnake();
  this.drawSnake();
};

Game.prototype.assignControls = function() {
  $('body').on('keydown', function(e) {
    // console.log(e.keyCode);

    switch (e.keyCode) {
      case 37:
      console.log(this);
        this.snake.goLeft();
        break;
      case 38:
      console.log(this);
        this.snake.goUp();
        break;
      case 39:
      console.log(this);
        this.snake.goRight();
        break;
      case 40:
      console.log(this);
        this.snake.goDown();
        break;

      default:
        break;
    }
  }.bind(this));
};

$(document).ready(() => {

  const game = new Game({
    rows: 50,
    columns: 50,
    snake: new Snake(),
  });
  game.start();
  game.assignControls();
});
