/*
    문자열 내 p와 y의 개수
    문제 설명
    대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

    예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

    제한사항
    문자열 s의 길이 : 50 이하의 자연수
    문자열 s는 알파벳으로만 이루어져 있습니다.
    입출력 예
    s	answer
    "pPoooyY"	true
    "Pyy"	false
    입출력 예 설명
    입출력 예 #1
    'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

    입출력 예 #2
    'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/
//test 1
function solution_1(s){
    let arr = s.toLowerCase().split('');
    let countP = 0;
    let countY = 0;
    for(let i of arr){
        i === 'p' ? countP++ : i === 'y' ? countY++ : arr;
    }
    return countP === countY ? true : false;
}

//test 2 reduce 연습용
function solution_2(s){
    let arr = s.toLowerCase().split('');
    let countP = 0;
    let countY = 0;
    arr.reduce((acc, cur) => {
        if(cur === 'p') countP++;
        if(cur === 'y') countY++
    }, 0)
    return countP === countY ? true : false;
}

//test 3
function solution_3(s){
    let arr = s.toLowerCase().split('');
    let plus = arr.reduce((acc, cur) => {
        if(cur === 'p') {
            acc++;
        }
        else if(cur === 'y') {
            acc--;
        }
        return acc;
    }, 0)
    return plus === 0 ? true : false;
}