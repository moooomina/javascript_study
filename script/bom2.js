// let m0 = 'popup'
// let m1 = window.alert('popup');
// console.log(m1); /* popup에 나온 값을 m1의 대입해서 m1의 대입값을 console의 대입한다. 그래서 처음에 console의 아무것도 안뜸 */

// let m2 = window.alert('잠시 기다려주세요');
// let m3 = alert('준비중입니다'); /* 적은 순서대로 나옴 */
// let m4 = alert('잘못 접근하셨습니다');
// const m5 = alert('제출 완료되었습니다');
// const m6 = alert('결제 실패했습니다');

// const qa1 = window.prompt('당신의 나이는?','') /* 앞에는 질문위치,'': 뒤에는 답변위치 */
// console.log(qa1);
// console.log(typeof qa1) /* prompt는 숫자든 문자든 문자로 기본값을 인식한다. */

// const ok = window.confirm('결제하시겠습니까?'); /* 물어보고 확인/취소로 답변받는 기능 */
// console.log(ok);

// window.print(); /* 프린트 창이 뜰 수 있음 */

function naver(){
    window.location.href="https://naver.com";
}
//---------------
// 객체.속성.속성or메서드
window.document.write("테스트 문구")
document.write('자바스크립트')
document.write('hello<br>world') /* 태그를 문자열로 인식해서 뒤로 떨어트림(태그동작가능) */
//--------------
// window.open('https://google.com','_blank'); /* 새로운 탭으로 열리게 하는 기능 */
// function func2(){
//     window.open('https://google.com', '_blank', 'width=500, height=300')
//     window.open('https://google.com', '_blank', 'width=500, height=300')
// }