const fs = require('fs');
const { parse, format } = require('date-fns');

// Чтение файла input.txt
const inputFilePath = 'input.txt';
const inputData = fs.readFileSync(inputFilePath, 'utf8').split('\n');

// Формируем массивы для IN и OUT записей
const inRecords = [];
const outRecords = [];

// Обработка данных
inputData.forEach((line) => {
  const [date, time, direction, passNumber] = line.split(' ');

  const dateFormatted = format(parse(date, 'yyyy-MM-dd', new Date()), 'dd.MM.yyyy');
  const newLine = `${dateFormatted} ${time} ${direction} ${passNumber}\n`;

  if (direction === 'IN') {
    inRecords.push(newLine);
  } else if (direction === 'OUT') {
    outRecords.push(newLine);
  }
});

// Запись в файлы
fs.writeFileSync('output_in.txt', inRecords.join(''));
fs.writeFileSync('output_out.txt', outRecords.join(''));
