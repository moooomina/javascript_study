//DOM의 부모잡기 : parentNode, parentElement
const aNode = document.querySelectorAll('nav > a');
console.log(aNode, aNode[0], aNode[1]);
console.log(aNode[0].parentNode); //nav
console.log(aNode[1].parentNode); //nav
console.log(aNode[0].parentElement); //nav
console.log(aNode[1].parentElement.parentElement); //header
console.log(aNode[1].parentNode.parentNode); //header

//aNoe에서 마우스 올렸을때 배경색 넣기
aNode[0].addEventListener('mouseover',function(){
    //nav 배경색 노랑
    aNode[0].parentNode.style.backgroundColor = 'yellow';
    //header 배경색 하늘
    aNode[0].parentNode.parentNode.style.backgroundColor = 'skyblue';
})
//aNoe에서 마우스 나갔을 때 배경색 제거하기
aNode[0].addEventListener('mouseout',function(){
    aNode[0].parentNode.style.background = 'none';
    aNode[0].parentNode.parentNode.style.background = 'none';
})

//-----------------------------javascript에서 CSS 동적 설정
//객체 속성(css) 이벤트 메서드
//자바스크립트에서 css를 적용할땐 인라인 스타일로 적용된다.
//인라인 스타일은 모든 스타일 기준 가장 우선순위가 높으므로
//기존 .css파일에 디자인이 되어있는 속성이 있을 때 그 값보다 우선적용된다.
/* aNode[0].parentNode.style = 'background-color:yellow; border:2px solid red'; */ //동적인 결과가 정적인 css보다 먼저보일 수 있다.
/* aNode[0].parentNode.style = 'transform:skewX(20deg);' */
//객체.객체.속성 = '속성:값; 속성:값; 속성:값;'
//-> 추가속성방법은 덮어쓰기가 되어서 사용하려면 한번에 값을 전부 입력해야함.

/* aNode[1].parentNode.style.backgroundColor = 'aqua';
aNode[1].parentNode.style.border = '3px solid blue';
aNode[1].parentElement.style.transform = 'rotate(-10deg)'; */
//객체.객체.속성.속성 = '값'; (하이픈(-)이 들어갈 수 없으므로 속성에 하이픈(-)이 들어간다면 카멜표기법으로 변경해서 적어야함.)
//-> 아래방법은 계속해서 값이 추가가 되기때문에 많은 디자인이 필요할 때에는 이 방법으로 해야함