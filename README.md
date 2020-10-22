# Проект Mesto фронтенд + бэкенд

License: Yandex.Praktikum<br>
Version: 1.1.0<br>
Author: Dmitry Neklyudov<br>

**Описание**<br>
Бэкенд учебного проекта Mesto в рамках онлайн-курса Яндекс.Практикум. 

**Технологии**<br>
- Node.js;
- Express.js;
- JSDoc3.

**Директории**<br>
`/public` — статика, полученная в результате билда <a href="https://dnwd843.github.io/mesto-react/">***фронтенд-приложения на Реакте***</a><br>
`/data` — JSON-файлы для временной эмуляции работы с базой данных<br>
`/routes` — папка с файлами роутера<br>  

**Запуск проекта**<br>
`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload
 
**Описание версий проекта**<br>

***Версия 1.0.2***<br>
Все роутеры объединены в корневой роутер rootRouter.

***Версия 1.0.1***<br>
Скорректированы обработчики ошибок в промисах контроллеров cards  и users, статус 404 и сообщение { "message": "Запрашиваемый ресурс не найден" } теперь возвращаются при обращении к несуществующему ресурсу любым методом

***Версия 1.0.0***<br>
Создан сервер, настроено 3 роута: /cards, /users, /users/id. Данные временно получаются из файлов cards.json и users.json.

**Документация**<br>
Посмотреть готовую документацию:<br>
 - скачайте проект на компьютер<br>
 - зайдите в папку *./documentation*<br>
 - откройте в браузере файл *index.html*<br>
