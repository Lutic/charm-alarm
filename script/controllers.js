var currentTest;

app.controller('Main', function() {
  this.tests = tests;
  this.testChoice = function(a) {
    currentTest = a;
    console.log(currentTest);
    return currentTest;
  }
});
app.controller('Test', function() {
  this.currentTest = currentTest;
  this.tests = tests;
});
app.controller('Help', function() {
  this.helpCenters = helpCenters;
});

var helpCenters = [
  {
    title: 'Благотворительный Фонд «Безопасный дом»',
    description: 'психологическая, медицинская, социальная помощь и консультации (можешь позвонить или написать смс)',
    phone: '8 (926) 073-95-75'
  },
  {
    title: 'Горячая линия Международной организации по Миграции',
    description: 'экстренная помощь, консультации',
    phone: '8 (800) 333-00-16'
  },
  {
    title: 'Телефон доверия центра помощи пережившим сексуальное насилие «Сестры»',
    description: 'психологическая помощь по телефону',
    phone: '8 (499) 901-02-01'
  },
  {
    title: '«Помощь рядом»',
    description: 'психологическая помощь детям и подросткам онлайн',
    phone: '8 (812) 380-30-92'
  }
];

var tests = [
  {
    id: 0,
    title: 'Насколько крут твой парень?!',
    description: '',
  },
  {
    id: 1,
    title: 'Работа твоей мечты! Слишком хорошо, чтобы быть правдой?',
    description: '',
  },
  {
    id: 2,
    title: 'Крепки ли Ваши отношения?'
  },
  {
    id: 3,
    title: 'Насколько тебя принимают сверстники?'
  }
];


