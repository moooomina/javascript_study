//ES6 for
//forEach 인덱스, 객체 모두 출력
//for~in (index) 객체의 인덱스 출력
//for~of 객체 자체 출력
const array = 'abcdefg'
const cat = {
    color:'white',
    age:2,
    name:'nabi',
}
// const array = ['html','css','javascript']
for(let i=0; i<array.length; i++){
    console.log(i, array[i])
}
//--------------------------------------------
/* for(let i in cat){
    console.log(i) //객체쓸때 in으로만 쓰면 된다
}
for(let i of cat){
    console.log(i) //error
} */
//------------------------------DOM 메뉴 제어하기
const menu = document.querySelectorAll('nav > ul > li')
console.log(menu)

//for~in 자바스크립트 객체
//forEach, for~of 자바스크립트 DOM
for(let i of menu){
    i.addEventListener('mouseover',()=>{
        i.style.backgroundColor = 'yellow' //넣을게 많으면 for문으로 적으면 classList로 추가!
        console.log(i.childNodes)
        i.childNodes[0].style.color = 'skyblue'//첫재 자식으므로
        i.parentElement.style.boerder = '1px solid rea'
        console.log(i.childNodes)
        console.log(i.children)
    })
    i.addEventListener('mouseout',()=>{
        i.style.backgroundColor = "pink"
    })
}