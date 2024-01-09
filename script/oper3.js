//문자열 연산자(피연산자 중 하나라도 문자일 경우)
console.log('hello'+'world');
console.log('1'+2);
console.log(10+'Number()');
console.log('num'+(2+2)+'bar'); //()가 우선순위이므로 숫자끼리는 계산이 되고 그 후 문자열 계산
console.log('안녕하세요'.length); //.length : 문자열 갯수적어주는 속성
//문자열 + 삼항연산자
//textarea 영역에 100자 이상을 쓰고 리뷰등록 버튼 클릭하면 '등록' 팝업출력
//textarea 영역에 100자 이하를 쓰고 리뷰등록 버튼 클릭하면 '100자 이상 입력하세요' 팝업출력
//1.textarea,button 변수 생성
//2.100자 이하, 이상 대입 값 생성
//3.button을 눌렀을때 팝업출력 
const textarea = document.querySelector('#re');
const btn = document.querySelector('#reviewBtn');
let result;

btn.addEventListener('click',function(){
    console.log(textarea.value)
    console.log(textarea.value.length)
    result = textarea.value.length > 100 ? '등록' : '100자 이상 입력하세요'
    window.alert(result);
})