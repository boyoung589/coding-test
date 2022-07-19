
function solution(n, m) {
    //최소공배수(lcm)는 최대공약수와 각 숫자를 최대공약수로 나눈 몫들을 곱한 값
    // 2) 60 48
    // 2) 30 24
    // 3) 15 12
    //     5  4  => 2*2*3*5*4(lcm)
    // num = gcd(60, 48);
    // lcm = num * 60/num * 48/num = 60 * 48 / num
    // 최소공배수(lcm)은 각 수 곱하기 최대공약수
    
    let gcdNM = gcd(n, m);
    let lcmNM = n * m / gcdNM;
    return [gcdNM, lcmNM];
}
const gcd = (m, n) => {
    return m % n === 0 ? n : gcd(n, m % n);
}
