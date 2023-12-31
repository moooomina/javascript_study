let number1 = 10;
let number2 = 20;
let result;
number1--;
console.log(number1) //결과 9
number1++;
console.log(number1) //결과 10
result=number2++;
console.log(result); //결과 20
result=++number2;
console.log(result) //결과 22
console.log('------------')
result = result++
console.log(result) //22
number2 = number1 + result++
console.log(number2) //32
console.log('------------')
//복합대입연산자
let number = 10;
number += 5; //number = number+5
console.log(`변경값 = ${number}`) //15
number -= 5; //number = number-5
console.log(`변경값 = ${number}`) //10
number *= 5; //number = number*5
console.log(`변경값 = ${number}`) //50
number /= 5; //number = number/5
console.log(`변경값 = ${number}`) //10
number %= 2; //number = number/2
console.log(`변경값 = ${number}`) //0
console.log('------------')
//삼항연산자
//조건 ? 조건값 참일 때 실행결과 : 조건값 거짓일때 실행 결과
//조건에 따라 참과 거짓을 구분하는데 사용하는 연산자
//= 대입연산자
//== 비교연산자(좌우 피연산자가 같다)
let x = 5;
let y = x+10;
y = x;
let result_xy = x==y ? 'x와 y는 같다' : 'x와 y는 다르다';
console.log(result_xy);
console.log('------------')
let age = window.prompt('몇살이세요?')
// age 입력받은 데이터가 18살 이상이면 성인 아니면 미성년자 콘솔값 출력
let result_age = age >= 18 ? '성인' : '미성년자'
console.log(result_age);
//객체 + 삼항연산자
let user = [
    {
        name:'lee', //데이터
        score:80, //조건
    },{
        name:'kim', //데이터
        score:100, //조건
    }
]
//최고 점수(조건) 받은 학생(데이터)의 이름 저장 변수
const max_score_name = user[0].score > user[1].score ? user[0].name : user[1].name;
console.log(`이번 달 1등 학생은 ${max_score_name}학생입니다.`)
//user[0].score가 더 크면 참이므로 user[0].name이 뜨고 점수가 더 낮으면 거짓이므로 user[1].name이 뜬다.