const li = document.querySelectorAll('.list li')
const btn = document.querySelector('#design_add')
const onoff = document.querySelector('#onoff')
console.log(li, btn, onoff)
//inline style(태그 내에) 적용되는 js css 명령어 활용
//우선순위가 가장 높아 다른 css 충돌없이 우선적용할 수 있으나 css 속성이 여러개라면 하나하나 개별 명령을 해야해서 작성이 불편하고 효율이 안좋다.
li[0].style.backgroundColor = 'yellow'
li[0].style.borderTop = '2px solid red'
li[0].style.color = 'red'
console.log(li[0])
//제한없이 다양한 css속성을 가지고 있는 class를 생성해서 DOM에 적용하기
/* li[1].className = 'design_set1'
// li[1].className = 'design_set2' //이렇게 적으면 대입연산자가 되어서 위에 속성은 지워지고 아래만 적용된다.
// li[1].className += 'design_set2' //이렇게 적으면 위에 클래스는 나오는데 지워진다. 이유는 공백이 없어서!
li[1].className += ' design_set2' //이렇게 적어줘야 클래스 이름이 두개 다 들어가고 아래 적은게 우선순위이다.(우선순위가 동일하면 작성 순서대로 나중에 적은게 우선순위가 됨) */
li[1].classList.add('design_set1','design_set2')
li[1].classList.remove('design_set1','design_set2')

//버튼으로 class 제어하기
btn.addEventListener('click',()=>{
    li[2].classList.toggle('design_set1')
})
onoff.addEventListener('click',()=>{
    li[0].classList.toggle('showhide')
})
li[2].addEventListener('click',function(){
    this.classList.replace('design_set1','design_set2') //design_set1을 먼저 실행 후 2를 할 수 있음!
})
li[5].classList.add('design_set1')
let boolean = ''
li[5].addEventListener('click',()=>{
    boolean = li[5].classList.contains('design_set1')
    console.log(boolean)
    if(boolean){
        alert('존재한다')
    }else{
        alert('존재하지 않는다')
    }
})