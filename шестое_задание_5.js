const expo = (a,b) => {
  a = +prompt('Введите число', 3);
  b = +prompt('Введите степень', 4);
  return console.log(Math.pow(a,b));
  
}

expo();