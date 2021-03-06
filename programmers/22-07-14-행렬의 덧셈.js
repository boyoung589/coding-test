// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i<arr1.length; i++){
        let memo=[];
        for(let j=0; j<arr1[i].length; j++){
            memo.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(memo);
    }
    return answer;
}

function solution2(arr1, arr2){
    arr1.map((cur1, idx1) => {
      return cur1.map((cur2, idx2) => {
        return cur2 + arr2[idx1][idx2]
      })
    })
}
// let arr1_1 = [[1,2],[2,3]];
// let arr2_1 = [[3,4],[5,6]];
// let arr3 = [];
// console.log('arr1_1[0]', arr1_1[0]) //'arr1_1[0]' [ 1, 2 ]
// console.log('arr1_1[0][0]', arr1_1[0][0]) //'arr1_1[0][0]' 1
// console.log('arr2_1[0][0]', arr2_1[0][0]) //'arr2_1[0][0]' 3
// console.log('arr1_1[0][1]', arr1_1[0][1]) //'arr1_1[0][1]' 2
// console.log('arr2_1[0][1]', arr2_1[0][1]) //'arr2_1[0][1]' 4

// arr3.push(arr1_1[0][0]+arr2_1[0][0])
// console.log('arr3',arr3) //'arr3' [ 4 ]
// arr3.push(arr1_1[0][1]+arr2_1[0][1])
// console.log('arr3',arr3) //'arr3' [ 4, 6 ]

// arr3[1][0]=arr1_1[1][0]+arr2_1[1][0]
// console.log('arr3',arr3) //'arr3' [ 4, 6 ]
// arr3[0][1]=arr1_1[0][1]+arr2_1[0][1]
// console.log('arr3',arr3) //'arr3' [ 4, 6 ]
// let arr5=[];
// for(let i=0; i<arr1_1.length; i++){
//   let arr4=[];
//   for(let j=0; j<arr1_1[i].length; j++){
//     arr4.push(arr1_1[i][j]+ arr2_1[i][j])
//     console.log('arr4', arr4)
//     //'arr4' [ 4 ]
//     //'arr4' [ 4, 6 ]
//     //'arr4' [ 7 ]
//     //'arr4' [ 7, 9 ]
//   }
//   arr5.push(arr4);
//   console.log(arr5)
//    [ [ 4, 6 ] ]
//    [ [ 4, 6 ], [ 7, 9 ] ]
//    [ [ 4, 6 ], [ 7, 9 ] ]
// }
//
