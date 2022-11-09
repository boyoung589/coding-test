/**행렬의 곱셈
문제 설명
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
곱할 수 있는 배열만 주어집니다.
입출력 예
arr1	arr2	return
[[1, 4], [3, 2], [4, 1]]	[[3, 3], [3, 3]]	[[15, 15], [15, 15], [15, 15]]
[[2, 3, 2], [4, 2, 4], [3, 1, 4]]	[[5, 4, 3], [2, 4, 1], [3, 1, 1]]	[[22, 22, 11], [36, 28, 18], [29, 20, 14]]
 */
function solution(arr1, arr2) {
  let column = arr1.length;
  let row = arr2[0].length;
  //정답 배열 길이 초기세팅
  let answer = [];
  arr1.forEach(el => answer.push(Array(row).fill(0)));
  
  for(let i=0; i<column; i++){
      // 정답의 행
      for(let j=0; j<row; j++){
          // 정답의 열
          let memo = 0;
          for(let m=0; m<arr1[0].length; m++){
              memo += arr1[i][m] * arr2[m][j]; 
          }
          answer[i][j] = memo;
      }
  }
  return answer;
}
// 행렬 곱셈하는 법 잊고있었는데 너무 오랜만이라 어색하고 신기하다