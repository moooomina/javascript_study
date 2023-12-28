const num = document.querySelector('#num');
const numBtn = document.querySelector('#numBtn');
console.log(num, numBtn);
function plus(){
    //버튼을 클릭하면 실행되는 함수
    // console.log(num.value) //값 출력 확인 O
    // console.log(num.value+1) //더하기 출력 확인 X -> 문제확인
    // console.log(typeof num.value) //문제해결하기 위한 데이터확인 -> nuber로 바꿔야함
    // console.log(Number(num.value)+1) // 더하기 확인 ok
    // num.value = Number(num.value)+1 //출력 대상 바꿔서 확인
    // (아래) 또다른 결과(프로그래밍 깔끔하게 쓰기)
    let result = Number(num.value)
    num.value = result + 1
}