module.exports = function toReadable(number) {
  const examplesObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  const firstDigit = String(number)[0];
  const secondDigit = String(number)[1];
  const lastDigit = secondDigit + number % 10;
  if (number >= 0 && number <= 19) {
    return examplesObj[number];
  } else if (number.toString().length <= 2 && number > 19 && number % 10 === 0) {
    return `${examplesObj[number]}`;
  } else if (number.toString().length <= 2 && number > 20 && number % 10 !== 0) {
    return `${examplesObj[firstDigit + 0]} ${examplesObj[number % 10]}`;
  } else if (number.toString().length <= 3 && (lastDigit <= 19 && lastDigit >= 11)) {
    return `${examplesObj[firstDigit]} hundred ${examplesObj[lastDigit]}`
  }
  else if (number.toString().length <= 3 && lastDigit === '00') {
    return `${examplesObj[firstDigit]} hundred`
  }
  else if (number.toString().length <= 3 && secondDigit === '0') {
    return `${examplesObj[firstDigit]} hundred ${examplesObj[number % 10]}`
  }
  else if (number.toString().length <= 3 && number % 10 === 0) {
    return `${examplesObj[firstDigit]} hundred ${examplesObj[secondDigit + 0]}`
  }
  else if (number.toString().length <= 3) {
    return `${examplesObj[firstDigit]} hundred ${examplesObj[secondDigit + 0]} ${examplesObj[number % 10]}`
  }
}

