//객체 object
//데이터 저장소 = 변수(한번에 한가지 값),배열(2개 이상의 값)'
//특정 값에 해당되는 속성을 추가해서 데이터 관리를 용이하게
const cat = {
    color:'black',
    age:1,
} 
console.log(cat);
console.log(cat.color); //속성에는 ()가 들어가지 않음
console.log(cat.age);
//1살 black 고양이 분양합니다
console.log(`${cat.age}살 ${cat.color} 고양이 분양합니다.`);
// console.log(cat.length);//index, length는 배열의 기본적인 속성이므로 object에는 없다.
const cat2 = {
    color:['white','yellow','black'],
    age:2,
}
console.log(cat2);
//고양이의 털 색깔은 yellow, whtie, black으로 이루어져 있습니다.
console.log(`고양이의 털 색깔은 ${cat2.color[1]},${cat2.color[0]},${cat2.color[2]}으로 이루어져있습니다.`);
const cat3 = {
    'cat type':'코리안 숏헤어',
    color:['흰색','검은색'],
    age:1,
    gender:'암컷',
    adoption:'입양 전',
    neutralization:'중성화 전',
    health:'양호',
}
console.log(cat3);
console.log(cat3['cat type']); //속성 이름에 공백이 들어간다면 배열방식(대가로)으로 불러줘야 에러X
// console.log(cat3.'cat type') //error
// 입양 전 -> 입양 완료
cat3.adoption = '입양 완료' //값을 바꾸고 싶을때는 대입연산자로 변경하면 됨.
console.log(cat3);
cat3.neutralization3 = '중성화 완료'
cat3.age += 1;
console.log(cat3);