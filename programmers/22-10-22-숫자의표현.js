/**
 * 숫자의 표현
문제 설명
Finn은 요즘 수학공부에 빠져 있습니다. 수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15
자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.

제한사항
n은 10,000 이하의 자연수 입니다.
입출력 예
n	result
15	4
입출력 예 설명
입출력 예#1
문제의 예시와 같습니다.
 */

// 효율성 5번 1개 통과안됨
function solution_1(n) {
  let count = 0;
  for(let i=1; i<=n; i++){ // 1부터 n까지 돌릴 첫번째
      let num = n;
      for(let j=i; j<=n; j++){ // 두번째 빼는 숫자부터 n까지
          num -= j;
          if(num <= 0){
              if(num === 0){
                  count++;
                  break;
              }
              break;
          }
      }
  }
  return count;
}

function solution_2(n) {
  let count = 0;
  for(let i=1; i<=n; i++){ // 1부터 n까지 돌릴 첫번째
      let num = 0;
      for(let j=i; j<=n; j++){ // 두번째 빼는 숫자부터 n까지
          num += j;
          if(num >= n){
              if(num === n){
                  count++;
                  break;
              }
              break;
          }
      }
  }
  return count;
}
// for문 빠져나오는 기준을 n에서 뺀 것은 효율성 통과가 안되는데 0부터 더한 것은 통과가 된다. 왜인지 모르겠다