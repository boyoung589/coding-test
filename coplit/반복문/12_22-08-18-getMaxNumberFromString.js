/*
    getMaxNumberFromString
    문제
    숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

    입력
    인자 1 : str
    string 타입의 숫자 문자열
    출력
    string 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    str.split 사용은 금지됩니다.
    빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
    
    입출력 예시

    let output = getMaxNumberFromString('53862');
    console.log(output); // --> '8'

    output = getMaxNumberFromString('4321');
    console.log(output); // --> '4'
*/

//test_1
function getMaxNumberFromString_1(str) {
    // TODO: 여기에 코드를 작성합니다.
    // 반복문을 통해 인덱스를 개별 숫자로 구분
    // 각 숫자들을 비교해서 가장 큰 숫자만 남긴다.
    
    let max='';
    for(i=0; i<str.length-1; i++){
      Number(str[i]) > Number(str[i+1]) ? max=str[i] : max = str[i+1];
    } return str.length === 0 ? '0' : max;
}

//test_2
function getMaxNumberFromString_2(str) {
    // TODO: 여기에 코드를 작성합니다.
    let max = 0;
    for(let i=0; i<str.length; i++){
      str[i]/1 > max ? max=str[i]/1 : max;
    }
    return `${max}`;
}
