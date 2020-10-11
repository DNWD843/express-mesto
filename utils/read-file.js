const fsPromises = require('fs').promises;
/**
 * @module
 * @description Функция чтения файла.<br>Читает файл, возвращает промис с файлом в формате JSON
 * @param {String} pathUrl - путь до файла, который нужно прочитать
 * @returns {Promise}
 * @since v.1.0.0
 */
module.exports = (pathUrl) => fsPromises.readFile(pathUrl, { encoding: 'utf8' })
  .then((file) => JSON.parse(file));
