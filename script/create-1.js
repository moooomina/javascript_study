// 아이디 찾기-인증번호받기
// Q. 인증번호 받기 클릭 시 버튼 다음 형제 위치에 "인증번호가 발송되었습니다" 출력하기
const form = document.querySelector('#id_search form')
//const id_searchForm = document.id_search.querySelector('form') //부모를 밖으로 빼도 됨
const btn = document.querySelector('#authentication_btn')
const send = document.createElement('span')
console.log(form, btn);

btn.addEventListener('click',function(){
    send.innerText = '인증번호가 발송되었습니다';
    form.appendChild(send); //form 맨 아래 추가
    console.log(form);
    // form.insertBefore(send, form.firstChild); //form 맨 위에 추가
})
//객체.appendChild(Node) 마지막 자식 노드 추가
//객체.insertBefore(삽입Node, 기존 시작자식 노드) 첫번째 자식 노드 추가
//form.insertBefore(삽입, 부모.firstChild)

// Q. 인증번호입력칸 #authentication_input 값을 입력하면 form의 이전 형제 위치에 "인증번호가 틀렸습니다" 출력하기
const input = document.querySelector('#authentication_input');
const message_error = document.createElement('p');
const div = document.querySelector('#id_search')
console.log(input, message_error);

message_error.innerText = "인증번호가 틀렸습니다"
console.log(input, message_error);

input.addEventListener('blur',function(){
    div.insertBefore(message_error, div.firstChild);
    console.log(div);
})
//input: 값을 입력할때마다 인식해서 처리함
//blur: 특정값 혹은 칸을 벗어나면 인식해서 처리함