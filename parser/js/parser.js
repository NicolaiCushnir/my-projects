const fs = require('fs');

// Читаем JSON-файл
fs.readFile('data.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Ошибка чтения файла:', err);
    return;
  }
  
  // Парсим JSON
  try {
    const parsedData = JSON.parse(data);
    console.log('Результат парсинга:', parsedData);
  } catch (error) {
    console.error('Ошибка парсинга JSON:', error);
  }
});
