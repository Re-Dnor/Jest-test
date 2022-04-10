// Эта функция переворачивает переданную строку
function string(str) {
  return str.split('').reverse().join('');
}

module.exports = string;