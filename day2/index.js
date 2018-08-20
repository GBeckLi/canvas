(function(){
  let guesses = 0;
  let message = 'Guess The Letter From a (lower)to z(higher)';
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let today = new Date();
  let letterToGuess = '';
  let higherOrLower = '';
  let letterGuessed = [];
  let gameOver = false;
  let context = document.getElementById('canvas').getContext('2d');

  initGame();

  function initGame() {
    var letterIndex = Math.floor(Math.random() * letters.length);
    letterToGuess = letters[letterIndex];
    letterGuessed = [];
    gameOver = false;
    window.addEventListener('keydown', eventKeyPressed, true);

    drawScreen();
  }

  // 处理用户猜字母的按键操作
  function eventKeyPressed(e) {
    if (gameOver) {
      return;
    }

    // 获取按键内容
    var letterPressed = String.fromCharCode(e.keyCode);
    letterPressed = letterPressed.toLowerCase();
    
    guesses++;
    letterGuessed.push(letterPressed);

    
    // 获胜判定
    if (letterPressed === letterToGuess) {
      gameOver = true;
    } else {
      letterIndex = letters.indexOf(letterToGuess);
      let guessIndex = letters.indexOf(letterPressed);

      if (guessIndex < 0) {
        higherOrLower = 'That is not a letter';
      } else if (guessIndex > letterIndex) {
        higherOrLower = 'Lower';
      } else {
        higherOrLower = 'Higher';
      }
    }

    drawScreen();
  }

  function drawScreen() {
    // 绘制背景
    context.fillStyle = '#ffffaa';
    context.fillRect(0, 0, 500, 300);

    // 绘制边框
    context.fillStyle = '#000';
    context.strokeRect(5, 5, 490, 290);

    context.textBaseline = 'top';

    // 绘制时间戳
    context.fillStyle = '#000';
    context.font = '10px Sans-Serif';
    context.fillText(today, 150, 10);

    // 绘制提示消息
    context.fillStyle = '#ff0000';
    context.font = '14px Sans-Serif';
    context.fillText(message, 150, 30);

    // 绘制所猜字母
    context.fillStyle = '#109910';
    context.font = '16px Sans-Serif';
    context.fillText('Guessess:' + guesses, 215, 50);

    // 绘制提示
    context.fillStyle = '#000';
    context.font = '16px Sans-Serif';
    context.fillText('Higer or Lower:' + higherOrLower, 150, 125);

    // 绘制已经猜过的字母
    context.fillStyle = '#ff0000';
    context.font = '16px Sans-Serif';
    context.fillText('Letters Guessed: ' + letterGuessed.toString(), 10, 260);

    // 绘制胜利提示
    if (gameOver) {
      context.fillStyle = '#FF0000';
      context.font = '40px _sans-serif';
      context.fillText('You Got It', 150, 180);
    }
  }
})();