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
Запустите сервер базы данных MongoDB:<br>
- если у вас установлена MongoDB, используйте команду `mongod`.     
- если у вас не установлена MongoDB, но установлены Docker и Docker-Compose, используйте команды:      
  - Windows и MacOS: `docker-compose up mongodb-container`      
  - Linux: `sudo docker-compose up mongodb-container`      
- для запуска MongoDB из Docker в фоновом режиме используйте команды:     
  - Windows и MacOS: `docker-compose up -d mongodb-container`    
  - Linux: `sudo docker-compose up -d mongodb-container`    

Запустите express-сервер:<br>
- `npm run start` — запускает express-сервер приложения    
  или     
- `npm run dev` — запускает express-сервер приложения с hot-reload     

Для остановки сервера MongoDB:<br>
- используйте сочетание клавиш `Ctrl+C` - если запускали командой `mongod`     
- используйте сочетание клавиш `Ctrl+C` (Windows, MacOS, Linux) - если запускали из Docker     
- если запускали из Docker с флагом `-d` используйте команды:      
  - Windows и MacOS: `docker-compose stop`     
  - Linux: `sudo docker-compose stop`      

Для остановки express-сервера приложения используйте сочетание клавиш `Ctrl+C`    
  
Команда `npm run jsdoc:build` - формирует документацию и собирает ее в папке documentation     
 
**Описание версий проекта**<br>
***Версия 1.2.0***    
Реализована возможность запуска БД MongoDB из контейнера Docker.    

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
