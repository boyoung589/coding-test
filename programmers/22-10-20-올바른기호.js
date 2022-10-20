/**올바른 괄호
문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

제한사항
문자열 s의 길이 : 100,000 이하의 자연수
문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
입출력 예
s	answer
"()()"	true
"(())()"	true
")()("	false
"(()("	false
"())()(()"  false
입출력 예 설명
입출력 예 #1,2,3,4
문제의 예시와 같습니다.
*/
//효율성이 됐다안됐다 함
function solution_1(s){
  //  ['(', ')', ')', '(', ')', '(', '(', ')']
  // 괄호의 짝이 맞는지 확인할 배열 stack 필요
  let answer = true;
  let stack = [];
  for(let i=0; i<s.length; i++){
      // el이 '('면 일단 stack에 담는다
      // el이 ')'면 stack에 '('이 있는지 살핀다.
      // 없으면 false로 리턴
      // 있으면 스택에서 '('하나 삭제
      // console.log(el)
      if(s[i] === '('){
          stack.push('(')
          // console.log('열린괄호였다', stack)
      } else {
          if(stack.length === 0) return answer = false;
          stack.pop();
          // console.log('닫힌괄호였다', stack)
      }
  }
  stack.length !== 0 ? answer = false : null;
  return answer;
}
/**
 * 정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	
테스트 4 〉	통과 (0.04ms, 33.3MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.07ms, 33.3MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.13ms, 33.5MB)
테스트 13 〉	
테스트 14 〉	통과 (0.16ms, 33.4MB)
테스트 15 〉	통과 (0.14ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.5MB)
테스트 17 〉	통과 (0.17ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
효율성  테스트
테스트 1 〉	실패 (시간 초과)
테스트 2 〉	실패 (시간 초과)
 */
function solution_2(s){
  let answer = true;
  let stack = [];
  if(s.length % 2 !== 0) return answer = false;
  for(let i=0; i<s.length; i++){
      if(s[i] === '('){
          stack.push('(')
      } else {
          if(stack.length === 0) {
              return answer = false;
          }
          stack.pop();
      }
  }
  stack.length !== 0 ? answer = false : null;
  return answer;
}
/**정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.5MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.22ms, 33.6MB)
테스트 13 〉	통과 (0.14ms, 33.5MB)
테스트 14 〉	통과 (0.14ms, 33.4MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.4MB)
테스트 17 〉	통과 (0.04ms, 33.5MB)
테스트 18 〉	통과 (0.14ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (3.80ms, 37.6MB)
테스트 2 〉	통과 (3.80ms, 37.6MB)
 */
function solution_3(s){
  //	['(', ')', ')', '(', ')', '(', '(', ')']
  // 괄호의 짝이 맞는지 확인할 배열 stack 필요
  let answer = true;
  let stack = [];
  if(stack.length % 2 !== 0) return answer = false;
  for(let i=0; i<s.length; i++){
      // el이 '('면 일단 stack에 담는다
      // el이 ')'면 stack에 '('이 있는지 살핀다.
      // 없으면 false로 리턴
      // 있으면 스택에서 '('하나 삭제
      // console.log(el)
      if(s[i] === '('){
          stack.push('(')
          // console.log('열린괄호였다', stack)
      } else {
          if(stack.length === 0) return answer = false;
          stack.pop();
          // console.log('닫힌괄호였다', stack)
      }
  }
  if(stack.length !== 0) return answer = false;
  return answer;
}

/**
 * 정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.07ms, 33.6MB)
테스트 5 〉	통과 (0.05ms, 33.6MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.13ms, 33.6MB)
테스트 13 〉	통과 (0.13ms, 33.6MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
테스트 15 〉	통과 (0.13ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.4MB)
테스트 17 〉	통과 (0.14ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (3.71ms, 37.5MB)
테스트 2 〉	통과 (4.08ms, 37.6MB)
 */

function solution_4(s){
  //	['(', ')', ')', '(', ')', '(', '(', ')']
  // 괄호의 짝이 맞는지 확인할 배열 stack 필요
  let answer = true;
  let stack = [];
  if(stack.length % 2 !== 0) return answer = false;
  for(let i=0; i<s.length; i++){
      // el이 '('면 일단 stack에 담는다
      // el이 ')'면 stack에 '('이 있는지 살핀다.
      // 없으면 false로 리턴
      // 있으면 스택에서 '('하나 삭제
      // console.log(el)
      if(s[i] === '('){
          stack.push('(')
          // console.log('열린괄호였다', stack)
      } else {
          if(stack.length === 0) return answer = false;
          stack.pop();
          // console.log('닫힌괄호였다', stack)
      }
  }
  if(stack.length !== 0) return answer = false;
  return answer;
}
/** 
 정확성  테스트
 테스트 1 〉	통과 (0.04ms, 33.4MB)
 테스트 2 〉	통과 (0.07ms, 33.5MB)
 테스트 3 〉	통과 (0.05ms, 33.5MB)
 테스트 4 〉	통과 (0.05ms, 33.5MB)
 테스트 5 〉	통과 (0.05ms, 33.6MB)
 테스트 6 〉	통과 (0.04ms, 33.5MB)
 테스트 7 〉	통과 (0.05ms, 33.5MB)
 테스트 8 〉	통과 (0.05ms, 33.5MB)
 테스트 9 〉	통과 (0.12ms, 33.5MB)
 테스트 10 〉	통과 (0.05ms, 33.5MB)
 테스트 11 〉	통과 (0.05ms, 33.6MB)
 테스트 12 〉	통과 (0.13ms, 33.4MB)
 테스트 13 〉	통과 (0.13ms, 33.5MB)
 테스트 14 〉	통과 (0.13ms, 33.4MB)
 테스트 15 〉	통과 (0.13ms, 33.6MB)
 테스트 16 〉	통과 (0.14ms, 33.5MB)
 테스트 17 〉	통과 (0.13ms, 33.4MB)
 테스트 18 〉	통과 (0.13ms, 33.5MB)
 효율성  테스트
 테스트 1 〉	실패 (시간 초과)
 테스트 2 〉	실패 (시간 초과)
*/