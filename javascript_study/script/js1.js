// 객체는 반드시 변수에 저장하고 진행해야 한다!!
// let a; //undefined(정의되지 않음)
// let b = a; //undefined(정의되지 않음)
// let b ='a'; //이렇게 적으면 문자 a가 값이 됨.

let a = 10;
let b = '10';
let c = 1;

a = b+c //10과 1 -> 101 (문자)
a += a //101101 -> 101과101 (문자이므로 101101)

b = c //1 값은 대입을 받는 쪽(왼쪽)에 있을때 값이 변하고 보내는 쪽(오른쪽)에 있을때는 변하지 않음
a += b //1011011

b = a+b+c //10110111

//배열
const array = [1,2,3,4,5]

c = c+array[2] //1+3=4

const x = 10
const y = 5

function ca(){
    console.log(c+array[4]+array[0])
} //4+5+1=10

//1. 함수 생성
function xy(){
    console.log(x+(y-1))
    ca() //ca함수 밖이므로 이 값은 나옴!(이웃집에 들어간 개념)
}
//2. 함수 호출(생성 밖에서 호출해야한다)
xy() // 함수는 생성하고 호출을 따로 해줘야함
     // 먼저 위에 console.log값이 나오고 그 다음 ca()값이 순서대로 나옴
const cart = {
    img:'./img/model.jpa',
    sale: '50% OFF',
    name: 'Crop Top',
    fit_size:'Body Fit',
    color: ['Mineral Black','Chocolate Brown','Cobalt Blue/Iris Blue','Evening Blue','Jewel Green','Dusk Green/Light Sage Green'],
    size:['XS','S','M','L','XL','XXL'],
    price:27.50,
    price_original:55,
    num:1
}
console.log(cart)
console.log(cart.name)
console.log(cart.color[5])
/* 
자바스크립트에서 사용하는 괄호 개념
1. () : 메서드, 연산자 우선순위, 배열 빈공간, 배열선언, 함수
    메서드 : 객체.메서드();
    연산자 : 1+(1-2)
    배열 빈공간 : new Array(2) 값이 하나일때 빈공간으로 인식 -> 2자리가 비어있다.
    배열 선언 : new Array(1,2)
    함수 : function()
2. {} : 함수실행값, 객체선언
    함수실행값 : function(){ 실행 }
    객체선언 : let object = { 속성:값, 속성:[값1, 값2, 값3], } -> 배열보다 디테일하게 속성을 잡을 수 있음 / 배열을 잡을 수도 있음
3. [] : 배열생성, 배열인덱스호출, 불러온 DOM 객체가 2개 이상일때 인덱스 호출용
    배열생성 : let 변수명 = [배열값, 배열값,]
    배열인덱스호출 : 변수명[인덱스]
    DOM : (2개 이상의 DOM 선언 후) DOM변수명[인덱스]
*/
