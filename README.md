# javascript(ECMAScript)
* 자바스크립트는 절차적언어, 객체지향언어이다.
## 자바스크립트 작성위치
* `<head>`,`<body>` 내에 `<script>` 작성 가능
* 내부스크립트 `<script>...</script>`
* 외부스크립트 `<script src="url"><script>`
* 자바스크립트 성능 향상 추가 옵션 `difer`, `async`
## 자바스크립트 변수
* `변수생성키워드 생성변수명 대입연산자 대입값;`
### 변수생성 키워드 종류
1. `var` : 중복선언 거르지 못함. ESMA Script 구버전의 오래된 변수 선언문
2. `let` : 중복선언 불가능하고 대입된 값을 언제든 변경할 수 있다.
3. `const` : 상수(변하지 않는 값), 선언과 동시에 대입이 이루어져야 한다.
### 기초 연산자
1. `=` : 대입연산자 `let x = data`
2. `+` : 연결연산자 `x + '1'`
3. `+=` : 복합대입연산자 `x += y` -> `x = x+y`
### 괄호 종류 및 사용
1. 대괄호[]: 배열생성, 배열인덱스호출, 불러온 DOM 객체가 2개 이상일때 인덱스 호출용
    배열생성 : let 변수명 = [배열값, 배열값,]
    배열인덱스호출 : 변수명[인덱스]
    DOM : (2개 이상의 DOM 선언 후) DOM변수명[인덱스]
2. 중괄호{} : 객체선언, 함수실행값
    함수실행값 : function(){ 실행 }
    객체선언 : let object = { 속성:값, 속성:[값1, 값2, 값3], } -> 배열보다 디테일하게 속성을 잡을 수 있음 / 배열을 잡을 수도 있음
3. 소괄호() : 메서드, 연산자 우선순위, 배열 빈공간, (이벤트), 배열선언, 함수
    메서드 : 객체.메서드();
    연산자 : 1+(1-2)
    배열 빈공간 : new Array(2) 값이 하나일때 빈공간으로 인식 -> 2자리가 비어있다.
    배열 선언 : new Array(1,2)
    함수 : function()
-------------------------
## 데이터타입
* 데이터 타입 연산자 `typeof`
## 배열
- 배열 값 추가 메서드
1. push: 배열의 끝에 새로운 값 추가하는 메서드
2. unshift: 배열의 시작에 새로운 값 추가
- 배열 값 삭제 메서드
1. pop: 배열의 끝 값 제거(값이 이미 있으므로 ()는 작성X)
2. shift: 배열의 시작 값 제거
* 연습) 빈좌석을 선택하면 하나씩 추가 되는 구조만들기
1. 먼저 `const name = new Array();` 빈 좌석을 만들고
2. `name.push('a1');` push로 값을 하나씩 만들어 놓으면 됨
## 객체:object
- 데이터 저장소 = 변수(한번에 한가지 값),배열(2개 이상의 값)'
- 특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이하게
1. `delet 객체이름.속성이름;` -> 객체 속성 제거
2. `객체이름.속성이름 = '속성내용'` -> 객체 속성 추가(변경동일)
3. 값을 바꾸고 싶을때는 대입연산자로 변경하면 가능
* 객체의 속성 가지고 오는 법 -> onclick=객체이름.속성이름()
## bom
1. alert('popup내용');
2. const qa1 = window.prompt('당신의 나이는?','') <앞에는 질문위치,'': 뒤에는 답변위치>
console.log(typeof qa1) <prompt는 숫자든 문자든 문자로 기본값을 인식한다.>
3. const ok = window.confirm('결제하시겠습니까?'); <물어보고 확인/취소로 답변받는 기능>
console.log(ok);
4. window.print(); <프린트 창이 뜸>
5. window.open('https://google.com','_blank'); <새로운 탭으로 열리게 하는 기능>
6. function func2(){
    window.open('https://google.com', '_blank', 'width=500, height=300')
}
## dom
* getElementsByTagName
1. HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 DOM으로 등록이 필요한 거라면 변수 지정시 [index] 설정하고 대입하기
(1-2개만 동적인 기능을 사용한다면 선언할때 사용:document.getElementsByTagName('태그')[번호];)
2. HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어 DOM이 된다면 변수 지정시는 [index] 없이 대입하고 해당 DOM 변수 호출 시필요한 경우 [index] 사용하기
(동적인 기능이 여러개 사용된다면 출력할때 사용:document.getElementsByTagName('태그'); console.log(태그Tag[번호]);)

* DOM Node 변수 지정 시
HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고(인덱스 없이 사용),
실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
3. getElementsByClassName
const 클래스이름Cls = document.getElementsByClassName('클래스이름'); console.log(클래스 이름);
클래스 이름을 선언하고 출력하면 지정된 클래스만 선택할 수 있음
* 부모가 있다면 const 클래스이름 = 부모클래스네임.getElementsByTagName('태그혹은클래스이름')[번호];
console.log(클래스이름);
4. getElementById
const 아이디이름 = document.getElementById('아이디이름')
console.log(아이디이름);
아이디이름을 선언하고 출력하면 지정된 아이디만 선택할 수 있음
*  id는 하나이므로 인덱스 사용하지않음

