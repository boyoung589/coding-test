/*
    replaceAll
    문제
    문자열과 두 개의 문자(from, to)를 입력받아, 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야 합니다.

    입력
    인자 1 : str
    string 타입의 문자열
    인자 2 : from
    string 타입의 문자
    from.length는 1
    인자 3 : to
    string 타입의 문자
    to.length는 1
    출력
    string 타입을 리턴해야 합니다.

    입출력 예시

    let output = replaceAll('loop', 'o', 'e');
    console.log(output); // --> 'leep'
*/

//test_1
function replaceAll(str, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    // 조건: str의 인덱스가 from인지 확인
    // 맞으면 to로 변환, 아니면 그대로
    // 새로운 문자열 변수에 넣어준다!
    let word='';
    for(i=0; i < str.length; i++){
      str[i] === from ? word = word + to : word = word + str[i];
    } return word;
}

//test_2
function replaceAll(str, from, to) {
    // TODO: 여기에 코드를 작성합니다.
    let word = '';
    for(let i=0; i<str.length; i++){
      str[i] !== from ? word+=str[i] : word+=to;
    }
    return word;
}