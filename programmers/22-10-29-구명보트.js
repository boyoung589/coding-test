/**
 * 구명보트
문제 설명
무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.

예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.

구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.

사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

제한사항
무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.
입출력 예
people	limit	return
[70, 50, 80, 50]	100	3
[70, 80, 50]	100	3
*/

function solution_1(people, limit) {
    // 원본배열을 깊은복사한 sorted 배열을 내림차순 정렬한다
    // 횟수를 기록할 변수 count 를 선언
    // limit 에서 sorted 의 첫 수를 뺀 값이 sorted 의 마지막 수보다 크면 둘 모두 제거 후 count++
    // 크지 않으면 첫 수만 제거 후 count++
    // sorted 의 길이가 0이 될 때까지 반복
    let sorted = people.slice(0, people.length).sort((a, b)=> b-a);
    let count=0;
    while(sorted.length){
            if(limit-sorted[0]>=sorted[sorted.length-1]){
                sorted.pop();
                sorted.shift();
                count++;
            } else{
                sorted.shift();
                count++;
            }
    }
    return count;
}

function solution_2(people, limit) {
    // 효율성: pop과 slice가 걸리는 것 같다 인덱스로 계산해보기
    
    // 1. 사람을 무게순으로 정렬한다(위와 같음)
    // 2. 맨앞번호를 first_idx, 맨뒷번호를 last_idx 등록한다
    // 3. first_idx, last_idx 합이 리미트보다 작다면 first_idx++ last_idx--를 시킨다.
    // 4. sorted[first_idx]가 리미트보다 작거나 같다면 first_idx-last_idx+1을 2로 나누고 반올림을 한값을 더하고 count return한다
    let sorted = people.slice(0, people.length).sort((a, b)=> b-a);
    let count=0;
    let first_idx=0;
    let last_idx=sorted.length-1;
    while(first_idx<=last_idx){
        if(sorted[first_idx]<limit/2){
            return Math.ceil((last_idx-first_idx+1)/2)+count;
        }
        if(sorted[first_idx]+sorted[last_idx]<=limit){
            first_idx++;
            last_idx--;
            count++;
        } else {
            first_idx++;
            count++;
        }
    }
    return count;
}