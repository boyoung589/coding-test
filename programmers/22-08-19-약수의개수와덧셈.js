/*
    문제 설명
    두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

    제한사항
    1 ≤ left ≤ right ≤ 1,000
    입출력 예
    left	right	result
    13	17	43
    24	27	52
    입출력 예 설명
    입출력 예 #1

    다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
    수	약수	약수의 개수
    13	1, 13	2
    14	1, 2, 7, 14	4
    15	1, 3, 5, 15	4
    16	1, 2, 4, 8, 16	5
    17	1, 17	2
    따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
    입출력 예 #2

    다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
    수	약수	약수의 개수
    24	1, 2, 3, 4, 6, 8, 12, 24	8
    25	1, 5, 25	3
    26	1, 2, 13, 26	4
    27	1, 3, 9, 27	4
    따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.
*/

//test_1
function solution_1(left, right) {
    // 약수가 짝수인 수 저장변수
    let even = 0;
    // left-right까지 반복
    for(let i=left; i<=right; i++){
        divisor(i)%2 === 0 ? even+=i : even-=i
    }
    return even;
}
//약수의 갯수 구하는 함수
function divisor(n){
    //약수를 메모할 변수
    let memo = 0;
    for(let i=1; i<Math.sqrt(n); i++){
        n%i === 0 ? memo++: memo;
    }
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? (memo*2+1) : memo*2;
}

//test_2 
// 약수의 갯수만 구하면 되므로 제곱근이 정수인지 아닌지만 확인한다.
// 정수인 경우 약수의 갯수는 홀수, 아닌 경우 짝수. 
function solution_2(left, right){
    let memo = 0;
    for(let i=left; i<=right; i++){
        Math.sqrt(i)===Math.floor(Math.sqrt(i)) ? memo-=i : memo+=i;
    }
    return memo;
}