/*
    listPrimes
    문제
    2 이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 정수 (num >= 2)
    출력
    string 타입을 리턴해야 합니다.
    2-3-5-7의 형식으로 리턴해야 합니다.
    주의 사항
    이중 반복문(double for loop)을 사용해야 합니다.

    입출력 예시

    let output = listPrimes(2);
    console.log(output); // --> '2'

    output = listPrimes(6);
    console.log(output); // --> '2-3-5'

    output = listPrimes(18);
    console.log(output); // --> '2-3-5-7-11-13-17'
    힌트
    반복문의 break 문에 대해서 학습합니다. (javascript loop break)
*/
//test_1
function listPrimes_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    /*
    매개변수로 주어진 num까지의 소수를 반환해야 함. 
    소수가 2개 이상일 경우 소수 사이에 하이픈을 넣어야 함. 
    스트링 타입 리턴. 
    2부터 num까지의 소수
    바깥 for 문 : 3~num까지의 숫자를 돌리고, 각 숫자를 x라고 할때
    안쪽 for 문 : x가 소수인지 판별.
    */
    let answer = '2';
    let i, j;
    for (i = 3; i <= num; i += 2)
    {
      for (j = 3; j <= i; j++)
        if (i % j === 0) break;
      i === j ? answer += String('-' + i) : answer;
    }
    return answer;
}

//test_2 전역변수 늘리기 싫어!!
function listPrimes_2(num) {
    // TODO: 여기에 코드를 작성합니다.
    let str = '';
    // 2~num까지의 숫자
    for(let j=2; j<=num; j++){
      // 숫자 j의 소수 판별식
      let isPrime = true;
        for(let i=2; i<=Math.sqrt(j); i++){
            if(j%i===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
        str+=`-${j}`
        }
    }
    return str.slice(1);
}

//test_3 slice 보기싫어!!!
function listPrimes_3(num) {
    // TODO: 여기에 코드를 작성합니다.
    let str = '2';
    // 2~num까지의 숫자
    for(let j=3; j<=num; j++){
    let isPrime=true;
        // 숫자 j의 소수 판별식
        for(let i=2; i<=Math.sqrt(j); i++){
            if(j%i===0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
        str+=`-${j}`
        }
    }
    return str;
}