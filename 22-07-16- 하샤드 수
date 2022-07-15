// 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

//제한 조건
//x는 1 이상, 10000 이하인 정수입니다.
//입출력 예
//arr	return
//10	true
//12	true
//11	false
//13	false

//reduce 복습한 거 써보기!!

function solution(x) {
    //let num = x.toString().split('');
    //let plus = num.reduce((acc, cur) => Number(acc) + Number(cur),0);
    //return x % plus === 0 ? true : false;
     
    //number타입 x의 각 자리 숫자를 분리 용으로 split을 사용해야한다 - string타입변환필요
    //split 결과의 배열의 문자 하나하나를 숫자로 변환하여 누적 합을 구해야한다 - reduce
    //x 나누기 reduce결과 0이면 트루, 아니면 폴스
    const numToString = String(x).split('');
    const sum = numToString.reduce((acc, cur) => (acc + Number(cur)), 0);
    return !Boolean(x % sum);
}
