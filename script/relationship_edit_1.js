/* 
아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
입력하신 내용을 다시 확인해주세요.
*/
//"로그인" 버튼을 클릭 시 위 메세지가 form 안에 span.error 출력

const error = document.querySelector('#frm .error')
const loginBtn = document.querySelector('#frm #loginBtn')
const error_create = document.createElement('ul')//요소생성-만들고 싶은 태그 ''안에 적으면 됨 -> 삽입할 내용 및 태그 생각해두고 만들어야함
console.log(error_create) //<ul></ul>
console.log(error, loginBtn)

//form 마지막 자식 위치 createElement 생성한 노드 추가
//삽입노드 += 값 -> 복합대입으로 하려면 삽입노드 변수에 값을 추가해서 만들어야 함. (메서드여서 복합대입이 안되므로!)
//객체.appendChild(삽입노드) -> 객체는 넣을 위치의 부모/ 부모의 마지막 자식으로 (삽입노드) 넣어라
//처음부터 끝까지 동적인 기능을 사용할 수 있기 때문에 더 많이 사용함
//객체.innerHTML += '삽입노드'

loginBtn.addEventListener('click',function(){
    error_create.innerHTML += '<li>아이디 입력하세요</li>'; 
    error.appendChild(error_create);
    console.log(error);
/*     error.innerHTML = `<em>아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br>입력하신 내용을 다시 확인해주세요.</em>`
    console.log(error) */
}) //태그가 들어갈때는 innerHTML을 사용해줘야 함. Text로 하면 태그가 그대로 문자로 인식하기 때문에