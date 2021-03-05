var war = new War();

var splashScreen;
var gameScreen;
var endScreen;

var names = [
  'Olaf',
  'Juan',
  'Maria',
  'Odin',
  'Ragnar Lothvrok',
  'Vicky el Vikingo',
  'Bjorn',
  'Agatha',
  'Lagertha',
  'Rollo',
];

names.forEach(function (name) {
  var health = Math.ceil(Math.random() * 50 + 50);
  var strength = Math.ceil(Math.random() * 5 + 5);

  var viking = new Viking(name, health, strength);
  var saxon = new Saxon(health, strength);

  war.addViking(viking);
  war.addSaxon(saxon);
});

// DOM
function buildDom(html) {
  var target = document.querySelector('.container');
  target.innerHTML = html;
  return target;
}

function destroyDom(target) {
  target.innerHTML = '';
}

function destroySplashScreen() {
  destroyDom(splashScreen);
}

function startGameClick() {
  destroySplashScreen();
  // buildGameScreen();
}

function buildSplashScreen() {
  splashScreen = buildDom(`
        <h1>Vikings vs Saxons</h1>
        <a href="#" class="button">Start battle</a>
    `);

  splashScreen
    .querySelector('.button')
    .addEventListener('click', startGameClick);
}

function loadGame() {
  console.log('Let the war games beggin!');
  buildSplashScreen();
}

window.addEventListener('load', loadGame);
