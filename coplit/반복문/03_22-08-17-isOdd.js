/*
    isOdd
    문제
    수를 입력받아 홀수인지 여부를 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 정수
    출력
    boolean 타입을 리턴해야 합니다.
    주의 사항
    반복문(while)문을 사용해야 합니다.
    for문 사용은 금지됩니다.
    나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
    0은 짝수로 간주합니다.

    입출력 예시

    let output = isOdd(17);
    console.log(output); // --> true

    output = isOdd(-8);
    console.log(output); // --> false
*/

//test_1
function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    num = Math.abs(num)
    while(num > 0){
      num = num - 2;
    }
    if(num === 0){
        return false;
    } return true;
}

//test_2
function isOdd(num) {
    // TODO: 여기에 코드를 작성합니다.
    //원본을 해치지 않기 위해 원본 숫자 복사
    let copy = num;
    copy > 0 ? copy : copy*=-1
    while(copy > 1){
      copy-=2
    }
    return copy === 0? false : true;
}