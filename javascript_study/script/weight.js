const userHeight = document.querySelector(".height") //키
const userWeight = document.querySelector(".weight") //몸무게
const goals = document.querySelector('.weight2') //최종목표
const result = document.querySelector('#result') //결과

bank_btn.addEventListener('click',function(){
    console.log(Number(bank_input.value) + 100) //더하기 결과 확인
    console.log(total + Number(bank_input.value) + 100) //총 잔액 더하기 결과 확인
    let input_total = (Number(bank_input.value) + 100) //입금액+이자
    total += input_total; //== total = total + input_total;
    bank_total.value = total;
    //입금액 입력값 초기화
    result.value = '';
    `적정체중은 ${}kg이며 ${}kg 초과되셨습니다.`
})