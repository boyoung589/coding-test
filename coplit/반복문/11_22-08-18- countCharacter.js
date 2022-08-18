/*
    countCharacter
    문제
    문자열과 문자를 입력받아 문자열에서 문자(letter)가 등장하는 횟수를 리턴해야 합니다.

    입력
    인자 1 : str
    string 타입의 문자열
    인자 2 : letter
    string 타입의 문자
    letter.length는 1
    출력
    number 타입을 리턴해야 합니다.
    주의 사항
    반복문(for)문을 사용해야 합니다.
    빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.
    
    입출력 예시

    let output = countCharacter('I am a hacker', 'a');
    console.log(output); // --> 3
*/

//test_1
function countCharacter(str, letter) {
    // TODO: 여기에 코드를 작성합니다.
    // 반복문을 통해 인덱스 하나씩 돌아가면서
    let count = 0;
    for(let i = 0; i < str.length; i++){
      str[i] === letter ? count++ : i;
    } return count;
}

//test_2
function countCharacter(str, letter) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 0;
    for(let i=0; i<str.length; i++){
      str[i] === letter ? count++ : count
    }
    return count;
  }