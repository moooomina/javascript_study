//while 무한반복 -> 특정 조건이 참이거나 거짓일때 사용함
//1~10 반복
for(let i=1; i<=10; i++){
    console.log(`for i=${i}`)
}

let j=1;
while(j<=10){
    console.log(`while j=${j}`)
    j++
}
//---------------------------------
let qa = prompt('밥줄까?')
while(qa !='응'){
    qa = prompt('밥줄까?')
}
alert('밥먹자') //특정 조건에 답이 나올 때까지 무조건 무한 반복이다.