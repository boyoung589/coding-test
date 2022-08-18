/*
    문제 설명
    자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

    제한사항
    n은 1 이상 100,000,000 이하인 자연수입니다.
    입출력 예
    n	result
    45	7
    125	229
    입출력 예 설명
    입출력 예 #1

    답을 도출하는 과정은 다음과 같습니다.
    n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
    45	1200	0021	7
    따라서 7을 return 해야 합니다.
    입출력 예 #2

    답을 도출하는 과정은 다음과 같습니다.
    n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
    125	11122	22111	229
    따라서 229를 return 해야 합니다.
*/

//test_1
function solution_1(n) {
    let trans3 = (n).toString(3).split('');
    let memo = [];
    for(let i=0; i<trans3.length; i++){
        memo.unshift(trans3[i])
    }
    return Number.parseInt(memo.join(''),3)
}

//test_2
function solution_2(n) {
    let threeReverse = n.toString(3).split('').reverse().join('');
    let convertToTen = parseInt(threeReverse, 3);
    return convertToTen;
}

//https://www.notion.so/289f9634b43245f2b7d5fa829f21f82d?v=b74c009505f144f4ab6636864d829dc5&p=1a7d6a5a464a465aac799cb791889340&pm=c
//성능 테스트를 해보니 reverse메소드를 쓰는 편이 더 빠른 것 같다