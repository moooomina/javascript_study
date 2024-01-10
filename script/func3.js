// //Q. 콜라만 나오는 자판기
// function japangi(){
//     console.log('콜라')
// }
// //Q. 사이다만 나오는 자판기
// function japangi2(){
//     console.log('사이다')
// }
// japangi()
// japangi()
// japangi2()

// 필요한 음료수를 자유롭게 뽑을 수 있는 자판기
function japangi(drink){//drink 매개변수 생성 let drink;와 동일
    console.log(drink)
}

japangi("콜라") //호출할때 함수에 매개변수를 대입한다. (생성은 함수, 대입은 호출)
japangi("커피")//-> 대입된 값이 매개변수에 적용되고 재사용문법에 대입되어서 함수를 호출하면 나온다.
japangi("사이다")
japangi("탄산수")

function japangi_v2(drink, num){
    console.log(drink+num+'개 나왔습니다')
}
japangi_v2('탄산수',2)
japangi_v2('콜라',10)

console.log('--------------------')

//Q. 피연산자 2개가 항상 더해져서 결과가 나오는 함수 만들기
function calc1(num1, num2){
    console.log(num1+num2);
    console.log(`${num1}+${num2}=${num1+num2}`);
}
calc1(1,1)
calc1(130,1)
calc1(130,4930)
calc1(136330,4366930)

//Q. 피연산자 2개와 산술연산자를 설정해서 자유로운 계산이 가능한 함수 만들기
function calc2(num1,oper,num2){
    result = oper=='*' ? num1*num2 : null
    console.log(`${num1+oper+num2}=${result}`);
}
calc2(4,'-',2)
calc2(4,'/',2)
calc2(10,'*',2)
console.log('--------------------')

//함수의 데이터값 반환 return
let total = 0
function func1(num){
    total = num+1 
    return total //return은 만나면 바로 함수 밖으로 나가기 때문에 대입값을 꼭 위에다가 적어야함
}
console.log(total)
console.log(func1(5))
// window.alert(func1(5))