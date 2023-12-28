const h1Tag = document.querySelector('h1');
const liTag = document.querySelector('li');
const titleCls = document.querySelector('.title')
const listCls = document.querySelector('.list');
const lilistCls = document.querySelector('li.list');
const main_title = document.querySelector('#main_title')
console.log(h1Tag);
console.log(liTag);
console.log(titleCls);
console.log(listCls);
console.log(lilistCls);
console.log(main_title);
// 쿼리샐렉터는 [index]를 적지 않으면 body에 있는 요소들 기준으로 첫번째만 인식해서 보여준다.
console.log('-----------------------')
const listAll = document.querySelectorAll('.list')
console.log(listAll);
console.log(listAll[1]);
console.log(listAll[2]);
console.log(listAll.length);
console.log('-----------------------')
// 명시적 형변환(개발자가 직접 데이터타입을 결정)
let a = 10
console.log(typeof a); //numer
a = '10'
console.log(typeof a); //strion
//암시적 형편환(자바스크립트가 개발자 동의없이 자동으로 형변환)
//prompt 받는 데이터값은 무조건 문자열로 처리된다.
// let age = window.prompt('당신의 나이는?')
let age = Number(window.prompt('당신의 나이는?'));
console.log(typeof age);
console.log(age);
console.log(Number(age))
age += 1 // 문자+숫자 = 문자 "20"+1 = "201"
console.log(age);
