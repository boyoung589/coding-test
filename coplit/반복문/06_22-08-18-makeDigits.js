/*
    makeDigits
    문제
    수(num)를 입력받아 1부터 num까지의 정수로 구성된 문자열을 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 정수 (num >= 1)
    출력
    string 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    숫자(number string) 사이의 구분은 없습니다. ('1234567')
    
    입출력 예시

    let output = makeDigits(5);
    console.log(output); // --> "12345"

    output = makeDigits(7);
    console.log(output); // --> "1234567"
*/

//test_1
function makeDigits_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    let str='';
    for(i=1; i<=num; i++){
      str = str + String(i);
    }return str;
}

//test_2
function makeDigits_2(num) {
    // TODO: 여기에 코드를 작성합니다.
    let str = '';
    for(let i=1; i<=num; i++){
      str+=`${i}`;
    }
    return str;
  }