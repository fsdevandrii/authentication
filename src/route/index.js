// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Тут ввиводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  //res.render генерує нам HTML сторінку

  // сюди вводимо назву файлу з container
  res.render('index', {
    //   вказуємо назву контейнера
    name: 'index',
    //    вказуємо назву компонентів
    component: [''],
    // вказуємо назву сторінки
    title: 'Home page',

    //   ... сюди можна продовжувати добавляти потрібні технічні дані
    data: {},
  })
  // сюди виводимо JSON дані
})

// Підключіть файли роутів
const auth = require('./auth')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', auth)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router
