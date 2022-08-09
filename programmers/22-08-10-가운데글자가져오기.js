/*
    가운데 글자 가져오기
    문제 설명
    단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

    재한사항
    s는 길이가 1 이상, 100이하인 스트링입니다.
    입출력 예
    s	return
    "abcde"	"c"
    "qwer"	"we"
*/

//test_1
function solution_1(s) {
    console.log(Math.floor(s.length/2))
    return s.length%2 === 0 ? s.slice(s.length/2-1,s.length/2+1) : s[Math.floor(s.length/2)];
}
//보기 지저분하니 고쳐보자
//test_2 반복되는 부분 변수명을 바꾸기
function solution_2(s) {
    let half = s.length/2
    return s.length % 2 === 0 ? s.slice(half-1,half+1) : s[Math.floor(half)];
}

//test_3 문자열 => 문자열이므로 slice 쓸 필요 없이 더하면된다
//주의할 점: slice(시작하고싶은 인덱스, 끝내고 싶은 인덱스+1)
function solution_3(s) {
    let half = s.length/2
    return s.length % 2 === 0 ? s[half-1]+s[half] : s[Math.floor(half)];
}