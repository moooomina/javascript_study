//"안녕" chat_txt에 입력 후 send_btn을 클릭하면
//chat_list에 <li> 태그로 chat_txt에 입력한 "안녕" 값을 출력하기

const chatList = document.querySelector('.chat_list') //메세지 출력위치
const chatTxt = document.querySelector('#chat_txt') //메세지 입력창
const sendBtn = document.querySelector('#send_btn') //보내기버튼
const ul = document.createElement('ul')
console.log(chatList, chatTxt, sendBtn, ul);

sendBtn.addEventListener('click',function(){
    ul.innerHTML += `<li>${chatTxt.value}</li>`;
    chatList.appendChild(ul);
    chatTxt.value ='';
})