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

function destroyGameScreen() {
  destroyDom(gameScreen);
}

function startGameClick() {
  destroySplashScreen();
  buildGameScreen();
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

function vikingAttackClicked() {
  var message = war.vikingAttack();
  renderSoldiers('saxon');
  renderAttackMessage(message);
}

function saxonAttackClicked() {
  var message = war.saxonAttack();
  renderSoldiers('viking');
  renderAttackMessage(message);
}

function renderAttackMessage(message) {
  gameScreen.querySelector('.status-message').innerText = message;
}

function renderSoldiers(faction) {
  var army;
  var list;

  switch (faction) {
    case 'viking':
      army = war.vikingArmy;
      list = gameScreen.querySelector('#viking-army ul');
      break;
    case 'saxon':
      army = war.saxonArmy;
      list = gameScreen.querySelector('#saxon-army ul');
      break;
  }

  list.innerHTML = '';
  for (var i = 0; i < army.length; i++) {
    var soldier = army[i];
    var item = document.createElement('li');
    item.classList.add('soldier');
    item.innerHTML = `
            <li class="soldier ${soldier.health <= 0 ? 'sodier--dead' : ''}">
                <img src="images/${faction}.png" title="${
      soldier.name
    }. Health: ${soldier.health}. Strength: ${soldier.strength}." width="50">
                <p>${soldier.health}</p>
            </li>
        `;
    list.appendChild(item);
  }
}

function buildGameScreen() {
  gameScreen = buildDom(`
        <div id="viking-army" class="army">
            <h2>Vikings</h2>
            <ul></ul>
        </div>
        <div id="saxon-army" class="army">
            <h2>Saxons</h2>
            <ul></ul>
        </div>
        <div class="status-message">
            Click a button to start fighting!
        </div>
        <div class="attacks">
            <button id="viking-attack" class="button">Viking Attack</button>
            <button id="saxon-attack" class="button">Saxon Attack</button>
        </div>  
    `);

  var vikingAttackButton = gameScreen.querySelector('#viking-attack');
  var saxonAttackButton = gameScreen.querySelector('#saxon-attack');

  vikingAttackButton.addEventListener('click', vikingAttackClicked);
  saxonAttackButton.addEventListener('click', saxonAttackClicked);

  renderSoldiers('viking');
  renderSoldiers('saxon');
}

function loadGame() {
  console.log('Let the war games beggin!');
  buildSplashScreen();
}

window.addEventListener('load', loadGame);
