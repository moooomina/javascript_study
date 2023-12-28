//DOM document object model
const h1Tag = document.getElementsByTagName('h1');
console.log(h1Tag[0]);
/* 
    getElementsByTagName
    * HTML에 TagNode가 2개 이상일 때 그 중 1개만 동적인 기능이 적용되어 
    DOM으로 등록이 필요한 거라면 변수 지정시 [index] 설정하고 대입하기
    (1-2개만 동적인 기능을 사용한다면 선언할때 사용:document.getElementsByTagName('태그')[번호];)
    * HTML에 TagNode가 2개 이상일 때 그 중 여러개에 동적인 기능이 적용되어
    DOM이 된다면 변수 지정시는 [index] 없이 대입하고 해당 DOM 변수 호출 시
    필요한 경우 [index] 사용하기
    (동적인 기능이 여러개 사용된다면 출력할때 사용:document.getElementsByTagName('태그'); console.log(태그Tag[번호]);)
*/
//상황1. ul에 동적인 기능이 필요한 경우 (원하는 결과가 있으면 인덱스[]를 붙여주는게 좋음)
const ulTag = document.getElementsByTagName('ul')[0];
console.log(ulTag);
//상황2. ul-li 3개 모두에 동적인 기능이 필요한 경우
const liTag = ulTag.getElementsByTagName('li'); //부모가 ul이므로 document 자리에 부모Tag 적어주기
console.log(liTag[0]);
console.log(liTag[1]);
console.log(liTag[2]);
//상황3. ul-li-a 중 두번째 a만 동적인 기능이 필요한 경우
// const aTagVer1 = document.getElementsByTagName('a')[1]; -> X
const aTagVer1 = liTag[1].getElementsByTagName('a');
console.log(aTagVer1);
//상황4. ul-li-a 3개의 a에 동적인 기능이 필요한 경우
const aTagVer2 = document.getElementsByTagName('a');
console.log(aTagVer2[0]);
console.log(aTagVer2[1]);
console.log(aTagVer2[2]);
/* 
    DOM Node 변수 지정 시
    HTMLCollection 결과는 변수가 정상인지 오류인지 간단한 확인 시에만 사용하고(인덱스 없이 사용),
    실제로 DOM Node 변수를 이용한 동적인 결과를 만들어야 할때는 직접적인 접근으로 대상을 하나씩 개별인식하게 만들어야한다. [index]
*/