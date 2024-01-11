//함수 매겨변수와 리턴
//매개변수 : 함수 내 변경 데이터가 있을 경우 함수호출 시 변경 인수값을 매개변수에 전달하기 위해서
//리턴 : 실행 결과가 매번 다른 경우 데이터 값만 함수 외부로 반환할 때
//리턴의 주의사항 : 리턴을 만나면 함수가 종료된다. 리턴 아래 스크립트를 읽지 못한다.
const dan = document.querySelector('.dan99');
let total = '';
function dan99(multi){
    total += `${multi}X1 = ${multi*1}<br>`
    total += `${multi}X2 = ${multi*2}<br>`
    total += `${multi}X3 = ${multi*3}<br>`
    total += `${multi}X4 = ${multi*4}<br>`
    total += `${multi}X5 = ${multi*5}<br>`
    total += `${multi}X6 = ${multi*6}<br>`
    total += `${multi}X7 = ${multi*7}<br>`
    total += `${multi}X8 = ${multi*8}<br>`
    total += `${multi}X9 = ${multi*9}<br>`
    total += `<hr>` //-> <hr>이 블록역할을 해줘서 넣어야 함
    return total
}
dan.innerHTML = dan99(2);
dan.innerHTML = dan99(3);
dan.innerHTML = dan99(4);
dan.innerHTML = dan99(5);
dan.innerHTML = dan99(6);
dan.innerHTML = dan99(7);
dan.innerHTML = dan99(8);
dan.innerHTML = dan99(9);

//------------------------
let deposit_pay
const depositBtn = document.querySelector('#depositBtn')
let payTotal = 10000
let total_message = ''
function deposit_fun(){
    //1. 총 잔액 + 입금액
    payTotal += Number(deposit_pay);
    // payTotal + deposit_pay //넘버를 아래에 미리 적어놓으면 위에가 더 깔끔해짐
    
    //2. 입금액과 총 잔액을 대입받는 변수
    total_message = `${deposit_pay.toLocaleString('ko-kr')}원 입금하셨습니다. 총 잔액은 ${payTotal.toLocaleString('ko-kr')}원 입니다.`

    //3. 1,2 변수값 return
    return total_message
}
depositBtn.addEventListener('click',function(){
    deposit_pay = window.prompt('입금 금액을 입력하세요')
    // deposit_pay = Number(window.prompt('입금 금액을 입력하세요')) //넘버를 미리 적어놔도 됨
    window.alert(deposit_fun())
})
//Q. (기존 잔액:10,000원) prompt 입금액을 입력하고 버튼을 클릭하면 deposit_fun 함수가 호출되서 OOOO원 입금하셨습니다. 총 잔액은 OOOO원 입니다. 팝업으로 출력하기