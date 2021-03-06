const war = new War();

let splashScreen;
let gameScreen;

let names = [
  'Olaf',
  'Thor',
  'Odin',
  'Ragnar',
  'Loki',
  'Otto',
  'Vicky el vikingo',
  'Paco el vikingo',
  'Frode',
  'Bjorn',
];

names.forEach((name) => {
  let health = Math.ceil(Math.random() * 50 + 50);
  let strength = Math.ceil(Math.random() * 5 + 5);

  const viking = new Viking(name, health, strength);
  const saxon = new Saxon(health, strength);

  war.addViking(viking);
  war.addSaxon(saxon);
});

function buildDom(html) {
  const target = document.querySelector('.container');
  target.innerHTML = html;
  return target;
}

function destroyDom(target) {
  target.innerHTML = '';
}

function startGameClick() {
  destroySplashScreen();
  buildGameScreen();
}

function vikingAttackClicked() {
  console.log('vikingAttackClicked');
}

function saxonAttackClicked() {
  console.log('saxonAttackClicked');
}

function renderSoldiers(faction) {
  let army;
  let list;
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

  army.forEach((soldier) => {
    const li = document.createElement('li');
    li.classList.add('soldier');
    if (soldier.health <= 0) {
      li.classList.add('soldier--dead');
    }
    li.innerHTML = `
        <img src="images/${faction}.png" title="${soldier.name}. Health: ${soldier.health}. Strength: ${soldier.strength}." width="50">
        <p>${soldier.health}</p>
    `;
    list.appendChild(li);
  });
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

  const vikingAttackButton = gameScreen.querySelector('#viking-attack');
  const saxonAttackButton = gameScreen.querySelector('#saxon-attack');

  vikingAttackButton.addEventListener('click', vikingAttackClicked);
  saxonAttackButton.addEventListener('click', saxonAttackClicked);

  renderSoldiers('viking');
  renderSoldiers('saxon');
}

function destroySplashScreen() {
  destroyDom(splashScreen);
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

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM Loaded');
  buildSplashScreen();
});
