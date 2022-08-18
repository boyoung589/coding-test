/*
    makeMultiplesOfDigit2
    문제
    두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

    입력
    인자 1 : num1
    number 타입의 정수 (num1 >= 0)
    인자 2 : num2
    number 타입의 정수 (num2 >= 0)
    출력
    number 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    num1이 num2보다 작지 않을 수도 있습니다.
    0은 2의 배수가 아니라고 가정합니다.
    
    입출력 예시

    let output = makeMultiplesOfDigit2(8, 12);
    console.log(output); // --> 3

    output = makeMultiplesOfDigit2(12, 8);
    console.log(output); // --> 3

    output = makeMultiplesOfDigit2(1, 3);
    console.log(output); // --> 1

    output = makeMultiplesOfDigit2(0, 0);
    console.log(output); // --> 0

    output = makeMultiplesOfDigit2(2, 2);
    console.log(output); // --> 1
*/

//test_1
function makeMultiplesOfDigit2_1(num1, num2) {
    let count1=0;
    let count2=0;
    // let max;
    // let min;
    // if(num1> num2){
    //   max= num1;
    //   min= num2;
    // } else{
    //   max = num2;
    //   min = num1;
    // }
    
    for(i=1; i <= Math.max(num1, num2); i++){
      i % 2? i=i : count1++;
    }
  
    for(i=1; i < Math.min(num1, num2); i++){
      i % 2? i=i : count2++;
    }
  
    return count1-count2;
  
}
  // 영현님 방법!!
  // function makeMultiplesOfDigit2(num1, num2) {
  //   // TODO: 여기에 코드를 작성합니다.
  //   /*
  //   1. 작은 값 판별
  //   2. i에다가 작은 값을 대입
  //   3. i부터 큰 값까지 반복문
  //     2로 나눈 나머지가 0이고, 0이 아니면 카운트++;
  //   */
  //   let count = 0;
  //   for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++)
  //     i % 2 === 0 && i !== 0 ? count++ : +i;
  //   return count;
  // }
  // // i === 0 ? +i : i % 2 ? +i : count++;

//test_2
function makeMultiplesOfDigit2(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let count = 0;
    for(let i=min; i<=max; i++){
      i === 0 ? null : i % 2 === 0 ? count++ : count;
    }
    return count;
}