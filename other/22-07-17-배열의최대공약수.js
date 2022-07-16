// let arr = [10,20,15,30] // 5
// 배열의 최대공약수를 구하는 로직을 짜시오.

/*
* 유클리드 호제법 정리
    a>b일 때
    a / b = 나머지_0(a%b)
    b / 나머지_0(a%b) = 나머지_1
    나머지_0 / 나머지_1 = 나머지_2
    ...
    나머지_m / 나머지_n = 0
    나머지가 0이 될 때까지 반복 => 나머지_n은 최대공약수
*/

const gcd = (m, n) => {
    return m % n === 0 ? n : gcd(n, m%n);
};

let arr = [10,20,15,30];

const arrGcd = (array) => {
    let num = array[0];
    for(let i = 1; i< array.length; i++){
        num = gcd(num, array[i]);
    }
    return num;
};

console.log('배열의 최대공약수', arrGcd(arr)) //'배열의 최대공약수' 5

//유클리드 개념 공부 복습 필수!!!