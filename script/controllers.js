var currentTest;

app.controller('Main', function () {

  var self = this;
  self.tests = tests;

  self.testChoice = function (id, status) {
    if (status === 'open') {
      currentTest = id;
    } else {
      currentTest = null;
    }
    console.log(currentTest);
    self.isCurrentTest(id);
    return currentTest;
  };

  self.isCurrentTest = function (id) {
    return currentTest === id;
  };

});

app.controller('Test', function () {
  this.currentTest = currentTest;
  this.tests = tests;
});

app.controller('Help', function () {
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
    img: 'img/bg_test1.jpg',
    description: 'Хочешь узнать, повезло ли тебе с бойфрендом, или ты достойна большего? Наш тест даст ответ на эти вопросы, а после прохождения ты получишь парочку полезных советов.'
  },
  {
    id: 1,
    title: 'Работа твоей мечты! Слишком хорошо, чтобы быть правдой?',
    img: 'img/bg_test2.jpg',
    description: ''
  },
  {
    id: 2,
    title: 'Крепки ли Ваши отношения?',
    img: 'img/bg_test3.jpg',
    description: ''
  },
  {
    id: 3,
    title: 'Насколько тебя принимают сверстники?',
    img: 'img/bg_test4.jpg',
    description: ''
  }
];


