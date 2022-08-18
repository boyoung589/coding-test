/*
    characterAndNumber
    문제
    문자열을 입력받아 각 문자(letter) 뒤에 해당 문자의 인덱스가 추가된 문자열을 리턴해야 합니다.

    입력
    인자 1 : word
    string 타입의 단어
    출력
    string 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

    입출력 예시

    let output = characterAndNumber('hello');
    console.log(output); // --> 'h0e1l2l3o4'

    output = characterAndNumber('cup');
    console.log(output); // --> 'c0u1p2'
*/

//test_1
function characterAndNumber_1(word) {
    // TODO: 여기에 코드를 작성합니다.
    // 인덱스 돌면서 
    let Guryu = '';
    for(i=0; i< word.length; i++){
      Guryu = Guryu + word[i] + i
    } return Guryu;
}

//test_2
function characterAndNumber_2(word) {
    // TODO: 여기에 코드를 작성합니다.
    let str = '';
    for(let i=0; i<word.length; i++){
      str+=word[i]+i
    }
    return str;
}