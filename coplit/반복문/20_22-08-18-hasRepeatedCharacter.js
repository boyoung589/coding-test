/*
    hasRepeatedCharacter
    문제
    문자열을 입력받아 해당 문자열에 중복된 문자(letter)가 존재하는지 여부를 리턴해야 합니다.

    입력
    인자 1 : str
    string 타입의 문자열
    출력
    boolean 타입을 리턴해야 합니다.
    주의 사항
    이중 반복문(double for loop)을 사용해야 합니다.
    빈 문자열을 입력받은 경우에는 false을 리턴해야 합니다.

    입출력 예시

    let output = hasRepeatedCharacter('abcdefg');
    console.log(output); // --> false

    output = hasRepeatedCharacter('codestates');
    console.log(output); // --> true

    output = hasRepeatedCharacter('');
    console.log(output); // --> false
*/

//test_1
function hasRepeatedCharacter_1(str) {
    // TODO: 여기에 코드를 작성합니다.
    // word[0]=> 바깥
    // word[1]=> 안쪽
    let i;
    let j;
    
    for(i=0; i<str.length; i++){
        for(j=i+1; j<str.length; j++){
            if(str[i]===str[j]){
            return true;
            } 
        } 
    } return false;
}

//test_2
function hasRepeatedCharacter_2(str) {
    // TODO: 여기에 코드를 작성합니다.
    let overlap = false;
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i]===str[j]){
            overlap = true;
            break;
            }
        }
        if(overlap){
            break;
        }
    }
    return overlap;
}

//test_3 overlap이란 변수 쓰기 싫어!!!
function hasRepeatedCharacter(str) {
    // TODO: 여기에 코드를 작성합니다.
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<str.length; j++){
            if(str[i]===str[j]){
            return true;
            }
        }
    }
    return false;
  }