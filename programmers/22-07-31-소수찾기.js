/*
    소수 찾기
    문제 설명
    1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

    소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
    (1은 소수가 아닙니다.)

    제한 조건
    n은 2이상 1000000이하의 자연수입니다.
    입출력 예
    n	result
    10	4
    5	3
    입출력 예 설명
    입출력 예 #1
    1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

    입출력 예 #2
    1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

//test1 => 답은 맞지만 효율성 시간초과
function solution_1(n){
    let arr = 1;
    //소수: 1과 자기 자신으로만 나뉜다 약수가 2개.
    //리턴값은 소수의 갯수.
    //2는 무조건 소수.
    // if(n === 2) return 1; 
    //n까지 올라가면서 소수인지 판별 될 수 i
    //i의 제곱근까지 올라가면서 i가 소수인지 판별할 수 j
    for(let i = 3; i<= n ; i++){
        //n을 i로 나누어 떨어지면 약수 => pass
        //떨어지지 않으면 arr에 추가
        //arr은 약수의 집합.
        //console.log('아이', i);
        let memo = 0;
        for(let j = 2; j <= Math.floor(Math.sqrt(i)); j++){
            //console.log('제이범위', Math.floor(Math.sqrt(i)))
            //하나라도 나눠 떨어지는 것이 있으면 i는 소수가 아님.
            //console.log('제이', j);
            if( i % j === 0){
              //console.log('아이',i,'제이',j)
              //console.log('아이나누기 제이', i % j)
              memo+=1;
              continue;
            }
            //console.log('아이',i,'제이', j,'메모', memo)
        }
        //console.log('아이',i, '메모', memo)
        memo === 0 ? arr++ : memo;
        //console.log('어레이', arr);
    }
    return arr;
}

/*
    에라토스테네스의 체: 모든 자연수는 소수들의 곱으로 표현된다.
    입력 받은 숫자까지의 정수 중 소수의 개수를 구할 때 유용
*/

//test2 => On*2
function solution_2(n){
    /*
        에라토스테네스의 체
        1. 이차원배열을 생성하여 값을 초기화한다
        2. 2부터 시작해서 특정 숫자의 자기 자신을 제외한
            배수에 해당하는 숫자를 모두 지운다.
        3. 이미 지워진 숫자는 건너뛴다.
        4. 남은 숫자는 소수.
    */
    // 소수인지 저장할 수 있는 배열 선언
    // 0, 1은 소수가 아니므로 0으로 만든다
    let arr = new Array(n+1).fill(1).fill(0, 0 , 2);
    // 0, 1은 소수가 아니므로 0으로 만든다
 
    //console.log('초기 이차배열설정', arr)
    //2부터 자기자신을 제외한 배수를 지운다
    
    for(let i = 2; i <= n; i++){
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(arr[i] === 0){
                continue;
            }
            if(i !== j && i % j === 0){
                arr[i] = 0;
                //console.log(arr)
            }
        }
    }
    return arr.reduce((acc, cur) => acc+cur,0)
}

function solution_3(n){
    /*
        에라토스테네스의 체
        1. 이차원배열을 생성하여 값을 초기화한다
        2. 2부터 시작해서 특정 숫자의 자기 자신을 제외한
            배수에 해당하는 숫자를 모두 지운다.
        3. 이미 지워진 숫자는 건너뛴다.
        4. 남은 숫자는 소수.
    */
    // 소수인지 저장할 수 있는 배열 선언
    let count = 0;
    let arr = [];
    for(let i = 2; i <= n; i++){
        arr[i] = i;
        //console.log(arr)
    }
    for(let i = 2; i<= n; i++){
        if(arr[i] === 0) continue;
        for(let j = i + i; j <= n; j+=i){
            arr[j] = 0;
        }
    }
    //console.log(arr)
    for(let i = 2; i < arr.length; i++){
        arr[i] !== 0 ? count++ : count;
    }
    return count;
}