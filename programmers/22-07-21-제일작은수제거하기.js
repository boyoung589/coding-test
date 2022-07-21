function solution(arr) {
    //arr.length는 1 이상으로 주어짐
    //arr.length가 0이면 -1리턴
    //arr을 내림차순 정렬 뒤에서 하나 빼주기(pop)
    // test 1 => 정렬되어 오류나는 듯!
    //console.log('원본배열', arr)
    //arr.sort((a,b) => b-a);
    //arr.pop();
    //console.log('제거후배열', arr)
    //return arr.length === 0 ? [-1] : arr;
    
    //정렬문제로 에러난다고 가정 원본배열의 순서 유지하기
    //가장 작은 수의 인덱스를 알아내서 해당 인덱스 제거 => arr.splice()
    //test 2
    if (arr.length === 1) return [-1];
    let min = arr[0];
    for(let i of arr){
        min > i ? min = i : min;
    }
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    return arr;
};