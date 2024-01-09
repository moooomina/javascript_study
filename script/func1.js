//함수 스코피
//지역변수와 전역변수
/* let b = 20;
let c = 30; //전역변수
let a = '';
function scope1(){
    a = 10; //지역변수
    // a += 10; // 복합대입으로 하면 문자열에 10을 더하는것이므로 문자열로 인식해서 값이 달라짐
    console.log(a,b,c);
}
console.log(a+(b+c)); //괄호를 하면 먼저 출력해줌 : 102030 
console.log(a+b+c); //함수 호출 전 : nudifinde+20+30
scope1() //함수는 밖에서 함수이름을 호출해야 출력이 됨 (함수 호출 위치는 생성 위치와 관계없다.)
console.log(a+b+c); */ //함수 호출 후 : 60
//let a =''를 넣어놓으면 빈 문자로 인식해서 문자+숫자로 문자열로 더해줌

//함수 스코프 연습
let x = 1
let y
function func1(){
    y = 5
    console.log(x+y)
}
function func2(){
    let z = 10
    func1() // 가장 마지막에 읽히는 호출명
    console.log(x+y+z) // error
}
func1()
func2()
console.log('-------------')
const btn = document.querySelector('#btn')
const btn2 = document.querySelector('#btn2')
console.log(btn)

/* btn.addEventListener('click',function(){
    console.log('결과 테스트')
}) */

function testFunc(){
    console.log('결과 테스트')
}
btn.addEventListener('click',testFunc);
btn2.addEventListener('click',testFunc);
//이벤트 함수 개별 선언 연습
//수량 -,+ 버튼 클릭 시 수량값이 변경되며 그에 따라 가격 변동;
//최소수량, 최대수량 팝업설정
const num_view = document.querySelector('.num_view')
const num = num_view.querySelector('#num')
const minus = num_view.querySelector('#minus')
const plus = num_view.querySelector('#plus')
const priceView = document.querySelector('.price')
let price = 4000;
let number = 1;
let total = 0;
console.log(num,minus,plus,price,num,total);

function plusFunc(){
    // number < 10 ? ++number : alert('최대 구매 수량입니다')
    // num.value = number;
    // priceView.innerText = (number*price).toLocaleString('ko-kr')+'원'

    number < 10 ? ++number : alert('최대 구매 수량입니다')
    num.value = number;
    total = number*price
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
}
function minusFunc(){
    // number > 1 ? --number : alert('최소 구매 수량입니다')
    // num.value = number;
    // priceView.innerText = (number*price).toLocaleString('ko-kr')+'원'

    number > 1 ? --number : alert('최소 구매수량입니다')
    num.value = number;
    total = number*price
    priceView.innerHTML = total.toLocaleString('ko-kr')+'원'
}
plus.addEventListener('click',plusFunc);
minus.addEventListener('click',minusFunc);