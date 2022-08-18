/*
    makeMultiplesOfDigit
    문제
    수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 정수 (num >= 0) 이상의 정수)
    출력
    string 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    숫자(number string) 사이의 구분은 없습니다. ('3691215')
    3의 배수가 없을 경우, 빈 문자열을 리턴해야 합니다.
    
    입출력 예시

    let output = makeMultiplesOfDigit(7);
    console.log(output); // --> "36"

    output = makeMultiplesOfDigit(19);
    console.log(output); // --> "369121518"
*/
//test_1
function makeMultiplesOfDigit_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    // Math.floor()로 num/3 해서 출력할 값의 갯수 파악
    // let n = 0;
    // let i = 1;
    // let str = ''
    // for(i = 1; i <= Math.floor(num/3); i++ ) {
    //   n =  3 * i;
    //   str = str + `${n}`
    // }
    // return str
    let answer = '';
    for(let i=1; i<=num; i++){
      i % 3 ? i = i : answer += i;
    }return answer;
}

//test_2
function makeMultiplesOfDigit(num) {
    // TODO: 여기에 코드를 작성합니다.
    let str = ''
    for(let i=3; i<=num; i+=3){
      str+=`${i}`
    }
    return str;
}