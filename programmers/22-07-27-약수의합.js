
function solution(n) {
    let answer = 0;
    if(n < 2) return n;
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            answer += i;
            if(i !== n/i) answer += n/i;
        }
    }
    return answer;
}
// 반만 돌리기 위해 Math.sqrt()사용시 4처럼 제곱근이 약수인 수 고려하기
// 성능비교 https://www.notion.so/Math-sqrt-vs-4692588df9424826a68b4c28d328a940