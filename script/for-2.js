//반복문 for
//for(초기값(1); 조건식(2); 증감식(3);){ 조건이 참일 때 실행 반복결과(4) } 조건거짓일때 종료되는 for문 위치 (2-4-3순으로 계속 반복됨)
let data = [10,20,30,40,50]
let result = 0
for(let i=0; i<data.length; i++){ //i=0부터 시작인 이유는 배열이 0번부터 있기 때문에!
    console.log(data[i])//배열 값 반복 출력
    result += data[i] //복합대입으로해야 이전 값이 사라지지 않고 계속 더하기가 가능
}
console.log('총 배열의 합은 '+result)
//----------break(특정조건이 됐을때 강제로 끝낼 수 있음)
for(var j=1; j<=10; j++){
    continue; //for안에 있는 식은 실행시키지 않지만 for는 거짓이 될때까지 계속 돌려주는 기능.
    console.log(`j:${j}`)
    // break; //만나면 무조건 밖으로 나감! - switch에는 필수 다른 곳에는 선택적으로 사용
}console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`)
//조건이 거짓일때 나가므로, j의 값은 11이다. 조건이 참이 아니어야 하므로!

//continue(그대로 진행)
for(var j=1; j<=10; j++){
    continue; //for안에 있는 식은 실행시키지 않지만 for는 거짓이 될때까지 계속 돌려주는 기능.
    console.log(`j:${j}`) //기능을 숨겨준다!
}console.log(`for 조건식이 거짓으로 나오는 순간 결과는 ${j}`)
//for안에 있는 식을 계속 돌려서 j의 값은 11이다.
//=========================================
//다중 반복문 for-for
let total = 0
for(let i=1; i<6; i++){ //1~5 반복하는 1단 반복문
    console.log(`i=${i}`)
    //2단 for 시작
    console.log('--------------')
    for(let m=1; m<4; m++){
        console.log(`m=${m}`)
        total += m
    }
    console.log(`total=${total}`) //total는 for문 밖에서 변수가 생성되었기 때문에 값이 쌓여서 계산됨
    console.log('--------------')
    //2단 for 종료
}