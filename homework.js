const sumDigits = function(x){
  let size = x.toString().length;
  let sum = 0
  for (let i = 0; i < size; i++) {
    let digit = x % 10;
    sum += digit;
    x = Math.floor(x / 10); 
    
  }
  return sum
}

const luckyNumber = function (x) {
  let size = x.toString().length;
  let sum = 0
  for (let i = 0; i < size; i++) {
    let digit = x % 10;
    sum += digit * (i % 2 ? 1 : -1);;
    return sum

  }
}

let res = sumDigits(1234);
console.log(`res = ${res}`);
res = luckyNumber(123871); // 1+ 3+ 7 === 2 + 8 + 1
console.log(res ? 'lucky' : 'unlucky');