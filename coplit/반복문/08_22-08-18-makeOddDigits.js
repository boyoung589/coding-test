/*
makeOddDigits
문제
수(num)를 입력받아 1을 포함하여 num개의 홀수로 구성된 문자열을 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 1)
출력
string 타입을 리턴해야 합니다.
주의 사항
반복문(while)문을 사용해야 합니다.
숫자(number string) 사이의 구분은 없습니다. ('13579')

입출력 예시

let output = makeOddDigits(3);
console.log(output); // --> "135"

output = makeOddDigits(5);
console.log(output); // --> "13579"
*/

//test_1
function makeOddDigits_1(num) {

    let result = '';
    i = 1;
    j = 1
    while( j <= num){
      j++;
      result = result + i;
      i= i+2;
    }return result;
  
}

//test_2
function makeOddDigits(num) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    let oddNum = 1;
    let str = '';
    while(count < num){
      str+=`${oddNum}`;
      count++;
      oddNum+=2;
    }
    return str;
}