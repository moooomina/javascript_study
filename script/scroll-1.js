//스크롤 javascript
//1. window.scrollTo(x, y) 지정된 x,y좌표로 스크롤 이동 함수
// window.scrollTo(0,200)

// window.onload : body 리소를 모두 읽고 onload 함수 실행(파일이 무거우면 느려질 수 있음)
/* window.onload = ()=>{ //onload:window가 로드됐을때
    console.log('.')
    window.scrollTo(0,200)
} */

//document.addEventListener('DOMContentLoaded',()=>{} : 리소스 로드를 기다리지 않고 바로 함수 실행
document.addEventListener('DOMContentLoaded',()=>{
    console.log('..')
    setTimeout(()=>{ //,뒤 시간뒤에 setTimeout실행해라
        window.scrollTo(0,200)
    },0)
})

const btn = document.querySelector('#btn')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const bg = document.querySelectorAll('.bg')
console.log(btn)

btn.addEventListener('click',()=>{
    // window.scrollTo(0, 1000)
    // window.scrollTo({left:0, top:1000}) //절대위치(화면의 위치를 기준으로)
    // window.scrollBy(0, 200) //상대위치(나의 위치를 기준으로)
    window.scrollTo({left:0, top:bg[2].offsetTop})
})


//bg1.style = 'scroll-behavior:smooth' //스크롤을 부드럽게 움직이게 해주는 효과 (애니메이션) - css에서도 가능

next.addEventListener('click',()=>{
    bg[0].scrollBy(1400, 0)
})
prev.addEventListener('click',()=>{
    bg[0].scrollBy(-1400, 0)
})