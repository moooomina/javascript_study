//Q. 4개 버튼 클릭 시 '접근불가' 공통 메세지 띄우기
//로그인(콘솔) 구매하기(팝업) 장바구니(body) 관리자페이지(팝업)

const loginBtn = document.querySelector('#loginBtn')
const buyBtn = document.querySelector('#buyBtn')
const cartBtn = document.querySelector('#cartBtn')
const adminBtn = document.querySelector('#adminBtn')
console.log(loginBtn,buyBtn,cartBtn,adminBtn);
function error(text){
    return `${text}접근불가`
    // return text + "접근불가" -> 연결연산자로해도 가능!
}
loginBtn.addEventListener('click',function(){
    console.log(error('로그인'))
})
buyBtn.addEventListener('click',function(){
    window.alert(error('구매하기'))
})
cartBtn.addEventListener('click',function(){
    document.write(error('장바구니'))
})
adminBtn.addEventListener('click',function(){
    console.log(error('관리자페이지'))
})