//reverse()사용
function solution(n) {
    return String(n).split('').reverse().map((el) => Number(el));
};

//반복문 사용
function solution(n){
    let arr = [];
    let string = String(n).split('');
    console.log(string);
    for(let i of string){
        arr.unshift(Number(i))
    };
    return arr;
}

/*
  답 도출 시간 확인해보니 reverse 함수 사용시간이 훨씬 짧음.
  => 내장함수 사용하는 것이 꼭 나쁘진 않음을 확인할 수 있었다
*/