## value
* form 태그에 삽입되는 값 속성(input, option, select, button, textarea)
* form 태그 내에 작성했을 땐 미리 입력된 값 표현 가능
* javascript의 DOM.속성 `ex)DOM.value` 로 처리했을 땐 해당 DOM의 미리 입력된 값부터 사용자가 입력하는 신규 값까지 모두 인식할 수 있다.
1. 쇼핑몰의 상품 수량
2. 쇼핑몰의 총 주문 가격
3. 예약페이지의 여행 인원 수 등등...
* 주의사항 -> value속성은 form전용이므로 다른 태그일때 해당 값을 알고 싶다면 다른 속성 및 메서드를 사용해야 한다.
* 주의사항 -> `DOM.value`로 값 처리 시 숫자를 쓰더라도 문자열(string)으로 인식하기 때문에 필요한 경우 `Number()` 메서드를 활용해 (Number)데이터타입으로 변환해야 한다. ex `Number(객체.value())`

## event
이벤트란? 사용자의 특정 동작에 따라 결과를 실행하는 행위
**이벤트 핸들러 종류**
- mouseover / mouseenter 마우스가 요소에 올라갔을 때
- mouseout / mouseleave 마우스가 요소에 올라간 후 나갔을 때
- mousemove 마우스가 요소 위에서 움직였을 때
- mousedown 마우스로 요소를 눌렀을 때(마우스 이벤트 1단계)
- mouseup 마우스로 요소를 누르고 떼었을 때(마우스 이벤트 2단계)
- click 클릭했을 때(마우스 이벤트 3단계 mousedown -> mouseup을 연달아 실행가능)
- onfocus 폼 요소가 활성화되었을 때
- onload 문서를 읽었을 때
- ondblclick 마우스로 더블클릭 했을때
- onkeydown 키보드 키 눌렀을 때
- onkeypress 키보드 키 누르고 떼었을 때
- onkeyup 키보드 키 누르고 떼었을때(2단계)
- onchange input 요소의 값이 변경되었을 때
- onblur input요소가 커서를 잃었을 때
- onfocus input요소에 커서가 들어갔을 때
- onselect 텍스트 필드 등의 텍스트를 선택했을 때
- onsubmit 폼 제출버튼을 눌렀을 때
- onunloadWeb 웹페이지가 다른 페이지로 전환될 때
- onabort 페이지나 이미지의 로딩이 중단되었을 때
- onerror 페이지나 이미지를 로딩 중 에러가 발생했을 때
- onresize HTML요소의 크기가 변경되었을 때

### DOM 관계속성
1. parentNode 부모 노드, parentElement 부모 요소
- parentNode.parentNode 연속 사용 (부모의 부모 잡기)
- 자식 또는 자손노드.parentElement (특정 자식의 부모 잡기)
2. javascript에서 css 제어하기 -> style 속성
- `DOM.관계.style = "속성:값; 속성:값; 속성:값;";` -> style 2번 이상 생성 시 이전 속성:값 제거됨
- `DOM.관계.관계.style.속성 = "값";` -> style 2번 이상 생성 시 기존 속성값에 이어서 추가됨
- `DOM.style.속성 = "값";`
- 위 관계는 필요에 따라 선택 속성
3. 자식노드제어하기
- childNodes, children, childElementCount
3-1. firstChild 첫번째 자식, firstElementChild 첫번째 자식 노드
    lastChild 마지막 자식, lastElementChild 마지막 자식 노드
    `Element`가 들어가면 요소만 잡는 속성
3-2. previousSibling, previousElementSibling 이전 형제
    nextSibling, nextElementSibling 다음 형제
    `Element`가 들어가면 요소만 잡는 속성
    안들어가면 공백, 텍스트, 요소 전부 잡는다.

# innerHTML
* `객체.innerHTML;` 특정 객체의 자식, 자손 HTML 읽기
* `객체.innerHTML = 값;` HTML 삽입 및 변경
# innerText
* `객체.innerText` 특정 객체의 자식, 자손 텍스트노드 읽기(HTML X)
* `객체.innerText = 값;` 텍스트 노드 삽입 및 변경 (HTML X)
# appendChild
* `객체.appendChild()`
* `객체.객체.appendChild()`
* `객체.속성.appendChild()`
* `객체.속성.속성.appendChild()`
* 객체의 마지막 자식 노드 위치에 `(삽입Node)` 괄호 안 값 추가
# insertBefore
* `객체.insertBefore()`
* 객체의 첫번째 자식 노드 위치에 `(삽입Node, 부모.firstChild)` 괄호 안 값 추가
# createElement
* `document.createElement()`
* 요소 노드 자바스크립트 내에서 동적인 용도로 생성할 경우 사용 (태그추가)
# remove
* 요소 노드 제거하기 remove, removeChild()
* 요소.remove() -> 요소를 제거한다.
* 요소.removeChild() -> 요소 안 () 괄호에 있는 자식노드를 제거한다. -- 좀 더 디테일하게 노드를 잡을 수 있다.
# 논리연산자와 비교연산자, 논리데이터
## 논리데이터
* 논리데이터(boolean) : 참(true) 또는 거짓(false) 두가지 값 중 하나의 데이터 형식 조건문, 논리연산자, 논리적 판단 등에 사용
## 비교연산자
* 두 값 이상을 비교하여 그 결과를 논리데이터로 반환하는 연산자
일치연산자 a == b / a === b
부등연산자 a != b / a !== b
대소 비교 연산자 a < b / a > b / a <= b / a >= b
복합 비교 연산자 a > b && b < 30 / a === 10 || b === 15
## 논리연산자
* 논리적인 조건을 결합하거나 변경하는데 사용하는 연산자 (AND(&&) OR(||) NOT(!))
&&(AND) : 양쪽 피연산자가 모두 참일 때 결과는 참
||(OR) : 양쪽 피연산자 중 하나라도 참이면 결과는 참
!(NOT) : 피연산자의 논리값을 반전함. 참이면 거짓 반환

* 논리연산자 우선순위
() >> not(!) >> and(&&) >> or(||)