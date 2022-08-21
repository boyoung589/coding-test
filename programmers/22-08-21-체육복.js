/*
    문제 설명
    점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

    전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

    제한사항
    전체 학생의 수는 2명 이상 30명 이하입니다.
    체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
    여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
    여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
    입출력 예
    n	lost	reserve	return
    5	[2, 4]	[1, 3, 5]	5
    5	[2, 4]	[3]	4
    3	[3]	[1]	2
    입출력 예 설명
    예제 #1
    1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

    예제 #2
    3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
*/

//test_1 lost와 reserve의 정렬 필요.
// 같은 것 제외한 후 나머지 진행 필요.
// -1인 경우 패쓰하는 것 필요
function solution_1(n, lost, reserve) {
    for(let l=0; l<lost.length; l++){
        for(let r=0; r<reserve.length; r++){
          if(lost[l] === reserve[r]){
            lost[l] = -1;
            reserve[r] = -1;
            have++;
            break;
          }
          if(lost[l]-1 === reserve[r]){
            lost[l] = -1;
            reserve[r] = -1;
            have++;
            break;
          }
          if(lost[l]+1 === reserve[r]){
            lost[l] = -1;
            reserve[r] = -1;
            have++;
            break;
          }
        }
    }
}

//test_2
function solution_2(n, lost, reserve) {
    // 배열들 정렬하기
    // have = n - lost.length 도난당하지 않은 학생 수
    // lost[0] 이 reserve에 있는지 확인
    // 같으면 -1로 바꾸고, have++
    // lost[0] -1 이나 lost[0] +1이 reserve에 있는지 확인
    // -1인 값은 통과(continue)
    // 있으면 해당 reserve = -1
    // have ++
    let s_lost = lost.slice().sort();
    let s_reserve = reserve.slice().sort();
    let have = n-s_lost.length;
    
    for(let l = 0; l < s_lost.length; l++){
        for(let r = 0; r < s_reserve.length; r++){
            if(s_lost[l] === s_reserve[r]){
                s_lost[l] = -1;
                s_reserve[r] = -1;
                have++;
                break;
            }
        }
    }
    //console.log(s_lost, s_reserve)
    for(let l of s_lost){
        if(l === -1) continue;
        for(let r = 0; r < s_reserve.length; r++){
            //for of 를 사용하면, 그 값을 재할당안되는 듯.
            if(s_reserve[r] === -1) continue;
            //console.log(l)
            //console.log(s_reserve[r])
            if(s_reserve[r] === l-1 || s_reserve[r] === l+1){
                s_reserve[r] = -1;
                //console.log(s_reserve[r]);
                //console.log(s_reserve)
                have++
                //console.log(have)
                break;
            }
        }
    }
    return have;
}

//순서대로 생각하기가 어려웠다. for in, for of 복습 필요