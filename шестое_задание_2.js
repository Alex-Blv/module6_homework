const yourDigit = +prompt('Введите ваше число', 38);

function getSimple(num) {
    if (!Number.isInteger(num) || yourDigit < 2 && num > 1000) return "Данные неверны"; // Проверяем на целочисленность, и диапазон от 2 до 1000
    let k = Math.sqrt(num);
    for (let i = 2; i <= k; i++)
        if (num % i === 0) return "Непростое число";
    return "Простое число";
}

console.log(getSimple(yourDigit)); 