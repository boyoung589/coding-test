/*
    sum
    문제
    수를 입력받아 0부터 해당 수까지의 합을 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 정수 (num >= 0)
    출력
    number 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.

    입출력 예시
    
    let output = sumTo(3);
    console.log(output); // --> 6
*/

//test_1
function sumTo_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result=0;
    for(let i = 0; i <= num; i++ ){
      result=result + i;
    } 
    return result;
}

//test_2
function sumTo(num) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0;
    for(let i=1; i<=num; i++){
      sum+=i
    }
    return sum;
}