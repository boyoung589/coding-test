/*
    시저 암호
    문제 설명
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

    제한 조건
    공백은 아무리 밀어도 공백입니다.
    s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
    s의 길이는 8000이하입니다.
    n은 1 이상, 25이하인 자연수입니다.
    입출력 예
    s	n	result
    "AB"	1	"BC"
    "z"	1	"a"
    "a B z"	4	"e F d"
*/

function solution(s, n) {
    let memo = '';
    //인덱스 대조군 배열만듦
    let english = 'abcdefghijklmnopqrstuvwxyz'.split('');
    console.log(english, english.length);
    //문자열을 인덱스로 변환하여 바꾸기 위해 배열로 만든다
    let arr = s.split('');
    console.log('arr', arr)
    //공백이면 그대로 공백으로 저장
    //소문자, 대문자 변환값을 대조하기 위해 s 모두 소문자로 만들고 시작
    //인덱스에 따른 +1값 내보내기
    //s와 소문자 변환이 같으면 그대로 다르면 마지막에 대문자로 변환하여 저장
    for(let i = 0; i < arr.length; i++){
        let alphabet = arr[i].toLowerCase();
        let index = english.indexOf(alphabet);
        //console.log('알파벳-인덱스',alphabet, index);
        if(index === -1) {
            memo += ' ';
            //console.log('index', index, 'memo1',memo)
        } else if(index + n > 25) {
            let result = needUpperCase(arr[i], alphabet, english[index + n - 26])
            
            memo += result;
            //console.log('memo2',memo)
        } else {
            let result = needUpperCase(arr[i], alphabet, english[index + n])
            memo += result;
            //console.log('memo3',memo)
        }
    }
    
    
    return memo;
    
    //아스키코드 사용하는 방법도 있을듯
}
function needUpperCase(string, alphabet, result) {
    if(string === alphabet){return result}
    return result.toUpperCase();
}