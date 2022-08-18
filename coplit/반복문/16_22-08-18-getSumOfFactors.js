/*
    getSumOfFactors
    문제
    수를 입력받아 약수(factor)의 합을 리턴해야 합니다.

    입력
    인자 1 : num
    number 타입의 수
    출력
    number 타입을 리턴해야 합니다.

    입출력 예시

    let output = getSumOfFactors(8);
    console.log(output); // --> 15 (1 + 2 + 4 + 8)

    output = getSumOfFactors(12);
    console.log(output); // --> 28 (1 + 2 + 3 + 4 + 6 + 12)
*/

//test_1
function getSumOfFactors_1(num) {
    // TODO: 여기에 코드를 작성합니다.
    let save = 0;
    for(i=1; i<=num; i++){
      num % i === 0 ? save = save + i : save  
    } return save;
}

//test_2
function getSumOfFactors(num) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = 0;
    Number.isInteger(Math.sqrt(num))? sum+=Math.sqrt(num) : sum;
    for(let i=1; i<Math.sqrt(num); i++){
      num % i === 0 ? sum += i+num/i : null;
    }
    return sum;
}