const header = document.querySelector('header');
const headerChild = header.childNodes; //childNodes는 텍스트와 공백을 인식. 텍스트만 필요할때 사용 / children는 요소만 필요할 때 사용.
console.log(header, headerChild);
console.log(header.childElementCount); //length와 동일하게 1부터 셈 -> 장바구니 담으면 자동으로 숫자 세주는 그럴때..사용

console.log(headerChild[1]); //h1
console.log(headerChild[3]); //nav
console.log(headerChild[1].innerText); //logo
console.log(headerChild[1].innerHTML); //<a href="#">logo</a>
console.log(headerChild[3].innerText); //menu1 menu2
console.log(headerChild[3].innerHTML); // <a href="#">menu1</a><a href="#">menu2</a>

// headerChild[1].innerText = "로고"; //logo글자를 로고로 변경되어서 보여짐(오른쪽 값이 왼쪽에 대입)
//innerText에 대입연산자를 쓰면 그 안에 있는 모든 데이터를 통채로 바꿔서 안에 있던 a태그도 같이 사라짐
console.log(headerChild[1].childNodes[0])
headerChild[1].childNodes[0].innerText = '로고'; //한 번 더 자식을 선택해서 a태그를 잡은 후 변경
headerChild[1].children[0].innerHTML = '로고로고';

//Q. menu1 마우스를 올리면 menu1 -> 메뉴1 글자 변경
console.log(header.childNodes[3].children[0]);
const menu1 = header.childNodes[3].children[0];
console.log(menu1.innerText);
menu1.addEventListener('mouseover',function(){
    menu1.innerText = '메뉴1';
})
//Q. menu2 마우스를 올리면 menu2 -> 메뉴2 글자 변경
console.log(header.childNodes[3].children[1]);
const menu2 = header.childNodes[3].children[1];
console.log(menu2.innerText);
menu2.addEventListener('mouseover',function(){
    menu2.innerText = '메뉴2';
})

//------------------------------------------------
//1. menu1 변수 생성하기(nav-a만 잡는 방법)
//1-1. (위 변수 생성 이유) 마우스 올리는 대상, 변경 글자 대상
//2. 변수 이용 이벤트 핸들러 addEventListener
//2-1. 마우스 올리면 이벤트 종류 찾기
//2-2. 마우스 올렸을 때 실행 결과 이벤트 내 function 안에 작성 준비
//3. 글자를 변경하는 속성이 뭔지 체크. 문법에 맞춰서 작성
//3-1. 객체.속성 = "값" 속성 값 변경하는 문법

//------------쌤 풀이-----------------------------
const nav = header.querySelector('nav');
const nav_a = nav.children;
console.log(nav, nav_a, nav_a[0], nav_a[1])

nav_a[0].addEventListener('mouseover',function(){
    console.log(nav_a[0].innerHTML, nav_a[0].innerText)
    nav_a[0].innerText = '메뉴11';
})
nav_a[1].addEventListener('mouseover',function(){
    nav_a[1].innerText = '메뉴22'
})

//main-장바구니 아이템의 개수를 자동으로 측정하여 main span.all 노드에 해당 개수 출력하기
const mainNode = document.querySelector('main');
//1. main-cart 변수 생성하기
const cart = mainNode.querySelector('.cart');
//2. span.all 변수 생성하기
const all_count_view = mainNode.querySelector('span.all');
//3. main-cart의 자식 item 개수 체크하기
const cart_item_count = cart.childElementCount;
console.log(mainNode, cart, all_count_view, cart_item_count);
//4. span.all 변수에 위(3)번 값 대입하기
all_count_view.innerText = cart_item_count;

// 내가한거
const main = document.querySelector('main');
const main_cart = main.children[2];
console.log(main_cart);
const span_all = main.children[1].children[1];
console.log(span_all);

console.log(main_cart.childElementCount);
span_all.innerText = main_cart.childElementCount;
