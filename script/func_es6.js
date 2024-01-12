const btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('click',function(){
    console.log(this) //이벤트 안에서 this를 사용하면 그 객체를 인식해서 나오게 함
    console.log(this.type) //이벤트의 속성을 보여줘라
    console.log(this.id) //이벤트 객체의 id를 보여줘라
    this.style.backgroundColor = 'yellow' // == btn.style.backgroundColor
    btn.style.border = '2px solid red'
    this.innerText = '클릭'
})

//객체, 변수 선언과 this
const ob = [{
    w:50,
    h:100,
    func:function(){
        // return `w:${w}, h:${h}` //이렇게 쓰면 에러 남! 문법 지켜주기
        // return `w:${ob[0].w}, h:${ob[0].w}` //이렇게 써야 가능하다!
        return `w:${this.w}, h:${this.w}` //this를 쓰면 더 쉽게 사용 가능 함수 내에서 this쓰게 되면 함수의 이름을 인식하고 그 위에 있는 ob까지 인식하게 됨 - 가족관계이므로
    }
},{
    w:80,
    h:40,
    func:function(){
        return `W+h:${this.w+this.h}` //this의 이름이 같아도 다른객체 중괄호 안에 들어가 있어서 인식하는게 다른 것
    }
}]
console.log(ob)
console.log(ob[0])
console.log(ob[0].w)
console.log(ob[0].func)
console.log(ob[0].func())
console.log(ob[1].func())
console.log('=============')
//ES5 화살표 함수
//========== 화살표 함수 before
function japangi(){
    return '음료수 출력'
}
console.log(japangi())
//========== 화살표 함수 after
//function 생력
//기존함수 : function 함수명(){ 함수 실행 값 }
//const 익명함수 = () => { 함수 실행 값 } -> 함수명이 생략되므로 익명함수! ():매개변수
//DOM.addEventListener('이벤트',()=>{ 함수 실행 값 }) -> 객체가 있으므로 ()앞에 이름이 없어도 된다.
const japangi_v2 = () => {
    return '음료수 v2'
}
console.log(japangi_v2())

btn.addEventListener('mouseover',()=>{
    console.log('over')
    // this.style.color = 'red' //화살표 함수 내에서 this를 인식못함
    btn.style.color = 'red'
})
//함수내에서 this를 쓰고 싶으면 function을 써야하고, 문법적으로 편하게 쓰고 싶다면 화살표 함수를 사용하면 됨.

const bab = (target) => {
    return target+'밥'
}
console.log(bab('콩'))
console.log(bab('쌀'))
console.log(bab('국'))