function solution(n) {
    let arr = String(n).split('').sort((a, b) => b - a);
    //console.log(arr);
    let string = arr.reduce((acc, cur) => (acc + cur), '');
    return Number(string);
}