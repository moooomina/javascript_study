let num = 0; 
function clickNum(){/* 대괄호:배열 / 중괄호:객체,함수 */
    num+=1; //처리
    console.log(num); //출력
}

const obj = {
    name:'김모모',
    gender:'남성',
    birthday:function(){
        console.log(`${obj.name}야 생일 축하해~!`)
    }//익명함수(birthday가 함수이름!)
}
//---------------
const member = [ /* 배열묶음 */
    {
        name:'김모모',
        age:20,
    },{
        name:'박모모',
        age:21,
    },{
        name:'이모모',
        age:22,
    }/* 각각의 회원들(객체)정보 */
]
console.log(member);

const item = [
    {
        brandName:'청정원',
        productName:'파스타소스',
        sale:'38%',
        price:13900,
        reviewPoint:'4.7',
        reviewNum:'7,620',
        option:'특가',
        cardOption:'최대 10% 결제할인',
    },{
        brandName:'청정원',
        productName:'파스타소스',
        sale:'38%',
        price:13900,
        reviewPoint:'4.7',
        reviewNum:'7,620',
        option:'특가',
        cardOption:'최대 10% 결제할인',
    },
]
console.log(item);