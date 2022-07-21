function solution(num) {
    if(num === 2) return "Even";
    if(num % 2  === 0) return "Even";
    return "Odd";
}
//짝수 판별식에서 성능 높이기 위해 반만 확인하는 것도 있는걸로 알고있다.
//더 찾아봐야지!
