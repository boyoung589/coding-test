/*
    isPrime
    문제
    1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 수
    출력
    boolean 타입을 리턴해야 합니다.

    입출력 예시

    let output = isPrime(2);
    console.log(output); // --> true

    output = isPrime(6);
    console.log(output); // --> false

    output = isPrime(17);
    console.log(output); // --> true
    힌트
    자바스크립트 내장 객체인 Math를 활용해 불필요한 연산을 줄일 수 있습니다. (javascript square root 또는 자바스크립트 제곱근)
*/

//test_1
function isPrime_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    for(i=1; i<=num; i++){
      num % i === 0 ? count++ : count;
    }return count===1? false : count<3 ? true : false;
}
  
  // function isPrime(num) {
  //   // TODO: 여기에 코드를 작성합니다.
   
  //   for (let i = 2; i <= num; i++)
  //     if (num % i === 0 && i !== num) 
  //       return false;
  //   return num === 1 ? false : true;
  // }

//test_2
function isPrime(num) {
    // TODO: 여기에 코드를 작성합니다.
    if(num === 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
      if(num % i === 0) return false;
    }
    return true;
}