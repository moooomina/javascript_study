//1. 'admin' 아이디만 접근할 수 있는 페이지
let userId = "admin"
if (userId == 'admin'){
    console.log('관리자님 어서오세요')
} //특정사용자만 사용할 수 있는 페이지는 if문으로 구성한다.

//2. 'admin' 아이디 '1234' 비밀번호인 관리자만 접근할 수 있는 페이지
let userPw = '1234'
if (userId=='admin' && userPw=='1234'){
    console.log('관리자님 어서오세요')
}

//3. 사용자의 아이디를 입력받고 admin이 아니면 "일반회원입니다." 출력
// const userIdInput = prompt('아이디를 입력하세요')
// if(userIdInput != 'admin'){
//     console.log('일반 회원입니다')
// }

//4. 사용자가 입력한 숫자 값에 따라 홀짝 구분해서 짝수일 경우 출력하기
// const userNum = prompt('숫자를 써주시면 짝수인지 홀수인지 맞춰볼게요!')
// if(userNum % 2 == 0){ //나머지 연산자 사용하면 홀짝 구분 가능
//     console.log('짝수!')
// }
// if(userNum % 2){ //비교연산자 없이도 그 값이 참이면 알아서 참에 결과가 나온다. 위에가 이미 참이므로! 거짓이면 실행이 안됨
//     console.log('홀수!')
// }
// if(true){} //무조건 실행되는 실행문
// if(false){} //무조건 실행되지 말아라 - 실행문

//5. 10살 이상만 탈 수 있는 놀이기구, 나이를 물어보고 10살 이하면 탑승불가!
// const userAge = prompt('본인 나이를 입력하세요')
// if(userAge < 10){
//     alert('탑승불가')
// }
// if(userAge >= 10){
//     alert('탑승가능')
// }

//6. 10살 이상이면서 키가 120 이상인 애만 탈 수 있는 놀이기구
//나이와 키를 물어보고 조건이 맞으면 '탑승가능!'
// const userAge = prompt('나이를 입력하세요')
// const userHeight = prompt('키를 입력하세요')
// if(userAge >= 10 && userHeight >= 120){
//     alert('탑승가능')
// }
const printBtn = document.querySelector('#printBtn');
// printBtn.addEventListener('click',function(){})
printBtn.addEventListener('click',()=>{
    const printPopup = confirm('인쇄할까요?') //확인을 누르면 참이 반환되고 취소를 누르면 거짓이 반환이 되도록 변수 생성
    // if(printPopup == true){window.print()} 이미 확인이 참이므로 ==true를 안적어도 됨
    if(printPopup){ window.print() }
}) //실행하기 전에 물어보는/확인하는 창은 자주 사용되므로 기억하기!

//최소 구매수량 1, 최대 구매수량 10
//10개 이상 구매하려고 하면 '최대 구매 수량입니다'
const numInput = document.querySelector('#num')
const minusBtn = document.querySelector('#minus')
const plusBtn = document.querySelector('#plus')
const priceOutput = document.querySelector('.price')
let num = 1
let price = 1000
let total = 0
console.log(price)

//초기 수량 1 설정
numInput.value = num;
priceOutput.value = total;
plusBtn.addEventListener('click',()=>{
    //버튼 클릭 시 수량 최대 10까지 증가
    if(num < 10){
        num++
        numInput.value = num;
        //수량이 증가될때 가격 증가
        total = price * num;
        console.log(total)
        priceOutput.innerHTML = total.toLocaleString('ko-kr')+'원';
    }
    //수량이 10개 됐을 때 버튼을 또 누를 때 실행메세지
    if(num === 10){
        alert('최대 구매 수량입니다')
    }
})
minusBtn.addEventListener('click',function(){
    if(1 < num){
        num--
        numInput.value = num;
        //수량이 감소될때 가격 감소
        total = price * num;
        console.log(total)
        priceOutput.innerHTML = total.toLocaleString('ko-kr')+'원';
    }
    if(1 >= num){
        alert('최소 구매 수량입니다')
    }
})