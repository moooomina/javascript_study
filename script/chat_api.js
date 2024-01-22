//채팅장 숨기기
//챗봇 상담 클릭하면 채팅방 나타나기(아래->위로 자연스럽게 나타나기)
//챗봇 상담 클릭 시 보이면 숨기기 / 안보이면 보이기

const chat_container = document.querySelector('#chat_container')
const chat_message = document.querySelector('#chat_message')
const userInput = document.querySelector('#user_input input')
const chatBtn = document.querySelector('#chat_btn')
const robotBtn = document.querySelector('#robot')
const apiEndpoint = 'https://api.openai.com/v1/chat/completions'
const apiKey = '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';

chat_container.classList.add('hide') /* 자바스크립트에서 추가한 클래스를 CSS에 꼭 적어줘야함 */
robotBtn.addEventListener('click',()=>{
    chat_container.classList.toggle('hide')
    chat_container.classList.toggle('show') /* css에서 동작 만들어놓고 js에서 추가하기*/
})

//api ai 연결
async function fetchAIResponse(prompt) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: prompt
            }, ],
            temperature: 0.3, //설정변경가능
            max_tokens: 400,
            top_p: 0.3, //설정변경가능
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"],
        }),
    };
    try {
        const response = await fetch(apiEndpoint, requestOptions);
        const data = await response.json();
        const aiResponse = data.choices[0].message.content;
        return aiResponse;
    } catch (error) {
		console.error('OpenAI API 호출 중 오류 발생:', error); //문제발생시 오류메세지
        return 'OpenAI API 호출 중 오류 발생';
    }
}

//질문 입력 후 전송 버튼 클릭하면 자바스크립트
//input창에 메세지를 입력하면 chat_message에 마지막 자식으로 내용이 계속 들어감
chatBtn.addEventListener('click',async()=>{//서버와 연결함
    let message = userInput.value
    addMessage('you',message) //함수호출도 버튼 안에서 진행
    userInput.value = ''
    //ai
    let aiMessage = await fetchAIResponse(message); //decoder
    addMessage('AI',aiMessage) //대상을 ai로, aiMessage에 출력
})

//Enter event
userInput.addEventListener('keydown',(e)=>{//내가 한 이벤트 정보는 매개변수에 담긴다.
    if(e.keyCode === 13){
        chatBtn.click(); //버튼 강제 클릭 활성화
    }
})

//value 값으로 받은 메세지가 처리되는 함수
function addMessage(target, contents){
    const messageElement = document.createElement('div')
    messageElement.classList.add('message') //만들어놨던 class명을 가지고와서 디자인을 바로 적용하게 하는게 편리함
    messageElement.innerHTML = `${target} : ${contents}`
    chat_message.appendChild(messageElement)
}