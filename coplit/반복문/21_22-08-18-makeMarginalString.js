/*
    makeMarginalString
    문제
    문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

    입력
    인자 1 : str
    string 타입의 문자열
    출력
    string 타입을 리턴해야 합니다.
    주의 사항
    이중 반복문(double for loop)을 사용해야 합니다.
    str.slice, str.substr, str.substring 사용은 금지됩니다.
    빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.
    
    입출력 예시

    let output = makeMarginalString('abc');
    console.log(output); // --> 'aababc'

    output = makeMarginalString('flower');
    console.log(output); // --> 'fflfloflowfloweflower'

    output = makeMarginalString('');
    console.log(output); // --> ''
*/

//test_1
function makeMarginalString_1(str) {
    // TODO: 여기에 코드를 작성합니다.
    //[0][0~1][0~2][0~str.length-1]
    let i;
    let j;
    let word='';
    for(i=1; i<=str.length; i++){
        for(j=0; j<i; j++){
            word=word + str[j];
        }
    }return word;
}

//test_2
function makeMarginalString_2(str) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '';
    //총 str의 길이만큼 반복됨
    for(let i=0; i<str.length; i++){
      //1부터 i까지의 글씨를 넣기
        let memo = '';
        for(let j=0; j<=i; j++){
            memo+=str[j]
        }
        answer+=memo;
    }
    return answer;
}

//test_3 memo를 안쓸 수 있대!!!
function makeMarginalString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let answer = '';
    //총 str의 길이만큼 반복됨
    for(let i=0; i<str.length; i++){
      //1부터 i까지의 글씨를 넣기
        for(let j=0; j<=i; j++){
            answer+=str[j]
        }
    }
    return answer;
}
