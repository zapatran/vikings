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
