# Проект Mesto фронтенд + бэкенд

License: Yandex.Praktikum<br>
Version: 1.2.0<br>
Author: Dmitry Neklyudov<br>

**Описание**<br>
Бэкенд учебного проекта Mesto в рамках онлайн-курса Яндекс.Практикум. 

**Технологии**<br>
- Node.js;
- Express.js;
- MongoDB, mongoose, Compass;
- Docker;
- JSDoc3.

**Запуск проекта**<br>
1. `docker-compose up mongodb-container` (for Linux: `sudo docker-compose up mongodb-container`) -    
запускает базу данных MongoDB из Docker    
2. `npm run start` — запускает сервер    
  или     
   `npm run dev` — запускает сервер с hot-reload     
3. `docker-compose down mongodb-container` (for Linux: `sudo docker-compose down mongodb-container`) -     
останавливает базу данных MongoDB из Docker    
***Опционально:*** `npm run jsdoc:build` - формирует документацию и собирает ее в папке documentation     
 
**Описание версий проекта**<br>
***Версия 1.2.0***    
MongoDB запускается из контейнера Docker.    

***Версия 1.1.1***        
Исправлены замечания ревью        

***Версия 1.1.0***<br>
Добавлен функционал создания пользователя, редактирования профиля и аватара пользователя, создания и удаления
карточек, установки/снятия лайков.

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
