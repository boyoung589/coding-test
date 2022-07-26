function solution(s) {
    let arr = s.split(' ');
    console.log(arr);
    let answer = '';
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<arr[i].length; j++){
            if(j % 2 === 0){
                answer += arr[i][j].toUpperCase();
                console.log(answer);
            } else{
                answer += arr[i][j].toLowerCase();
                console.log(answer);
            }
        }
        if(i !== arr.length -1){
            answer += ' ';
        }
    }
    return answer;
}